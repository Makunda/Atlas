package com.castsoftware.pythia.models;

import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;
import org.springframework.data.neo4j.core.schema.Property;
import org.springframework.data.neo4j.core.schema.Relationship;

import java.util.HashSet;
import java.util.Set;

@Node("ArtemisCategory")
public class CategoryEntity {
	@Relationship(type = "INCLUDES", direction = Relationship.Direction.OUTGOING)
	public Set<FrameworkEntity> frameworksList = new HashSet<>();
	@Id
	private Long id;
	@Property
	private final String name;
	@Property
	private final String iconUrl;

	public CategoryEntity(String name, String iconUrl) {
		this.name = name;
		this.iconUrl = iconUrl;
	}

}
