package com.mcsm.iam.util;

import java.util.Map;
import java.util.HashMap;

public class OPAEvaluator {
    private final Map<String, String> accessPolicies = new HashMap<>();

    public OPAEvaluator() {
        // Simulated policies
        accessPolicies.put("admin", "Allowed to perform all actions");
        accessPolicies.put("developer", "Limited to read-only actions");
    }

    public boolean evaluatePolicy(String role, String action) {
        String policy = accessPolicies.getOrDefault(role, "No access");
        return policy.contains(action) || policy.equals("Allowed to perform all actions");
    }
}
