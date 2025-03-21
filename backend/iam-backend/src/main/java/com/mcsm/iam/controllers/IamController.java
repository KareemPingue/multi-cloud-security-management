package com.mcsm.iam.controllers;

import com.mcsm.iam.services.AwsIamService;
import com.mcsm.iam.services.GcpIamService;
import com.mcsm.iam.services.AzureIamService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/iam")
public class IamController {
    private final AwsIamService awsIamService = new AwsIamService();
    private final GcpIamService gcpIamService = new GcpIamService();
    private final AzureIamService azureIamService = new AzureIamService();

    @PostMapping("/aws/create-user/{username}")
    public String createAwsUser(@PathVariable String username) {
        return awsIamService.createUser(username);
    }

    @PostMapping("/gcp/start-instance/{instanceId}")
    public String startGcpInstance(@PathVariable String instanceId) {
        return gcpIamService.startInstance(instanceId);
    }

    @PostMapping("/azure/block-ip/{ip}")
    public String blockAzureIP(@PathVariable String ip) {
        return azureIamService.blockIP(ip);
    }
}
