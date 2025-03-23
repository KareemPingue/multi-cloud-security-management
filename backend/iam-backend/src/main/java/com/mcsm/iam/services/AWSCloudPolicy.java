package com.mcsm.iam.services;

import java.util.HashMap;
import java.util.Map;

public class AWSCloudPolicy {
    private final Map<String, String> policyStore = new HashMap<>();

    public AWSCloudPolicy() {
        // Simulated IAM policies
        policyStore.put("admin", "Full access to all AWS services");
        policyStore.put("developer", "Limited access to EC2 and S3 services");
    }

    public String getPolicy(String role) {
        return policyStore.getOrDefault(role, "No access");
    }
}
