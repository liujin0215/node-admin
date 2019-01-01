const client = require('./redis');

async function testSet(key, value) {
    try {
        let ret = await client.setAsync(key, value);
        console.log(ret);
    } catch (err) {
        //console.log(err);
        Promise.reject(err);
    }
}

async function testHset(key, field, value) {
    try {
        let ret = await client.hset(key, field, value);
        console.log(ret);
    } catch (err) {
        //console.log(err);
        Promise.reject(err);
    }
}

async function testHget(key, field) {
    try {
        let ret = await client.hget(key, field);
        console.log(ret);
    } catch (err) {
        //console.log(err);
        Promise.reject(err);
    }
}

async function testGet(key) {
    try {
        let ret = await client.getAsync(key);
        console.log(ret);
    } catch (err) {
        console.log(err);
        Promise.reject(err);
    }
}

async function testDel(key) {
    try {
        let ret = await client.delAsync(key);
        console.log(ret);
    } catch (err) {
        //console.log(err);
        Promise.reject(err);
    }
}

async function testExpire(key, n) {
    try {
        let ret = await client.expireAsync(key, n);
        console.log(ret);
    } catch (err) {
        //console.log(err);
        Promise.reject(err);
    }
}

testSet('test', '111').catch(err => { console.log(err); });
testGet('test').catch(err => { console.log(err); });
testDel('test').catch(err => { console.log(err); });
testHset('test', 'xxx', '111').catch(err => { console.log(err); });
testHget('test', 'xxx').catch(err => { console.log(err); });
testExpire('test', 100).catch(err => { console.log(err); });
testDel('test').catch(err => { console.log(err); });