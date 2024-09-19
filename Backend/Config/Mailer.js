// const nodemailer = require('nodemailer');
// require('dotenv').config();

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER, 
//     pass: process.env.EMAIL_PASS, 
//   },
// });

// const sendVerificationEmail = async (toEmail, verificationToken) => {
//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: toEmail,
//     subject: 'Verify Your Email Address',
//     html: `<p>Hello,</p><p>Please click the following link to verify your email address:</p><p>${process.env.CLIENT_URL}/verify/${encodeURIComponent(toEmail)}/${verificationToken}</p>`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log('Verification email sent');
//   } catch (error) {
//     console.error('Error sending verification email:', error);
//   }
// };

// module.exports = {
//   sendVerificationEmail,
// };


const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service:process.env.SERVICE,
      port: Number(process.env.MPORT),
      secure: Boolean(process.env.SECURE),
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: subject,
      text: text
    });

    console.log("Email sent successFully");
  } catch (error) {
    console.log("email not sent");
    console.log(error);
  }
}