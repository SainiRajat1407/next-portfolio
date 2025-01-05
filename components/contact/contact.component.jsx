"use client";

import { useFormState } from "react-dom";
import emailjs from "@emailjs/browser";
import {useFormStatus} from "react-dom";
import FormSubmit from './formSubmit.component'
import { useRef } from "react";

async function contactAction(prevSate, formData) {
  const email = formData.get("email");
  const message = formData.get("message");

  const service_id = "service_xwv3w2n";
  const template_id = "template_g2o5sem";
  const user_id = "8WlImGVMZxBNHsfbt";

  let errors = {};
  if (!email.includes("@")) {
    errors.email = "Email is required!";
  }
  if (!message) {
    errors.message = "Message is required!";
  }
  if (Object.keys(errors).length > 0) {
    return {
      errors: {
        email: errors.email,
        message: errors.message,
        success: false,
      },
    };
  }

  const template_params = {
    email: email,
    message: message,
  };

  const response = await emailjs.send(
    service_id,
    template_id,
    template_params,
    user_id
  );

  if (response.status === 200) {
    return {
      success: true,
      errors: [],
    };
  }

}

export default function Contact() {
  const [formState, formAction] = useFormState(contactAction, {});
  const status = useFormStatus(formState);
  const formRef = useRef();

  if (formState?.success) {
    formRef.current?.reset();  
  }
  return (
    <div
      className="flex flex-col gap-6 justify-center items-center p-9 m-5
      "
    >
      <div className="heading-3 heading-font text-center">Let&rsquo;s connect</div>

        <form action={formAction} className="flex flex-col justify-center shadow-slate-100 shadow-lg w-96 gap-2" ref={formRef}>
          <input
            placeholder="enter email.."
            name="email"
            className="p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  m-2 border border-black"
          />

          <textarea
            className="p-3  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  m-2 border border-black"
            placeholder="Feel free to ask anything!"
            name="message"
          />
          <FormSubmit />
        </form>
      {formState?.errors && (
        <div className="text-red-600">
          {Object.entries(formState.errors).map(([key, value]) => (
            <div key={key} className="mb-2">
              {value}
            </div>
          ))}
        </div>
      )}
      {formState?.success && (
        <div className="text-green-600">Thank you for contacting!</div>
      )}
    </div>
  );
}
