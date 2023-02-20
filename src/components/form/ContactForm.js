import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";

// components
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const _SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const _TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const _PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const ContactUs = ({ defRef }) => {
  const form = useRef();

  // form validation schema
  const schemaResolver = yupResolver(
    yup.object().shape({
      name: yup.string().required(`Introduce tu nombre`),
      email: yup
        .string()
        .required(`Introduce el email`)
        .email(`Introduce un email válido`),
      message: yup.string().required(`Introduce un mensaje`),
    })
  );

  // form method
  const methods = useForm({ resolver: schemaResolver });
  const { reset, formState } = methods;

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ email: ``, message: `` });
    }
  }, [formState, reset]);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(_SERVICE_ID, _TEMPLATE_ID, form.current, _PUBLIC_KEY).then(
      (result) => {
        toast.success(
          "Tu consulta se ha enviado. Pronto recibirás noticias. Muchas gracias."
        );
      },
      (error) => {
        toast.error("Hemos tenido un problema al enviar el email");
      }
    );
  };

  return (
    <>
      <h3>
        Cuéntame <span className="line">tu caso</span>
      </h3>
      <form ref={form} onSubmit={sendEmail}>
        <p className="input-group gutter-width-30">
          <span className="gutter-width">
            <input
              name="name"
              type="text"
              size="30"
              maxLength="245"
              required="required"
              placeholder="Name *"
            />
          </span>

          <span className="gutter-width">
            <input
              name="email"
              type="email"
              size="30"
              maxLength="100"
              required="required"
              placeholder="Email/Phone no. *"
            />
          </span>
        </p>
        <p>
          <textarea
            name="message"
            cols="45"
            rows="8"
            maxLength="65525"
            required="required"
            placeholder="Message *"
          ></textarea>
        </p>
        <p>
          <input
            name="submit"
            type="submit"
            className="btn btn-dark border-0 transform-scale-h"
          />
        </p>
      </form>
    </>
  );
};

export default ContactUs;
