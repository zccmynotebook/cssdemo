const nodemailer = require("nodemailer");

//使用邮箱密码，发送成功的前提是，
//1.打开管理账号-安全性-启用【安全性较低的应用的访问权限】
//2.设置-转发POP/IMAP-启用IMAP
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'zhucc126@gmail.com', // generated ethereal user
      pass: '密码', // generated ethereal password
    },
  });

  // send mail with defined transport object
  transporter.sendMail({
    from: 'zhucc126@gmail.com', // sender address
    to: 'zhucc126@gmail.com', // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    //html: "<b>Hello world?</b>", // html body
  });