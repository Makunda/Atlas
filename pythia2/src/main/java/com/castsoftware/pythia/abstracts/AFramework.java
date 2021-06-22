package com.castsoftware.pythia.abstracts;

import java.util.List;

public abstract class AFramework {
	protected Long id;
	protected String name;
	protected String pattern;
	protected Boolean isRegex;
	protected String description;
	protected String category;
	protected String type;
	protected String detectionData;
	protected List<String> internalType;
	protected String location;
	protected String discoveryDate;
	protected Double percentageOfDetection;

	public AFramework(Long id,
					  String name,
					  String pattern,
					  Boolean isRegex,
					  String description,
					  String category,
					  String type,
					  String detectionData,
					  List<String> internalType,
					  String location,
					  String discoveryDate,
					  Double percentageOfDetection) {
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
