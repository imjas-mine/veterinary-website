package com.simran.blog.blog_backend.Controller;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

import javax.xml.crypto.dsig.keyinfo.RetrievalMethod;

import org.apache.coyote.http11.filters.VoidInputFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.PutExchange;

import com.simran.blog.blog_backend.Model.Post;
import com.simran.blog.blog_backend.Repository.PostRepo;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("/api/posts")
public class PostController {

	@Autowired
	private PostRepo postRepo;

	@GetMapping()
	public List<Post> getAllPosts() {
		return postRepo.findAll();
	}

	@GetMapping("/{id}")
	public Post getPostById(@PathVariable Integer id) {
		return postRepo.findById(id).orElseThrow(() -> new RuntimeException("cannot find the post"));
	}

	@PostMapping
	public Post createPost(@RequestBody Post post) {
		post.setPostedOn(LocalDate.now());
		return postRepo.save(post);
	}

	@DeleteMapping("/{id}")
	public void deletePostById(@PathVariable Integer id) {
		postRepo.deleteById(id);
	}

	@PutMapping("/{id}")
	public Post updatePostById(@PathVariable Integer id, @RequestBody Post updatedPost) {
		Post existingPost = getPostById(id);
		existingPost.setTitle(updatedPost.getTitle());
		existingPost.setCategory(updatedPost.getCategory());
		existingPost.setDescription(updatedPost.getDescription());
		existingPost.setPostedOn(LocalDate.now());
		existingPost.setImageUrl(updatedPost.getImageUrl());
		return postRepo.save(existingPost);
	}
}
