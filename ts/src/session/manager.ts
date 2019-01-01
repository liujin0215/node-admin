import { RedisClient } from "redis";
import uuid = require("uuid");
import { errNoSession } from "./err";

interface Session {
    id: string;
    token: string;
    set(key: string, value: string): Promise<void>;
    get(key: string): Promise<string>;
}

export interface SessionManager {
    newSession(id: any): Promise<Session>;
    getSession(id: any): Promise<Session>;
    expireSession(id: any): Promise<void>;
    delSession(id: any): Promise<void>;
}


class RedisSession implements Session {
    constructor(
        private rds: RedisClient,
        public id: string,
        public token: string
    ) { }

    async set(key: string, value: string) {
        try {
            return await this.rds.setAsync(key, value);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    async get(key: string) {
        try {
            return await this.rds.getAsync(key);
        } catch (err) {
            return Promise.reject(err);
        }
    }
}

export class RedisSessionManager implements SessionManager {
    constructor(
        private rds: RedisClient,
        public baseKey: string = 'session:',
        public ttl: number = 86400
    ) { }

    async newSession(id: any) {
        try {
            let token = uuid.v4();
            let key = this.baseKey + id;
            await this.rds.delAsync(key);
            await this.rds.hsetAsync(key, 'token', token);
            await this.rds.expireAsync(key, this.ttl);
            return new RedisSession(this.rds, id, token) as Session;
        } catch (err) {
            return Promise.reject(err);
        }
    }

    async getSession(id: any) {
        try {
            let token = await this.rds.hgetAsync(this.baseKey + id, 'token');
            if (!token) {
                return Promise.reject(errNoSession);
            }
            return new RedisSession(this.rds, id, token) as Session;
        } catch (err) {
            return Promise.reject(err);
        }
    }

    async expireSession(id: any) {
        try {
            return await this.rds.expireAsync(this.baseKey + id, this.ttl);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    async delSession(id: any) {
        try {
            return await this.rds.delAsync(this.baseKey + id);
        } catch (err) {
            return Promise.reject(err);
        }
    }
}