module.exports = {
	testing: {
		client: "sqlite3",
		useNullAsDefault: true,
		connection: {
			filename: "./data/test.db3",
		},
		migrations: {
			directory: "./data/migrations",
		},
		seeds: {
			directory: "./data/seeds",
		},
	},
	development: {
		client: "sqlite3",
		useNullAsDefault: true,
		connection: {
			filename: "./data/parts.db3",
		},
		migrations: {
			directory: "./data/migrations",
		},
		seeds: {
			directory: "./data/seeds",
		},
	},
	production: {
		client: "sqlite3",
		useNullAsDefault: true,
		connection: {
			filename: "./data/parts.db3",
		},
		migrations: {
			directory: "./data/migrations",
		},
		seeds: {
			directory: "./data/seeds",
		},
	}
}
