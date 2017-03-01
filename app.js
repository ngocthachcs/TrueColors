const nodemailer = require('nodemailer');
var express = require('express'),
	bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static(__dirname+'/public'));

app.get('/',function (req, res) {
	res.sendFile(__dirname + '/views/index.html');
     
});

app.get('/contact', function (req, res){
    // body...
    res.sendFile(__dirname + '/views/signup.html')

})

app.post('/contact', urlencodedParser, function(req, res) {
    // console.log(req.body.email);
    // body...
        var smtpTransport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: 'truecolorsvn@gmail.com',
                pass: 'shadowhunter'
            }
        });
        var mailOptions = {
            // from: "True Colors <ngocthach.cse@gmail.com>",
            from: 'True Colors <truecolorsvn@gmail.com>',
            to: req.body.email,
            subject: '[True Colors <> ' + req.body.name + '] Pre-work before Using Service',
            generateTextFromHTML: true,
            html: '<h3>Dear Sir/Madam,</h3>' + '<br>' +
                '<h4>As you requested, please allow me to present our recommendation for our web application: True Colors - with the sole purpose that WE WANT TO EARN YOUR RESPECT AND DEEPEST TRUST.</h4>' +
                '<h4>After thoroughly analyzing promotional product industry, we believe that True Colors will provide the maximum return on your investment.</h4>' +
                '<h4>For one reason, True Colors web application simply help you reduce printed cost by putting out the real image of samples by an image processing program instead of currently traditional method to illustrate samples to your customers as you may use.</h4>' +

                '<h4>Secondly, the design’s flexibility enables your customers to adjust it according as their wishes. In case, your customers make some issues in processing, we will provide some suggestions to choose.</h4>' +

                '<h4>Finally, we recommend using free. We believe that you will find this web application practical, efficient, and economical for your company.</h4>' +
                '<h4>We hope this information will make you have a perfect initial overview about our True Colors.</h4>' +

                '<h4>True Colors is executing and anticipate to release it in March. We hope to receive a lot feedback from you to perfect the web application. If you are interest and enjoy about it, please contact with me. Once again, thank you so much for your attention and consideration for us.</h4>' +
                '<h4>Have a nice day! </h4>' +

                '<h4>Sincerely,</h4>' +
                '<h4>True Colors.</h4>'
        };
        smtpTransport.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
        });
        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: 'truecolorsvn@gmail.com',
                pass: 'shadowhunter'
            }
        });
        var mailOption = {
            // from: '"True Colors" <ngocthach.cse@gmail.com>', // sender address
            from: 'True Colors <truecolorsvn@gmail.com>',
            to: 'uyennguyenbh1107@gmail.com', // list of receivers
            subject: 'User on truecolors', // Subject line
            generateTextFromHTML: true, // plain text body
            html: '<table style="width:100%;border: 1px solid black;border-collapse: collapse;">' +
                '<tr>' +
                '<th style="padding: 5px;border: 1px solid black;border-collapse: collapse;text-align: left;">User Name</th>' +
                '<th style="padding: 5px;border: 1px solid black;border-collapse: collapse;text-align: left;">Email</th>' +
                '<th style="padding: 5px;border: 1px solid black;border-collapse: collapse;text-align: left;">Message</th>' +
                '</tr>' +
                '<tr>' +
                '<td style="padding: 5px;border: 1px solid black;border-collapse: collapse;">' + req.body.name + '</td>' +
                '<td style="padding: 5px;border: 1px solid black;border-collapse: collapse;">' + req.body.email + '</td>' +
                '<td style="padding: 5px;border: 1px solid black;border-collapse: collapse;">' + req.body.message + '</td>' +
                '</tr>' +
                '</table>' // html body
        };
        transporter.sendMail(mailOption, function(error, info) {
            if (error) {
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
        });
});

app.listen(8000, function() {
    // body...
    console.log('Server Start At Port 8000');
});
