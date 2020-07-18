package com.bezkoder.springjwt.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bezkoder.springjwt.models.Equipe;

public interface EquipeRepository extends JpaRepository<Equipe, Long> {
	List<Equipe> findByMatchId(Long matchId);	
}
