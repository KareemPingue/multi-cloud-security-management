package com.mcsm.iam.services;

public class GcpIamService {
    public String startInstance(String instanceId) {
        return "GCP Compute Instance " + instanceId + " started.";
    }

    public String stopInstance(String instanceId) {
        return "GCP Compute Instance " + instanceId + " stopped.";
    }
}
