package com.mcsm.iam.services;

import com.mcsm.iam.util.RedisCache;

public class IamDataService {
    private RedisCache cache;

    public IamDataService() {
        this.cache = new RedisCache("localhost", 6379);
    }

    public void storeUserPolicy(String userId, String policyJson) {
        cache.set("policy:" + userId, policyJson);
    }

    public String getUserPolicy(String userId) {
        return cache.get("policy:" + userId);
    }

    public void clearUserPolicy(String userId) {
        cache.delete("policy:" + userId);
    }
}
