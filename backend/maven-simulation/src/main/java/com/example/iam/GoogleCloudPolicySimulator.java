package com.example.iam;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.File;
import java.io.IOException;

public class GoogleCloudPolicySimulator {
    private static final String POLICY_FILE = "src/main/resources/gcp-iam-policy.json";

    public boolean checkPermission(String user, String action) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode rootNode = objectMapper.readTree(new File(POLICY_FILE));

        for (JsonNode policy : rootNode.get("policies")) {
            if (policy.get("user").asText().equals(user) &&
                policy.get("allowedActions").toString().contains(action)) {
                return true;
            }
        }
        return false;
    }
}
