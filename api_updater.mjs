import * as http from 'http'; // or 'https' for https:// URLs
import * as fs from 'fs';

const file = fs.createWriteStream("api.json");
const request = http.get("http://127.0.0.1:12000/swagger.json", function(response) {
   response.pipe(file);

   // after download completed close filestream
   file.on("finish", () => {
       file.close();
       console.log("Download Completed");
   });
});