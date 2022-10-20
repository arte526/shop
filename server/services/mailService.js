const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
});

sendActivationMail = async (reciever, link) => {
    const mailOptions = {
        from: `${process.env.SMTP_USER}`,
        to: reciever,
        subject: `Активація акаунту ${reciever}, підтвердіть свою регістрацію`,
        text: '.',
        html: 
        `
            <div>
            <a href="${link}" style="
            margin-left: auto;
            margin-right: auto;
            background:linear-gradient(to bottom, #000000 5%, #000000 100%);
            background-color:#000000;
            border-radius:5px;
            display:inline-block;
            cursor:pointer;
            color:#ffffff;
            font-family:Arial;
            font-size:13px;
            font-weight:bold;
            padding:15px 60px;
            font-size: 17px;
            text-decoration:none;
            text-shadow:0px 1px 0px #000000;">Підтвердити акаунт</a>
            </div>
        `
    };
    await transporter.sendMail(mailOptions);
}


module.exports = {sendActivationMail}
