// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: 'info@designpoint.hr', // Your email where you'll receive emails
      from: 'automation@designpoint.hr', // your website email address here
      subject: `${req.body.title}`,
      html: `
      <h1>Hello novi upit:</h1>
      <h2>Od :${req.body.name}</h2>
      <h2>Email :${req.body.email}</h2>
      <h1>Upit:</h1>
      <p>${req.body.message}</p>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
