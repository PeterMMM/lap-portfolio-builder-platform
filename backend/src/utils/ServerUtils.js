var nodemailer = require("nodemailer");

require("dotenv").config();

exports.generateOTP = async(length = 6) => {
  const digits = "0123456789";
  let otp = "";

  for (let i = 0; i < length; i++) {
    otp += digits[Math.floor(Math.random() * digits.length)];
  }

  return otp;
};

exports.sendMail = async(to, from, subject, text) => {
  const transporter = nodemailer.createTransport({
    port: 465, // true for 465, false for other ports
    host: "smtp.gmail.com",
    auth: {
      user: process.env.SERVICE_EMAIL,
      pass: process.env.SERVICE_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: from,
    to: to,
    subject: subject,
    html: text,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
       console.log(err)
    }else{
        console.log(info)
    }

  });
};
