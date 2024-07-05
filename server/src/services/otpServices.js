const nodemailer = require("nodemailer");

class otpServices {
  // In-memory storage for OTPs (replace with a more secure and persistent solution in production)
  static otpStorage = {};

  // Function to generate OTP
  generateOTP(email) {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpServices.otpStorage[email] = otp;
    // console.log(otpStorage);
    return otp;
  }

  // Function to verify OTP for a specific user
  verifyOTP(email, otp) {
    return otpServices.otpStorage[email] === otp;
  }

  // Function to send OTP via email
  async sendOTPEmail(email, otp) {
    // Replace the following with your actual email sending logic using nodemailer
    const transporter = nodemailer.createTransport({
      // Your email sending configuration
      service: "Gmail",
      auth: {
        user: "harshsonaiya09@gmail.com", // your email
        pass: " ckfenttblyccfsmq", // your email password
      },
    });

    const mailOptions = {
      from: "harshsonaiya09@gmail.com", // sender address
      to: email, // list of receivers
      subject: "Verification OTP", // Subject line
      text: `Your verification OTP is: ${otp}`, // plain text body
    };

    await transporter.sendMail(mailOptions);
  }
}

module.exports = new otpServices();