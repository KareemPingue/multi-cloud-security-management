package com.mcsm.iam.services;

public class AzureIamService {
    public String monitorThreats() {
        return "Azure Security Monitoring Active.";
    }

    public String blockIP(String ip) {
        return "Azure blocked IP: " + ip;
    }
}
