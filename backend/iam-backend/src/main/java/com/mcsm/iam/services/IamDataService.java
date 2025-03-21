package com.mcsm.iam.services;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.File;
import java.io.IOException;
import java.util.List;

public class IamDataService {
    private static final String DATA_PATH = "src/main/resources/static/iam-data.json";
    private JsonNode rootNode;

    public IamDataService() {
        loadData();
    }

    private void loadData() {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            rootNode = objectMapper.readTree(new File(DATA_PATH));
        } catch (IOException e) {
            throw new RuntimeException("Error loading IAM data: " + e.getMessage());
        }
    }

    public JsonNode getRoles() { return rootNode.get("roles"); }
    public JsonNode getUsers() { return rootNode.get("users"); }
}
