const csvjson = require('csvjson');


export default function handler(req, res) {
    if (req.method === 'POST') {
       const {jsonInp} =req.body;


    var options = {
       headers:'key'
    }
    
    const CSVOut=csvjson.toCSV(JSON.stringify(jsonInp), options);
   console.log(CSVOut);
    res.status(200).end(CSVOut);

      }
  
  }