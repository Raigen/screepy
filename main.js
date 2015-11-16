/*globals Game*/
var harvester = require('creeps/harvester');
var builder = require('creeps/builder');
var guard = require('creeps/guard');

module.exports.loop = function () {

	for(var name in Game.creeps) {
		var creep = Game.creeps[name];

		if(creep.memory.role == 'harvester') {
      harvester(creep);
		}

		if(creep.memory.role == 'builder') {
      builder(creep);
		}

		if(creep.memory.role === 'guard') {
      guard(creep);
		}
	}
}
