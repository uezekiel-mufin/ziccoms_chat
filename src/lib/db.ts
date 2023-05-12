import { Redis } from '@upstash/redis';

export const db = new Redis({
	url: process.env.NEXT_PUBLIC_UPSTASH_REDIS_RES,
	token: process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_TOKEN,
});
