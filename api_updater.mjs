import * as http from 'http'; // or 'https' for https:// URLs
import * as fs from 'fs';

var url = process.argv.slice(2);

const file = fs.createWriteStream("api.json");
http.get(url, function(response) {
   response.pipe(file);

   // after download completed close file stream
   file.on("finish", () => {
       file.close();
       console.log("Download Completed");
   });
});