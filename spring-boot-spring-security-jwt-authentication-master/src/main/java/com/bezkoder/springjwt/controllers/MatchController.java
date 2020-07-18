package com.bezkoder.springjwt.controllers;


import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.springjwt.exception.NotFoundException;
import com.bezkoder.springjwt.repository.MatchRepository;
import com.bezkoder.springjwt.models.Match;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/api")
public class MatchController {
	
	@Autowired
	private MatchRepository matchRepository;
	
    @GetMapping("/matchs")
	@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
     public List<Match> getAllMatchs() {
    	return matchRepository.findAll();
    }
    
    @GetMapping("/matchs/{id}")
	@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public Match getMatchByID(@PathVariable Long id) {
    	Optional<Match> optMatch = matchRepository.findById(id);
    	if(optMatch.isPresent()) {
    		return optMatch.get();
    	}else {
    		throw new NotFoundException("Match not found with id " + id);
    	}
    }
    
    @PostMapping("/matchs")
	@PreAuthorize("hasRole('ADMIN')")

    public Match createMatch(@Valid @RequestBody Match match) {
        return matchRepository.save(match);
    }
    
    @PutMapping("/matchs/{id}")
	@PreAuthorize("hasRole('ADMIN')")

    public Match updateMatch(@PathVariable Long id,
                                   @Valid @RequestBody Match matchUpdated) {
        return matchRepository.findById(id)
                .map(match -> {
                    match.setName(matchUpdated.getName());
                    match.setLieu(matchUpdated.getLieu());
                    return matchRepository.save(match);
                }).orElseThrow(() -> new NotFoundException("Match not found with id " + id));
    }
    
    @DeleteMapping("/matchs/{id}")
	@PreAuthorize("hasRole('ADMIN')")

    public String deleteMatch(@PathVariable Long id) {
        return matchRepository.findById(id)
                .map(match -> {
                    matchRepository.delete(match);
                    return "Delete Successfully!";
                }).orElseThrow(() -> new NotFoundException("Match not found with id " + id));
    }
}