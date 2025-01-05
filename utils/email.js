

import emailjs from '@emailjs/browser';

export async function sendEmail(template_params) {
    "use client";
    const response = await emailjs
      .send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        template_params,
        process.env.EMAILJS_USER_ID
      )
      .then((error) => {
        console.log("FAILED...", error);
      });
  
    return response;
  }
