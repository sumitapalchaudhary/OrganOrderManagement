#!/usr/bin/env node


var fs = require('fs'); 
var parser = require('csv-parse');
const orderLib = require("./process-order");

const yargs = require("yargs");

const options = yargs
 .usage("Usage: -path <csv_path>")
 .option("path", { alias: "csv_path", describe: "path to csv", type: "string", demandOption: true })
 .argv;


var orderListFromCsv=[];

fs.createReadStream(options.path)
    .pipe(parser.parse({delimiter: ','}))
    .on('data', function(order) {
        orderListFromCsv.push(order);        
    })
    .on('end', () => {
        for(const order of orderListFromCsv.slice(1))
        {   
            let processedOrder = orderLib.processOrder(order[0], order[1], order[2], order[3])
            console.log(orderLib.orderSummary(processedOrder));
        }
    });


