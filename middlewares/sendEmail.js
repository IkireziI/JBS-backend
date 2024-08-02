import nodemailer from 'nodemailer';

const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'ian@123.com',
                pass: 'lrlm lilh uxpz mkuh',
                host: 'smtp.gmail.com',
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const options = {
            from: 'ikirezines19@gmail.com',
            to: email,
            subject: subject,
            text: text
        };

        await transporter.sendMail(options, function(error, info) {
            if (error) {
                console.log("Failed to send email: " + error);
                return error;
            } else {
                console.log("Email Sent: " + info.response);
                return "Email Sent: " + info.response;
            }
        });
    } catch (error) {
        console.log(error);
        return error;
    }
};

export default sendEmail;
