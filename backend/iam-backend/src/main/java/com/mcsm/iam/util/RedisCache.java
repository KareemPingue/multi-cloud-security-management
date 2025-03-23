package com.mcsm.iam.util;

import redis.clients.jedis.Jedis;

public class RedisCache {
    private Jedis jedis;

    public RedisCache(String host, int port) {
        this.jedis = new Jedis(host, port);
    }

    public void set(String key, String value) {
        jedis.set(key, value);
    }

    public String get(String key) {
        return jedis.get(key);
    }

    public void delete(String key) {
        jedis.del(key);
    }

    public boolean exists(String key) {
        return jedis.exists(key);
    }

    public void close() {
        jedis.close();
    }
}
