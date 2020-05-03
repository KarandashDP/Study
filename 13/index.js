const fs = require('fs');
const nodemailer = require('nodemailer');
let data = fs.readFileSync('data.txt', 'utf-8');
fs.writeFileSync('data.txt', 'Hello people');

fs.appendFileSync('data.txt', '\r\n' + 'Hello again dudes!' + '\r\n' + 'And again', function(err) {
    if (err) { throw err };
    console.log('Info updated')
});
console.log(data);

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'PardonneDP@gmail.com',
        pass: '******'
    }
})

let mailInfo = {
    from: 'PardonneDP@gmail.com',
    to: 'PardonneDP@gmail.com',
    subject: 'Test Node.js mail',
    text: 'Test text',
    attachments: [{ filename: 'data.txt', content: data }],
};

mailTransporter.sendMail(mailInfo, function(err, data) {
    if (err) {
        console.log('Error happens, fix it and relax');
    } else {
        console.log('Email sent successfully');
    }
});