const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.contactForm = (req, res) => {
  const { email, name, message } = req.body;

  const emailData = {
    to: process.env.EMAIL_TO,
    from: req.body.email,
    subjectt: `Contact form - ${process.env.APP_NAME}`,
    text: `Email received from contact form \n Sender name ${name} \n Sender email: ${email} \n Sender message ${message}`,
    html: `
        <h4>Email received from:</h4>
        <p>Sender Name: ${name}</p>
        <p>Sender Email: ${email}</p>
        <p>Sender Message: ${message}</p>
        <hr/>
        <p>This email may contain sensitive data</p>
        <p>https://yourdailydump.com</p>
    `,
  };

  sgMail
    .send(emailData)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
    })
    .catch((error) => {
      console.log(error);
    });
};
