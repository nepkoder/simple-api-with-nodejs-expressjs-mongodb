const config = {
	// database Credentials
	mongo: {
		hostname: 'localhost',
		port: '27017',
		db: 'restful-api'
	}
};

config.mongo.url = 'mongodb://' + config.mongo.hostname + ':' + config.mongo.port + '/' + config.mongo.db;

module.exports = config;