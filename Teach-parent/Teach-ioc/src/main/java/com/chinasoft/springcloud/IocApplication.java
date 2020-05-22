package com.chinasoft.springcloud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.feign.EnableFeignClients;

@SpringBootApplication
@EnableEurekaClient
@EnableFeignClients(basePackages="com.chinasoft.springcloud.service")
public class IocApplication {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		SpringApplication.run(IocApplication.class, args);
	}
}
