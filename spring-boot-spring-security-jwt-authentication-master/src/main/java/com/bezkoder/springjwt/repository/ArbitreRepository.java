package com.bezkoder.springjwt.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bezkoder.springjwt.models.Arbitre;

public interface ArbitreRepository extends JpaRepository<Arbitre, Long> {
	List<Arbitre> findByMatchId(Long matchId);	
}
