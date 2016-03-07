var territorie = { 
  // Multiple Coasts
  bulgaria: {
    type: 'coastal',
    supply: true,
    landConns: ['rumania', 'constantinople', 'greece', 'serbia'],
  },
  'bulgaria east coast': {
    type: 'coastal',
    supply: true,
    seaConns: ['rumania', 'black sea', 'constantinople'],
  },
  'bulgaria south coast': {
    type: 'coastal',
    supply: true,
    seaConns: ['constantinople', 'aegean sea', 'greece']
  },

  spain: {
    type: 'coastal',
    supply: true,
    landConns: ['portugal', 'gascony', 'marseilles', ],
    seaConns: {
      N: ['portugal', 'mid-atlantic ocean', 'gascony'],
      S: ['marseilles', 'gulf of lyon', 'western mediterranean', 'portugal', 'mid-atlantic ocean']
    }
  }, 
  'st petersburg': {
    type: 'coastal',
    supply: true,
    landConns: ['moscow', 'livonia', 'finland', 'norway'],
    seaConns: {
      N: ['barents sea', 'norway'],
      S: ['livonia', 'bothnia', 'finland']
    }
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
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  paris: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  picardy: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  piedmont: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  portugal: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  prussia: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  rome: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  ruhr: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  rumania: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  serbia: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  sevastopol: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  silesia: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  skagerrak: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  smyrna: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  sweden: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  syria: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  trieste: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  tunis: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  tuscany: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  tyrolia: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  'tyrrhenian sea': {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  ukraine: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  venice: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  vienna: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  wales: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  warsaw: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  'western mediterranean': {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  yorkshire: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
},;