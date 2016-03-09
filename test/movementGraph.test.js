var should = require('chai').should(),
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
});
