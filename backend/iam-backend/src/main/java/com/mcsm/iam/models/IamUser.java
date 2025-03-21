package com.mcsm.iam.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class IamUser {
    private String username;
    private String role;

    // No-arg constructor
    public IamUser() {
    }

    @JsonCreator
    public IamUser(@JsonProperty("username") String username, 
                   @JsonProperty("role") String role) {
        this.username = username;
        this.role = role;
    }

    // Getters and setters
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
