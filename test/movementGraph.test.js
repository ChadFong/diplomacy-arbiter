var should = require('chai').should(),
    movementGraph = require('../mapData/movementGraph.js');

describe('movement graph connection data', function() {
    it('all connections should be valid', function () {
        for(var territory in movementGraph) {
            movementGraph[territory].landConns.forEach(function (terr) {
                var conn = movementGraph[terr];
                if(conn === undefined) {console.log(terr);}
                movementGraph[terr].should.not.equal(undefined);
            });

            movementGraph[territory].seaConns.forEach(function (terr) {
                var conn = movementGraph[terr];
                if(conn === undefined) {console.log(terr);}
                movementGraph[terr].should.not.equal(undefined);
            });
        }
    });
});
