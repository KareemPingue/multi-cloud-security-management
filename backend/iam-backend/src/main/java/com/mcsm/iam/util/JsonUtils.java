package com.mcsm.iam.util;

import java.io.File;
import java.io.IOException;
import java.util.List;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mcsm.iam.model.IamPolicy;
import com.mcsm.iam.model.IamUser;

public class JsonUtils {
    private static final ObjectMapper mapper = new ObjectMapper();

    public static List<IamUser> loadUsers(String filePath) {
        try {
            return mapper.readValue(new File(filePath), new TypeReference<>() {});
        } catch (IOException e) {
            throw new RuntimeException("Error loading users", e);
        }
    }

    public static List<IamPolicy> loadPolicies(String filePath) {
        try {
            return mapper.readValue(new File(filePath), new TypeReference<>() {});
        } catch (IOException e) {
            throw new RuntimeException("Error loading policies", e);
        }
    }
}
