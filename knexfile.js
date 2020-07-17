module.exports = {
	testing: {
		client: "sqlite3",
		useNullAsDefault: true,
		connection: {
			filename: "./data/test.db3",
		},
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
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
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
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
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
		migrations: {
			directory: "./data/migrations",
		},
		seeds: {
			directory: "./data/seeds",
		},
	}
}
