//send an email using nodemailer package in nodejs

/* steps
1. create a nodemailer transporter (SMTP)
2. create a message option
3. send a mail using sendMail method of that transporter
Additional
4. html page use for email send
5. Email file attach
6. personalized email by adding custom data
    1. handlebars package
    2. fs package (nodejs inbuilt module)
    3. email template (welcome.html)
    4. using fs, read the email template by method readFileSync("./welcome.html")
    5. convert that buffer to string using .toString()
    6. add the {{name}} in html file
    7. compile and create template from the code using handlebar.compile(emailString)
    8. add your custom data in the template (const msg = template(data))
    9. use that msg in the messageOption
*/

const nodemailer = require("nodemailer");
const fs = require("fs");
const handlebars = require("handlebars");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "singhmadhabi4@gmail.com",
    pass: "tjjiubcfmngwqrao",
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

const main = async (messageOptions) => {
  const info = await transporter.sendMail(messageOptions);

  console.log("Message sent: %s", info.messageId);
};
const emailTemplate = fs.readFileSync("./welcome.html");
const emailString = emailTemplate.toString();
const template = handlebars.compile(emailString);

const data = { name: "Madhabi" };

const messageOptions = {
  from: '"Madhabi Singh" <singhmadhabi4@gmail.com>', // sender address
  to: "singhmadhabi4@gmail.com", // list of receivers
  subject: "Hello ✔", // Subject line
  text: "Hello world?", // plain text body
  html: template(data), // html body
  attachments: [
    {
      filename: "hello.txt",
      content: "hello world",
    },
    {
      filename: "hello2.txt",
      content: Buffer.from("hellow world", "utf-8"),
    },
  ],
};

main(messageOptions).catch(console.error);
