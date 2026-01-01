package com.simran.blog.blog_backend.Controller;

import java.io.IOException;
import java.time.Duration;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.CacheControl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.simran.blog.blog_backend.Service.S3Service;

@RestController
@RequestMapping("/api/s3")
public class S3Controller {

    private final S3Service s3Service;
    @Value("${aws.s3.bucketName}")
    private String bucketName;

    public S3Controller(S3Service s3Service) {
        this.s3Service = s3Service;
    }

    @PostMapping("/upload")
    public void uploadFile(@RequestParam("key") String key, @RequestParam("file") MultipartFile file) {
        try {
            byte[] fileBytes = file.getBytes();
            s3Service.putObject(bucketName, key, fileBytes);
            System.out.println("File uploaded successfully");
        } catch (IOException e) {
            e.printStackTrace();
            System.out.println("File upload failed");
        }
    }

    @GetMapping("/download/{key}")
    public ResponseEntity<byte[]> downloadFile(@PathVariable String key) {
        byte[] data = s3Service.getObject(bucketName, key);
        return ResponseEntity.ok()
                .cacheControl(CacheControl.maxAge(7, TimeUnit.DAYS))
                .body(data);
    }

}
