package com.mcsm.iam.util;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;

public class JsonUtils {
    private static final String JSON_FILE_PATH = "src/main/resources/static/iam-data.json";

    public static JsonNode loadJsonData() throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readTree(new File(JSON_FILE_PATH));
    }
}
