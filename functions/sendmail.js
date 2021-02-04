const nodemailer = require ('nodemailer');

exports.handler = function(event, context, callback) {

    let data = JSON.parse(event.body)

    let transporter = nodemailer.createTransport({
        host: ['smtp.zoho.com'],
        port: [465],
        auth: {
            user: ['wese90'],
            pass: ['wasabi09@']
        }
    });

    transporter.sendMail({
        from: ['wese90@zohomail.com'],
        to: [''],
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