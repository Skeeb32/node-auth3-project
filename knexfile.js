module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './auth.db3'
		},
		useNullAsDefault: true,
		pool: {
			afterCreate: (conn, done) => {
			  conn.run('PRAGMA foreign_keys = ON', done);
			},
		  },
		  migrations: {
			directory: './migrations',
		  },
	}
};
