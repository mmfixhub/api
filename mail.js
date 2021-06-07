var nodemailer = require("nodemailer");

transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "fixhubtickets@gmail.com",
        pass: "Manlleu@2021",
    },
});

module.exports = transporter;
