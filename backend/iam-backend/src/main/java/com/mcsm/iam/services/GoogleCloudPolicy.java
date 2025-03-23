package com.mcsm.iam.services;

import java.util.HashMap;
import java.util.Map;

public class GoogleCloudPolicy {
    private final Map<String, String> policyStore = new HashMap<>();

    public GoogleCloudPolicy() {
        // Simulated IAM policies
        policyStore.put("admin", "Full access to all GCP services");
        policyStore.put("developer", "Limited access to compute and storage services");
    }

    public String getPolicy(String role) {
        return policyStore.getOrDefault(role, "No access");
    }
}
