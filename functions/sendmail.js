const nodemailer = require ('nodemailer');

exports.handler = function(event, context, callback) {

    let data = JSON.parse(event.body)

    let transporter = nodemailer.createTransport({
        host: [your smtp server],
        port: [smtp server port],
        auth: {
            user: [smtp sever username],
            pass: [smtp server password]
        }
    });

    transporter.sendMail({
        from: [smtp server email addrss]
        to: [recipient email address],
        subject: `Sending with React, Nodemailer and Netlifty`,
        html: `
        <h3> Email from ${data.name} ${data.email}<h3>
        <p> ${data.message}<p>
        `
    }, function (error, info) {
        if (error) {
            callback(error);
        } else {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    'result': 'success'
                })
            });
        }
    });
}