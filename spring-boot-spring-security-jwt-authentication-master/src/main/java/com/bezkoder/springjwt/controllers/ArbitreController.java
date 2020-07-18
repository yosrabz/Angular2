package com.bezkoder.springjwt.controllers;


import java.util.List;

import javax.validation.Valid;

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

import com.bezkoder.springjwt.exception.NotFoundException;
import com.bezkoder.springjwt.repository.ArbitreRepository;
import com.bezkoder.springjwt.repository.MatchRepository;
import com.bezkoder.springjwt.models.Arbitre;
@RestController
@RequestMapping("/api")
public class ArbitreController {
	@Autowired
	private ArbitreRepository arbitreRepository;
	
	@Autowired
	private MatchRepository matchRepository;
	
    @GetMapping("/matchs/{matchId}/arbitres")
    public List<Arbitre> getContactByMatchId(@PathVariable Long matchId) {
    	
        if(!matchRepository.existsById(matchId)) {
            throw new NotFoundException("Match not found!");
        }
    	
    	return arbitreRepository.findByMatchId(matchId);
    }
    
    @PostMapping("/matchs/{matchId}/arbitres")
    public Arbitre addArbitre(@PathVariable Long matchId,
                            @Valid @RequestBody Arbitre arbitre) {
        return matchRepository.findById(matchId)
                .map(match -> {
                    arbitre.setMatch(match);
                    return arbitreRepository.save(arbitre);
                }).orElseThrow(() -> new NotFoundException("Match not found!"));
    }
    
    @PutMapping("/matchs/{matchId}/arbitres/{arbitreId}")
    public Arbitre updateArbitre(@PathVariable Long matchId,
    								@PathVariable Long arbitreId,
    								@Valid @RequestBody Arbitre arbitreUpdated) {
    	
    	if(!matchRepository.existsById(matchId)) {
    		throw new NotFoundException("Match not found!");
    	}
    	
        return arbitreRepository.findById(arbitreId)
                .map(arbitre -> {
                    arbitre.setName(arbitreUpdated.getName());
                    arbitre.setAge(arbitreUpdated.getAge());
                    return arbitreRepository.save(arbitre);
                }).orElseThrow(() -> new NotFoundException("Arbitre not found!"));
    }
    
    @DeleteMapping("/matchs/{matchId}/arbitres/{arbitreId}")
    public String deleteArbitre(@PathVariable Long matchId,
    							   @PathVariable Long arbitreId) {
    	
    	if(!matchRepository.existsById(matchId)) {
    		throw new NotFoundException("Match not found!");
    	}
    	
        return arbitreRepository.findById(arbitreId)
                .map(arbitre -> {
                    arbitreRepository.delete(arbitre);
                    return "Deleted Successfully!";
                }).orElseThrow(() -> new NotFoundException("Contact not found!"));
    }
}
