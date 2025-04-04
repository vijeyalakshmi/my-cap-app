const cds = require('@sap/cds');

cds.on('bootstrap', app => {
    console.log("Custom server.js is running...");
});

module.exports = cds.server;