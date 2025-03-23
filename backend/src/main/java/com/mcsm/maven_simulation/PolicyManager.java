package com.mcsm.maven_simulation;

import java.util.Map;

public class PolicyManager {
    private final Map<String, String> policies = Map.of(
            "admin", "Full access",
            "developer", "Limited access"
    );

    public String getPolicy(String role) {
        return policies.getOrDefault(role, "No access");
    }
}
