const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');





//***************************App uses*************************




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





app.use(cors({
    origin: 'http://143.244.156.234/' // allow requests from this domain
  }));







//************************************************************** */






const sendEmail = require("./controllers/SendEmail");








app.get( "/api/hello" , ( req , res ) => {

    res.send("App Running");

} ) ;








app.post( "/api/mail" , sendEmail);







const port = process.env.PORT || 3001;





app.listen( port , () => {

    console.log("App listening on port 3001");

} );