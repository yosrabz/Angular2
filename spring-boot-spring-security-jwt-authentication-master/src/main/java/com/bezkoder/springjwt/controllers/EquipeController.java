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
import com.bezkoder.springjwt.repository.EquipeRepository;
import com.bezkoder.springjwt.repository.ArbitreRepository;
import com.bezkoder.springjwt.repository.MatchRepository;
import com.bezkoder.springjwt.models.Arbitre;
import com.bezkoder.springjwt.models.Equipe;
import com.bezkoder.springjwt.models.Match;


@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/api")
public class EquipeController {
	
	@Autowired
	private EquipeRepository equipeRepository;
	
	
	@Autowired
	private MatchRepository matchRepository;
	
	
    @GetMapping("/equipes")
	@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public List<Equipe> getAllEquipes() {
    	return equipeRepository.findAll();
    }
    
    @GetMapping("/equipes/{id}")
	@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
     public Equipe getEquipeByID(@PathVariable Long id) {
    	Optional<Equipe> optEquipe = equipeRepository.findById(id);
    	if(optEquipe.isPresent()) {
    		return optEquipe.get();
    	}else {
    		throw new NotFoundException("Equipe not found with id " + id);
    	}
    }
    
    @PostMapping("/matchs/{matchId}/equipes")
	@PreAuthorize("hasRole('ADMIN')")
    public Equipe addEquipe(@PathVariable Long matchId,
                            @Valid @RequestBody Equipe equipe) {
        return matchRepository.findById(matchId)
                .map(match -> {
                    equipe.setMatch(match);
                    return equipeRepository.save(equipe);
                }).orElseThrow(() -> new NotFoundException("Equipe not found!"));
    }
    
    @PutMapping("/equipes/{id}")
	@PreAuthorize("hasRole('ADMIN')")
    public Equipe updateEquipe(@PathVariable Long id,
                                   @Valid @RequestBody Equipe equipeUpdated) {
        return equipeRepository.findById(id)
                .map(equipe -> {
                    equipe.setName(equipeUpdated.getName());
                    equipe.setAge(equipeUpdated.getAge());
                    equipe.setDrapeau(equipeUpdated.getDrapeau());
                    return equipeRepository.save(equipe);
                }).orElseThrow(() -> new NotFoundException("Equipe not found with id " + id));
    }
    
    @DeleteMapping("/equipes/{id}")
	@PreAuthorize("hasRole('ADMIN')")
    public String deleteEquipe(@PathVariable Long id) {
        return equipeRepository.findById(id)
                .map(equipe -> {
                    equipeRepository.delete(equipe);
                    return "Delete Successfully!";
                }).orElseThrow(() -> new NotFoundException("Equipe not found with id " + id));
    }
}