import { RedisSessionManager, SessionManager } from "./manager";
import { redisClient } from "../utils/redis";

const sessionManger = new RedisSessionManager(redisClient) as SessionManager
export default sessionManger