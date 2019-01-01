const uuid = require('uuid');
const { errNoSession } = require('./err');

class RedisSession {
    constructor(rds, id, token) {
        this.rds = rds;
        this.id = id;
        this.token = token;
    }

    async set(key, value) {
        try {
            await this.rds.setAsync(key, value);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    async get(key) {
        try {
            return await this.rds.getAsync(key);
        } catch (err) {
            return Promise.reject(err);
        }
    }
}

class RedisSessionManager {
    constructor(rds, baseKey = 'session:', ttl = 86400) {        
        this.rds = rds;
        this.baseKey = baseKey;
        this.ttl = ttl;
    }

    async newSession(id) {
        try {
            let token = uuid.v4();
            let key = this.baseKey+id;
            await this.rds.delAsync(key);
            await this.rds.hsetAsync(key, 'token', token);
            await this.rds.expireAsync(key, this.ttl);
            return new RedisSession(this.rds, id, token);
        } catch (err) {
            return Promise.reject(err);
        }        
    }

    async getSession(id) {
        try {
            let token = await this.rds.hgetAsync(this.baseKey+id, 'token');
            if (!token) {
                return Promise.reject(errNoSession);
            }
            return new RedisSession(this.rds, id, token);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    async expireSession(id) {
        try {
            await this.rds.expireAsync(this.baseKey+id, this.ttl);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    async delSession(id) {
        try {
            await this.rds.delAsync(this.baseKey+id);
        } catch (err) {
            return Promise.reject(err);
        }
    }
}

module.exports = RedisSessionManager;