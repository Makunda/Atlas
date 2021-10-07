const tsConfig = require("./tsconfig.json");
const tsConfigPaths = require("tsconfig-paths");

const baseUrl = "./dist"; // Either absolute or relative path. If relative it's resolved to current working directory.
const paths = {
  "@agents/*": ["dist/agents/*"],
  "@extensions/*": ["dist/extensions/*"],
  "@daos/*": ["dist/daos/*"],
  "@entities/*": ["dist/entities/*"],
  "@shared/*": ["dist/shared/*"],
  "@assistants/*": ["dist/assistants/*"],
  "@controller/*": ["dist/controller/*"],
  "@services/*": ["dist/services/*"],
  "@interfaces/*": ["dist/interfaces/*"],
  "@dtos/*": ["dist/dtos/*"],
  "@utils/*": ["dist/utils/*"],
  "@database/*": ["dist/database/*"],
  "@exceptions/*": ["dist/exceptions/*"],
  "@postgres/*": ["dist/postgres/*"],
  "@server": ["dist/Server"],
};

/**
 * "@agents": "dist/agents",
    "@daos": "dist/daos",
    "@entities": "dist/entities",
    "@shared": "dist/shared",
    "@assistants": "dist/assistants",
    "@server": "dist/Server",
    "@controller": "dist/controller",
    "@services": "dist/services",
    "@dtos": "dist/dtos",
    "@utils": "dist/utils",
    "@postgres": "dist/postgres",
    "@database": "dist/database",
    "@interfaces": "dist/interfaces",
    "@exceptions": "dist/exceptions"
 */

const cleanup = tsConfigPaths.register({
    baseUrl,
    paths: paths
});

cleanup()