const nodemailer = require("nodemailer");
const fs = require('fs');

const sendEmail = async (req, res) => {

  const options = req.body;

  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: "mail.schoolprogramming.tech",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "demo@schoolprogramming.tech",
      pass: "AsjadAhmad.123"
    }
  });

  // 2) Define the email options

  const mailOptions = {
    from: '"Mujtaba" <demo@schoolprogramming.tech>', // sender address
    to: options.email,
    subject: options.subject,
    html: options.html
  };

  // verify connection configuration
  transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages.");
    }
  });

  // 3) Actually send the email
  await transporter.sendMail(mailOptions, () => {
    console.log("Email sent!");
  });

  res.status(200).json({
    status: 'success',
    message: 'Mail sent successfully'
  });
};

module.exports = sendEmail;
