package com.luispellis.portfolio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

@SpringBootApplication
@ConfigurationPropertiesScan
public class NexusPortfolioApplication {

    public static void main(String[] args) {
        SpringApplication.run(NexusPortfolioApplication.class, args);
    }
}
