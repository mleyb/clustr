const cluster = require('cluster'), util = require('./util');

if (cluster.isMaster) {

	cluster.on('online', function(worker) {
		console.log('Worker ' + worker.process.pid + ' is online');
	});

	for (i = 0; i < 5; i++) {
		cluster.fork();
	}
}
else {

	var action = function () {
		console.log('Worker ' + process.pid + ' executing');	
		setTimeout(action, (util.random(1, 10) * 1000));
	}

	// kick things off
	action();
}

