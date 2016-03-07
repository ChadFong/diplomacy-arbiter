module.exports.movementGraph = { 
  // Multiple Coasts
  bulgaria: {
    type: 'coastal',
    supply: true,
    landConns: ['rumania', 'constantinople', 'greece', 'serbia']
  },
  'bulgaria east coast': {
    seaConns: ['rumania', 'black sea', 'constantinople']
  },
  'bulgaria south coast': {
    seaConns: ['constantinople', 'aegean sea', 'greece']
  },

  spain: {
    type: 'coastal',
    supply: true,
    landConns: ['portugal', 'gascony', 'marseilles']
  }, 
  'spain north coast': {
    seaConns: ['portugal', 'mid-atlantic ocean', 'gascony']
  }, 
  'spain south coast': {
    seaConns: ['marseilles', 'gulf of lyon', 'western mediterranean', 'portugal', 'mid-atlantic ocean']
  }, 

  'st petersburg': {
    type: 'coastal',
    supply: true,
    landConns: ['moscow', 'livonia', 'finland', 'norway']
  }, 
  'st petersburg north coast': {
    seaConns: ['barents sea', 'norway']
  }, 
  'st petersburg south coast': {
    seaConns: ['livonia', 'bothnia', 'finland']
  }, 
  
  switzerland: {
    type: 'neutral',
    supply: false,
    landConns: [],
    seaConns: []
  }, 
  'adriatic sea': {
    type: 'sea',
    supply: false,
    landConns: [],
    seaConns: ['trieste', 'albania', 'ionian sea', 'apulia', 'venice']
  }, 
  'aegean sea': {
    type: 'sea',
    supply: false,
    landConns: [],
    seaConns: ['constantinople', 'smyrna', 'eastern mediterranean', 'ionian sea', 'greece', 'bulgaria']
  }, 
  albania: {
    type: 'coastal',
    supply: false,
    landConns: ['serbia', 'greece', 'trieste'],
    seaConns: ['greece', 'ionian sea', 'adriatic sea', 'trieste']
  }, 
  ankara: {
    type: 'coastal',
    supply: true,
    landConns: ['armenia', 'smyrna', 'constantinople'],
    seaConns: ['armenia', 'constantinople', 'black sea']
  }, 
  apulia: {
    type: 'coastal',
    supply: false,
    landConns: ['venice', 'naples', 'rome'],
    seaConns: ['venice', 'adriatic sea', 'ionian sea', 'naples']
  }, 
  armenia: {
    type: 'coastal',
    supply: false,
    landConns: ['syria', 'smyrna', 'ankara', 'sevastopol'],
    seaConns: ['ankara', 'black sea', 'sevastopol']
  }, 
  'baltic sea': {
    type: 'sea',
    supply: false,
    landConns: [],
    seaConns: ['sweden', 'gulf of bothnia', 'livonia', 'prussia', 'berlin', 'kiel', 'denmark']
  }, 
  'barents sea': {
    type: 'sea',
    supply: false,
    landConns: [],
    seaConns: ['st petersburg north coast', 'norway', 'norwegian sea']
  }, 
  belgium: {
    type: 'coastal',
    supply: true,
    landConns: ['holland', 'ruhr', 'burgundy', 'picardy'],
    seaConns: ['north sea', 'holland', 'picardy', 'english channel']
  }, 
  berlin: {
    type: 'coastal',
    supply: true,
    landConns: ['prussia', 'silesia', 'munich', 'kiel'],
    seaConns: ['baltic', 'prussia', 'kiel']
  }, 
  'black sea': {
    type: 'sea',
    supply: false,
    landConns: [],
    seaConns: ['sevastopol', 'armenia', 'ankara', 'constantinople', 'bulgaria', 'rumania']
  }, 
  bohemia: {
    type: 'inland',
    supply: false,
    landConns: ['silesia', 'galicia', 'vienna', 'tyrolia', 'munich'],
    seaConns: []
  }, 
  brest: {
    type: 'coastal',
    supply: true,
    landConns: ['picardy', 'paris', 'gascony'],
    seaConns: ['english channel', 'picardy', 'gascony', 'mid-atlantic ocean']
  }, 
  budapest: {
    type: 'inland',
    supply: true,
    landConns: ['rumania', 'serbia', 'trieste', 'vienna', 'galicia'],
    seaConns: []
  }, 
  burgundy: {
    type: 'inland',
    supply: false,
    landConns: ['ruhr', 'munich', 'marseilles', 'gascony', 'paris', 'picardy', 'belgium'],
    seaConns: []
  }, 
  clyde: {
    type: 'coastal',
    supply: false,
    landConns: ['edinburgh', 'liverpool'],
    seaConns: ['norwegian sea', 'edinburgh', 'liverpool', 'north atlantic']
  }, 
  constantinople: {
    type: 'coastal',
    supply: true,
    landConns: ['ankara', 'smyrna', 'bulgaria'],
    seaConns: ['black sea', 'ankara', 'smyrna', 'aegean sea', 'bulgaria east coast', 'bulgaria south coast']
  }, 
  denmark: {
    type: 'coastal',
    supply: true,
    landConns: ['sweden', 'kiel'],
    seaConns: ['skagerrak', 'sweden', 'baltic sea', 'kiel', 'helgoland bight', 'north sea']
  }, 
  'eastern mediterranean': {
    type: 'sea',
    supply: false,
    landConns: [],
    seaConns: ['smyrna', 'syria', 'ionian sea', 'aegean sea']
  }, 
  edinburgh: {
    type: 'coastal',
    supply: true,
    landConns: ['yorkshire', 'liverpool', 'clyde'],
    seaConns: ['norwegian sea', 'north sea', 'yorkshire', 'clyde']
  }, 
  'english channel': {
    type: 'sea',
    supply: false,
    landConns: [],
    seaConns: ['london', 'north sea', 'belgium', 'picardy', 'brest', 'mid-atlantic ocean', 'irish sea', 'wales']
  }, 
  finland: {
    type: 'coastal',
    supply: false,
    landConns: ['st petersburg', 'sweden', 'norway'],
    seaConns: ['st petersburg south coast', 'gulf of bothnia', 'sweden']
  }, 
  galicia: {
    type: 'inland',
    supply: false,
    landConns: ['warsaw', 'ukraine', 'rumania', 'budapest', 'vienna', 'bohemia', 'silesia'],
    seaConns: []
  }, 
  gascony: {
    type: 'coastal',
    supply: false,
    landConns: ['burgundy', 'marseilles', 'spain', 'brest', 'paris'],
    seaConns: ['spain north coast', ]
  }, 
  greece: {
    type: 'coastal',
    supply: true,
    landConns: ['bulgaria', 'albania', 'serbia'],
    seaConns: ['bulgaria south coast', 'aegean sea', 'ionian sea', 'albania']
  }, 
  'gulf of lyon': {
    type: 'sea',
    supply: false,
    landConns: [],
    seaConns: ['marseilles', 'piedmont', 'tuscany', 'tyrrhenian sea', 'western mediterranean', 'spain south coast']
  }, 
  'gulf of bothnia': {
    type: 'sea',
    supply: false,
    landConns: [],
    seaConns: ['finland', 'st petersburg south coast', 'livonia', 'baltic sea', 'sweden']
  }, 
  'helgoland bight': {
    type: 'sea',
    supply: false,
    landConns: [],
    seaConns: ['north sea', 'denmark', 'kiel', 'holland', ]
  }, 
  holland: {
    type: 'coastal',
    supply: true,
    landConns: ['kiel', 'ruhr', 'belgium'],
    seaConns: ['helgoland bight', 'kiel', 'belgium', 'north sea']
  }, 
  'ionian sea': {
    type: 'sea',
    supply: false,
    landConns: [],
    seaConns: ['albania', 'greece', 'aegean sea', 'eastern mediterranean', 'tunis', 'tyrrhenian sea', 'naples', 'apulia', 'adriatic sea']
  }, 
  'irish sea': {
    type: 'sea',
    supply: false,
    landConns: [],
    seaConns: ['liverpool', 'wales', 'english channel', 'mid-atlantic ocean', 'north atlantic ocean']
  }, 
  kiel: {
    type: 'coastal',
    supply: true,
    landConns: ['denmark', 'berlin', 'munich', 'ruhr', 'holland'],
    seaConns: ['denmark', 'baltic sea', 'berlin', 'holland', 'helgoland bight']
  }, 
  liverpool: {
    type: 'coastal',
    supply: true,
    landConns: ['clyde', 'edinburgh', 'yorkshire', 'wales'],
    seaConns: ['clyde', 'wales', 'irish sea', 'north atlantic ocean']
  }, 
  livonia: {
    type: 'coastal',
    supply: false,
    landConns: ['st petersburg', 'moscow', 'warsaw', 'prussia'],
    seaConns: ['st petersburg south coast', 'moscow', 'warsaw', 'prussia', 'baltic sea', 'gulf of bothnia']
  }, 
  london: {
    type: 'coastal',
    supply: true,
    landConns: ['yorkshire', 'wales'],
    seaConns: ['yorkshire', 'north sea', 'english channel', 'wales']
  }, 
  marseilles: {
    type: 'coastal',
    supply: true,
    landConns: ['burgundy', 'piedmont', 'spain', 'gascony'],
    seaConns: ['piedmont', 'gulf of lyon', 'spain south coast']
  }, 
  'mid-atlantic ocean': {
    type: 'sea',
    supply: false,
    landConns: [],
    seaConns: ['north atlantic ocean', 'irish sea', 'english channel', 'brest', 'gascony', 'spain north coast', 'spain south coast', 'portugal', 'western mediterranean', 'north africa']
  }, 
  moscow: {
    type: 'inland',
    supply: true,
    landConns: ['sevastopol', 'ukraine', 'warsaw', 'livonia', 'st petersburg'],
    seaConns: []
  }, 
  munich: {
    type: 'inland',
    supply: true,
    landConns: ['berlin', 'silesia', 'bohemia', 'tyrolia', 'burgundy', 'ruhr', 'kiel'],
    seaConns: []
  }, 
  naples: {
    type: 'coastal',
    supply: true,
    landConns: ['apulia', 'rome'],
    seaConns: ['apulia', 'ionian sea', 'tyrrhenian sea', 'rome']
  }, 
  'north atlantic ocean': {
    type: 'sea',
    supply: false,
    landConns: [],
    seaConns: ['norwegian sea', 'clyde', 'liverpool', 'irish sea', 'mid-atlantic ocean']
  }, 
  'north africa': {
    type: 'coastal',
    supply: false,
    landConns: ['tunis'],
    seaConns: ['mid-atlantic ocean', 'western mediterranean', 'tunis']
  }, 
  'north sea': {
    type: 'sea',
    supply: false,
    landConns: [],
    seaConns: ['norwegian sea', 'norway', 'skagerrak', 'denmark', 'helgoland bight', 'holland', 'belgium', 'english channel', 'london', 'yorkshire', 'edinburgh']
  }, 
  norway: {
    type: 'coastal',
    supply: true,
    landConns: ['st petersburg', 'finland', 'sweden'],
    seaConns: ['barents sea', 'st petersburg north coast', 'sweden', 'skagerrak', 'north sea', 'norwegian sea']
  }, 
  'norwegian sea': {
    type: 'sea',
    supply: false,
    landConns: [],
    seaConns: ['barents sea', 'norway', 'north sea', 'edinburgh', 'clyde', 'north atlantic']
  }, 
  paris: {
    type: 'inland',
    supply: true,
    landConns: ['picardy', 'burgundy', 'gascony', 'brest'],
    seaConns: []
  }, 
  picardy: {
    type: 'coastal',
    supply: false,
    landConns: ['belgium', 'burgundy', 'paris', 'brest'],
    seaConns: ['belgium', 'brest', 'english channel']
  }, 
  piedmont: {
    type: 'coastal',
    supply: false,
    landConns: ['tyrolia', 'venice', 'tuscany', 'marseilles'],
    seaConns: ['tuscany', 'gulf of lyon', 'marseilles']
  }, 
  portugal: {
    type: 'coastal',
    supply: true,
    landConns: ['spain'],
    seaConns: ['spain north coast', 'spain south coast', 'mid-atlantic ocean']
  }, 
  prussia: {
    type: 'coastal',
    supply: false,
    landConns: ['livonia', 'warsaw', 'silesia', 'berlin'],
    seaConns: ['livonia', 'berlin', 'baltic sea']
  }, 
  rome: {
    type: 'coastal',
    supply: true,
    landConns: ['venice', 'apulia', 'naples', 'tuscany'],
    seaConns: ['naples', 'tyrrhenian sea', 'tuscany']
  }, 
  ruhr: {
    type: 'inland',
    supply: false,
    landConns: ['kiel', 'munich', 'burgundy', 'belgium', 'holland'],
    seaConns: []
  }, 
  rumania: {
    type: 'coastal',
    supply: true,
    landConns: ['sevastopol', 'bulgaria', 'serbia', 'budapest', 'galicia', 'ukraine'],
    seaConns: ['sevastopol', 'black sea', 'bulgaria east coast']
  }, 
  serbia: {
    type: 'inland',
    supply: true,
    landConns: ['rumania', 'bulgaria', 'greece', 'albania', 'trieste', 'budapest'],
    seaConns: []
  }, 
  sevastopol: {
    type: 'coastal',
    supply: true,
    landConns: ['armenia', 'rumania', 'ukraine', 'moscow'],
    seaConns: ['armenia', 'black sea', 'rumania']
  }, 
  silesia: {
    type: 'inland',
    supply: false,
    landConns: ['prussia', 'warsaw', 'galicia', 'bohemia', 'munich', 'berlin'],
    seaConns: []
  }, 
  skagerrak: {
    type: 'sea',
    supply: false,
    landConns: [],
    seaConns: ['norway', 'sweden', 'denmark', 'north sea']
  }, 
  smyrna: {
    type: 'coastal',
    supply: true,
    landConns: ['armenia', 'syria', 'constantinople', 'ankara'],
    seaConns: ['syria', 'eastern mediterranean', 'aegean sea', 'constantinople']
  }, 
  sweden: {
    type: 'coastal',
    supply: true,
    landConns: ['norway', 'finland', 'denmark'],
    seaConns: ['norway', 'finland', 'gulf of bothnia', 'baltic sea', 'denmark', 'skagerrak']
  }, 
  syria: {
    type: 'coastal',
    supply: false,
    landConns: ['smyrna', 'armenia'],
    seaConns: ['eastern mediterranean', 'smyrna']
  }, 
  trieste: {
    type: 'coastal',
    supply: true,
    landConns: ['vienna', 'budapest', 'serbia', 'albania', 'tyrolia'],
    seaConns: ['albania', 'adriatic sea', 'venice']
  }, 
  tunis: {
    type: 'coastal',
    supply: true,
    landConns: ['north africa'],
    seaConns: ['tyrrhenian sea', 'ionian sea', 'north africa', 'western mediterranean']
  }, 
  tuscany: {
    type: 'coastal',
    supply: false,
    landConns: ['piedmont', 'venice', 'rome'],
    seaConns: ['piedmont', 'rome', 'gulf of lyon']
  }, 
  tyrolia: {
    type: 'inland',
    supply: false,
    landConns: ['munich', 'bohemia', 'vienna', 'trieste', 'venice', 'piedmont'],
    seaConns: []
  }, 
  'tyrrhenian sea': {
    type: 'sea',
    supply: false,
    landConns: [],
    seaConns: ['tuscany', 'rome', 'naples', 'ionian sea', 'tunis', 'western mediterranean', 'gulf of lyon']
  }, 
  ukraine: {
    type: 'inland',
    supply: false,
    landConns: ['moscow', 'sevastopol', 'rumania', 'galicia', 'warsaw'],
    seaConns: []
  }, 
  venice: {
    type: 'coastal',
    supply: true,
    landConns: ['tyrolia', 'trieste', 'apulia', 'rome', 'tuscany', 'piedmont'],
    seaConns: ['trieste', 'adriatic sea', 'apulia']
  }, 
  vienna: {
    type: 'inland',
    supply: true,
    landConns: ['galicia', 'budapest', 'trieste', 'tyrolia', 'bohemia'],
    seaConns: []
  }, 
  wales: {
    type: 'coastal',
    supply: false,
    landConns: ['yorkshire', 'london', 'liverpool'],
    seaConns: ['london', 'english channel', 'irish sea', 'liverpool']
  }, 
  warsaw: {
    type: 'inland',
    supply: true,
    landConns: ['livonia', 'moscow', 'ukraine', 'galicia', 'silesia', 'prussia'],
    seaConns: []
  }, 
  'western mediterranean': {
    type: 'sea',
    supply: false,
    landConns: [],
    seaConns: ['spain south coast', 'gulf of lyon', 'tyrrhenian sea', 'tunis', 'north africa', 'mid-atlantic ocean']
  }, 
  yorkshire: {
    type: 'coastal',
    supply: false,
    landConns: ['edinburgh', 'london', 'wales', 'liverpool'],
    seaConns: ['edinburgh', 'north sea', 'london']
  }, 
};