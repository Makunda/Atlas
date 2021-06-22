package com.castsoftware.pythia.models;


import com.castsoftware.pythia.authorizations.PermissionEnum;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;

@Node("PythiaAdminGroup")
public class AdminGroupEntity {

	@Id
	private Long id;

	private final String name;
	private final PermissionEnum frameworks;
	private final PermissionEnum groups;
	private final PermissionEnum keys;

	public AdminGroupEntity(String name, PermissionEnum frameworks, PermissionEnum groups, PermissionEnum keys) {
		this.name = name;
		this.frameworks = frameworks;
		this.groups = groups;
		this.keys = keys;
	}
}
