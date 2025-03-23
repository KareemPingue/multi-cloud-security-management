package com.mcsm.iam.services;

import java.util.HashMap;
import java.util.Map;

public class AzureCloudPolicy {
    private final Map<String, String> policyStore = new HashMap<>();

    public AzureCloudPolicy() {
        // Simulated IAM policies
        policyStore.put("admin", "Full access to all Azure services");
        policyStore.put("developer", "Limited access to compute and database services");
    }

    public String getPolicy(String role) {
        return policyStore.getOrDefault(role, "No access");
    }
}
