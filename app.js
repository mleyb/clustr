const cluster = require('cluster');

if (cluster.isMaster) {

	cluster.on('online', function(worker) {
		console.log('Worker ' + worker.process.pid + ' is online');
	});

	for (i = 0; i < 10; i++) {
		cluster.fork();
	}
}
else {
	console.log('Do something!');
}