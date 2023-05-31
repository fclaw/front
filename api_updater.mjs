import * as https from 'https'; // or 'https' for https:// URLs
import * as fs from 'fs';

const file = fs.createWriteStream("api.json");
const request = https.get("https://5137-94-235-250-64.ngrok-free.app/swagger.json", function(response) {
   response.pipe(file);

   // after download completed close filestream
   file.on("finish", () => {
       file.close();
       console.log("Download Completed");
   });
});