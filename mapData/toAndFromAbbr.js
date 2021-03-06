/*
Require these into node, or into a file.  Use these objects to convert between abbreviations and fully
qualified territory names and back.

MovementGraphs.diplomacy refers keys on the fully qualified names found in these files.

Coast Abbreviations converts between what users may use to abbreviate a coast to the fully qualified name
stored in the movement graph. (this is assuming we parse user input)
e.g., 
bul ec separated into country and coast would be converted to bulgaria east coast, were it to be parsed
*/

var terrToAbbr = { 
  switzerland: [ 'swi', 'switz' ],
  'adriatic sea': [ 'adr', 'adriatic' ],
  'aegean sea': [ 'aeg', 'aegean' ],
  albania: [ 'alb' ],
  ankara: [ 'ank' ],
  apulia: [ 'apu' ],
  armenia: [ 'arm' ],
  'baltic sea': [ 'bal', 'baltic' ],
  'barents sea': [ 'bar', 'barents' ],
  belgium: [ 'bel' ],
  berlin: [ 'ber' ],
  'black sea': [ 'bla', 'black' ],
  bohemia: [ 'boh' ],
  brest: [ 'bre' ],
  budapest: [ 'bud' ],
  bulgaria: [ 'bul' ],
  burgundy: [ 'bur' ],
  clyde: [ 'cly' ],
  constantinople: [ 'con' ],
  denmark: [ 'den' ],
  'eastern mediterranean': ['eas', 'emed', 'east', 'eastern', 'eastmed', 'ems', 'eme'],
  edinburgh: [ 'edi' ],
  'english channel': [ 'eng', 'english', 'channel', 'ech' ],
  finland: [ 'fin' ],
  galicia: [ 'gal' ], 
  gascony: [ 'gas' ],
  greece: [ 'gre' ],
  'gulf of lyon': [ 'lyo', 'gol', 'gulfofl', 'lyon' ],
  'gulf of bothnia': [ 'bot', 'gob', 'both', 'gulfofb', 'bothnia' ],
  'helgoland bight': [ 'hel', 'helgoland' ],
  holland: [ 'hol' ],
  'ionian sea': [ 'ion', 'ionian' ],
  'irish sea': [ 'iri', 'irish' ],
  kiel: [ 'kie' ],
  liverpool: [ 'lvp', 'livp', 'lpl' ],
  livonia: [ 'lvn','livo','lvo','lva' ],
  london: [ 'lon' ],
  marseilles: [ 'mar', 'mars' ],
  'mid-atlantic ocean': [ 'mao','midatlanticocean','midatlantic','mid','mat' ],
  moscow: [ 'mos' ],
  munich: [ 'mun' ],
  naples: [ 'nap' ],
  'north atlantic ocean': [ 'nao', 'nat' ],
  'north africa': [ 'naf', 'nora' ],
  'north sea': [ 'nth', 'norsea', 'nts' ],
  norway: [ 'nor', 'nwy', 'norw' ],
  'norwegian sea': [ 'nwg','norwsea','nrg','norwegian' ],
  paris: [ 'par' ],
  picardy: [ 'pic' ],
  piedmont: [ 'pie' ],
  portugal: [ 'por' ],
  prussia: [ 'pru' ],
  rome: [ 'rom' ],
  ruhr: [ 'ruh' ],
  rumania: [ 'rum' ],
  serbia: [ 'ser' ],
  sevastopol: [ 'sev', 'sevastapol' ],
  silesia: [ 'sil' ],
  skagerrak: [ 'ska' ],
  smyrna: [ 'smy' ],
  spain: [ 'spa' ],
  'st petersburg': [ 'stp' ],
  sweden: [ 'swe' ],
  syria: [ 'syr' ],
  trieste: [ 'tri' ],
  tunis: [ 'tun' ],
  tuscany: [ 'tus' ],
  tyrolia: [ 'tyr', 'tyl', 'trl' ],
  'tyrrhenian sea': [ 'tys','tyrr','tyrrhenian','tyn','tyh' ],
  ukraine: [ 'ukr' ],
  venice: [ 'ven' ],
  vienna: [ 'vie' ],
  wales: [ 'wal' ],
  warsaw: [ 'war' ],
  'western mediterranean': [ 'wes', 'wmed', 'west', 'western', 'westmed', 'wms', 'wme' ],
  yorkshire: [ 'yor', 'york', 'yonkers' ] 
};

var abbrToTerr = {
  swi: 'switzerland',
  switz: 'switzerland',
  adr: 'adriatic sea',
  adriatic: 'adriatic sea',
  aeg: 'aegean sea',
  aegean: 'aegean sea',
  alb: 'albania',
  ank: 'ankara',
  apu: 'apulia',
  arm: 'armenia',
  bal: 'baltic sea',
  baltic: 'baltic sea',
  bar: 'barents sea',
  barents: 'barents sea',
  bel: 'belgium',
  ber: 'berlin',
  bla: 'black sea',
  black: 'black sea',
  boh: 'bohemia',
  bre: 'brest',
  bud: 'budapest',
  bul: 'bulgaria',
  bur: 'burgundy',
  cly: 'clyde',
  con: 'constantinople',
  den: 'denmark',
  eas: 'eastern mediterranean',
  emed: 'eastern mediterranean',
  east: 'eastern mediterranean',
  eastern: 'eastern mediterranean',
  eastmed: 'eastern mediterranean',
  ems: 'eastern mediterranean',
  eme: 'eastern mediterranean',
  edi: 'edinburgh',
  eng: 'english channel',
  english: 'english channel',
  channel: 'english channel',
  ech: 'english channel',
  fin: 'finland',
  gal: 'galicia',
  gas: 'gascony',
  gre: 'greece',
  lyo: 'gulf of lyon',
  gol: 'gulf of lyon',
  gulfofl: 'gulf of lyon',
  lyon: 'gulf of lyon',
  bot: 'gulf of bothnia',
  gob: 'gulf of bothnia',
  both: 'gulf of bothnia',
  gulfofb: 'gulf of bothnia',
  bothnia: 'gulf of bothnia',
  hel: 'helgoland bight',
  helgoland: 'helgoland bight',
  hol: 'holland',
  ion: 'ionian sea',
  ionian: 'ionian sea',
  iri: 'irish sea',
  irish: 'irish sea',
  kie: 'kiel',
  lvp: 'liverpool',
  livp: 'liverpool',
  lpl: 'liverpool',
  lvn: 'livonia',
  livo: 'livonia',
  lvo: 'livonia',
  lva: 'livonia',
  lon: 'london',
  mar: 'marseilles',
  mars: 'marseilles',
  mao: 'mid-atlantic ocean',
  midatlanticocean: 'mid-atlantic ocean',
  midatlantic: 'mid-atlantic ocean',
  mid: 'mid-atlantic ocean',
  mat: 'mid-atlantic ocean',
  mos: 'moscow',
  mun: 'munich',
  nap: 'naples',
  nao: 'north atlantic ocean',
  nat: 'north atlantic ocean',
  naf: 'north africa',
  nora: 'north africa',
  nth: 'north sea',
  norsea: 'north sea',
  nts: 'north sea',
  nor: 'norway',
  nwy: 'norway',
  norw: 'norway',
  nwg: 'norwegian sea',
  norwsea: 'norwegian sea',
  nrg: 'norwegian sea',
  norwegian: 'norwegian sea',
  par: 'paris',
  pic: 'picardy',
  pie: 'piedmont',
  por: 'portugal',
  pru: 'prussia',
  rom: 'rome',
  ruh: 'ruhr',
  rum: 'rumania',
  ser: 'serbia',
  sev: 'sevastopol',
  sevastapol: 'sevastopol',
  sil: 'silesia',
  ska: 'skagerrak',
  smy: 'smyrna',
  spa: 'spain',
  stp: 'st petersburg',
  swe: 'sweden',
  syr: 'syria',
  tri: 'trieste',
  tun: 'tunis',
  tus: 'tuscany',
  tyr: 'tyrolia',
  tyl: 'tyrolia',
  trl: 'tyrolia',
  tys: 'tyrrhenian sea',
  tyrr: 'tyrrhenian sea',
  tyrrhenian: 'tyrrhenian sea',
  tyn: 'tyrrhenian sea',
  tyh: 'tyrrhenian sea',
  ukr: 'ukraine',
  ven: 'venice',
  vie: 'vienna',
  wal: 'wales',
  war: 'warsaw',
  wes: 'western mediterranean',
  wmed: 'western mediterranean',
  west: 'western mediterranean',
  western: 'western mediterranean',
  westmed: 'western mediterranean',
  wms: 'western mediterranean',
  wme: 'western mediterranean',
  yor: 'yorkshire',
  york: 'yorkshire',
  yonkers: 'yorkshire'
};

var coastAbbr = {
  nc: 'north coast',
  north: 'north coast',
  ec: 'east coast',
  east: 'east coast',
  sc: 'south coast',
  south: 'south coast',
};

module.exports = {
  terrToAbbr: terrToAbbr,
  abbrToTerr: abbrToTerr,
  coastAbbr: coastAbbr
};
