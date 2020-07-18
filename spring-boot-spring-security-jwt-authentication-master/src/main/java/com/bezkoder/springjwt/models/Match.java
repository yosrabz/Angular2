package com.bezkoder.springjwt.models;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "matchs")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) 
public class Match implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "lieu")
	private String lieu;
	
    @OneToMany(mappedBy = "match", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Arbitre> arbitres;
	
    @OneToMany(mappedBy = "match", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Equipe> equipes;
	
    
    
	public Match() {}
	
	public Match(String name, String lieu) {
		this.name = name;
		this.lieu = lieu;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public Long getId() {
		return this.id;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getName() {
		return this.name;
	}
	
	public void setLieu(String lieu) {
		this.lieu = lieu;
	}
	
	public String getLieu() {
		return this.lieu;
	}
	
	public void setArbitres(Set<Arbitre> arbitres) {
		this.arbitres = arbitres;
	}
	
	public Set<Arbitre> getArbitres(){
		return this.arbitres;
	}
	
	
	public void setEquipes(Set<Equipe> equipes) {
		this.equipes = equipes;
	}
	
	public Set<Equipe> getEquipes(){
		return this.equipes;
	}
}
