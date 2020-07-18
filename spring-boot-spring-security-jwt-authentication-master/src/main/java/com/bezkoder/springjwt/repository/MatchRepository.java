package com.bezkoder.springjwt.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.bezkoder.springjwt.models.Match;

public interface MatchRepository extends JpaRepository<Match, Long> {
}