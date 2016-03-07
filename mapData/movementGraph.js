var territorie = { 
  // Multiple Coasts
  bulgaria: {
    type: 'coastal',
    supply: true,
    landConns: ['rumania', 'constantinople', 'greece', 'serbia'],
    seaConns: {
      E: ['rumania', 'black sea', 'constantinople'],
      S: ['constantinople', 'aegean sea', 'greece']
    }
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
    seaConns: []
  }, 
  'black sea': {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  bohemia: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  brest: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  budapest: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  burgundy: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  clyde: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  constantinople: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  denmark: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  'eastern mediterranean': {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  edinburgh: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  'english channel': {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  finland: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  galicia: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  gascony: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  greece: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  'gulf of lyon': {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  'gulf of bothnia': {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  'helgoland bight': {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  holland: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  'ionian sea': {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  'irish sea': {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  kiel: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  liverpool: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  livonia: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  london: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  marseilles: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  'mid-atlantic ocean': {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  moscow: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  munich: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  naples: {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  'north atlantic ocean': {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  'north africa': {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  'north sea': {
    type: '',
    supply: ,
    landConns: [],
    seaConns: []
  }, 
  norway: {
    type: '',
    supply: ,

    landConns: [],
    seaConns: []
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