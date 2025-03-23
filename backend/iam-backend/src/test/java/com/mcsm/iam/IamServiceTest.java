package com.mcsm.iam;

import com.mcsm.iam.services.IamService;
import org.junit.jupiter.api.Test;
import java.util.Properties;
import static org.junit.jupiter.api.Assertions.*;

public class IamServiceTest {

    @Test
    public void testAwsConfigLoad() {
        Properties awsConfig = IamService.getAwsConfig();
        assertNotNull(awsConfig.getProperty("AWS_ACCESS_KEY_ID"));
        assertNotNull(awsConfig.getProperty("AWS_SECRET_ACCESS_KEY"));
    }

    @Test
    public void testAzureConfigLoad() {
        Properties azureConfig = IamService.getAzureConfig();
        assertNotNull(azureConfig.getProperty("AZURE_CLIENT_ID"));
        assertNotNull(azureConfig.getProperty("AZURE_CLIENT_SECRET"));
    }

    @Test
    public void testGcpConfigLoad() {
        Properties gcpConfig = IamService.getGcpConfig();
        assertNotNull(gcpConfig.getProperty("GCP_PROJECT_ID"));
        assertNotNull(gcpConfig.getProperty("GCP_CLIENT_EMAIL"));
    }
}
