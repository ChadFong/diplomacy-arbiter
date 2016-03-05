var should = require('chai').should(),
    arbiter = require('../index'),
    loadmap = arbiter.loadmap,
    possiblemoves = arbiter.possiblemoves;

describe('#loadmap', function() {
    var map = loadmap(); // The traditional diplomacy map gets loaded by default

    it('loads the traditional diplomacy map', function() {
        false.should.equal(true);
    });

    it('has the proper movement graph', function () {
        false.should.equal(true);
    });

    it('has identifying abbreviations', function () {
        false.should.equal(true);
    });

    it('specifies number of players and their countries', function () {
        false.should.equal(true);
    });

    it('specifies supply depots', function () {
        false.should.equal(true);
    });

    it('has home countries', function () {
        false.should.equal(true);
    });

    it('specifies types of territories', function () {
        false.should.equal(true);
    });

    it('displays the full name if possible', function () {
        false.should.equal(true);
    });

    it('has a default boardstate string', function () {
        false.should.equal(true);
    });
});

describe('#possiblemoves', function() {
    var map = loadmap();
    
    it('returns an object of potential moves for an army', function () {
        false.should.equal(true);
    });

    it('returns an object of potential moves for a fleet', function () {
        false.should.equal(true);
    });

    it('returns an object of potential moves, specifying what kind of unit can go there', function () {
        false.should.equal(true);
    });
});
