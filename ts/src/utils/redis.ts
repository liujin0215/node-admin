import redis = require('redis');
import bluebird = require('bluebird');
import { redisConfig } from '../config/config';

declare module 'redis' {
    export interface RedisClient extends NodeJS.EventEmitter {
        setAsync(key: string, value: string): Promise<void>;
        getAsync(key: string): Promise<string>;
        hsetAsync(key: string, filed: string, value: string): Promise<void>;
        hgetAsync(key: string, filed: string): Promise<string>;
        hdelAsync(key: string, filed: string): Promise<void>;
        delAsync(key: string): Promise<void>;
        expireAsync(key: string, n: number): Promise<void>;
    }
}

export const redisClient = bluebird.promisifyAll(redis.createClient(redisConfig)) as redis.RedisClient