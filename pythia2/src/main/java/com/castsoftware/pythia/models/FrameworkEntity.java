package com.castsoftware.pythia.models;

import org.springframework.data.neo4j.core.schema.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Node("ArtemisFramework")
public class FrameworkEntity {

	@Id
	@GeneratedValue
	private final Long id;

	@Property
	private final String name;

	@Property
	private final String pattern;
	@Property
	private final Boolean isRegex;
	@Property
	private final String description;
	@Property
	private final String category;
	@Property
	private final String type;
	@Property
	private final String detectionData;
	@Property
	private final List<String> internalType;
	@Property
	private final String location;
	@Property
	private final String discoveryDate;
	@Property
	private final Double percentageOfDetection;

	@Relationship(type = "INCLUDES", direction = Relationship.Direction.INCOMING)
	private final Set<CategoryEntity> categoryNode = new HashSet<>();

	public FrameworkEntity(Long id, String name, String pattern, Boolean isRegex, String description, String category, String type, String detectionData, List<String> internalType, String location, String discoveryDate, Double percentageOfDetection) {
		this.id = id;
		this.name = name;
		this.pattern = pattern;
		this.isRegex = isRegex;
		this.description = description;
		this.category = category;
		this.type = type;
		this.detectionData = detectionData;
		this.internalType = internalType;
		this.location = location;
		this.discoveryDate = discoveryDate;
		this.percentageOfDetection = percentageOfDetection;
	}
}
