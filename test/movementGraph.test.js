var should = require('chai').should(),
<<<<<<< HEAD
    diploGraph = require('../mapData/movementGraphs.js').diplomacy;

describe('movement graph connection data', function() {
  it('all connections should be valid', function () {
    var currTerr;
    for(var terr in diploGraph) {
      currTerr = diploGraph[terr];

      if(diploGraph[terr].landConns !== undefined) {
        diploGraph[terr].landConns.forEach(function (conn) {
          diploGraph[conn].should.not.equal(undefined);
        });                
      }
      
      if(currTerr.seaConns !== undefined) {
        diploGraph[terr].seaConns.forEach(function (conn) {
          diploGraph[conn].should.not.equal(undefined);
        });
      }
    }
  });
=======
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
>>>>>>> 82164cd4cdc7a0dca4c64ed2a7cb48c8e3d86a9e
});
