const client = require('./redis');

async function test() {
    try {
        let ret = await client.setAsync('test', '1');
        console.log(ret);
    } catch (err) {
        //console.log(err);
        Promise.reject(err);
    }
}

test().catch(err =>{console.log(err);});