const Swarm = require('discovery-swarm')
const crypto = require('crypto')
const getPort = import('get-port')
const defaults = require('dat-swarm-defaults')

const peers = {};
let connSeq = 0;
let channel = 'myBlockchain';
console.log(channel)