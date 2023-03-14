const nodemailer = require("nodemailer");




const sendEmail = async ( req , res ) => {

    const transporter = await nodemailer.createTransport({

        host: 'smtp.gmail.com',
        port: 587,
        secure: false,  
        auth: {
            user: "nexalab.tech@gmail.com",
            pass: "acspbozufemgutck"
        }

      });


      const data = req.body;

    
      const mailInfo = {

        from: `${ data.clientEmail }`,
        to: 'nexalab.tech@gmail.com',
        subject: 'Client have send you an email ',
        text: `${ data.message } 

        
Client Name: ${ data.name }
Phone No: ${ data.phoneNo }`,
    
      };






      transporter.sendMail( mailInfo , function( error , info ) {
        
        if (error) 
        {
          console.log(error);
        } 


        else 
        {
          console.log('Email sent: ' + info.response);
        }


      });

}


module.exports = sendEmail;

