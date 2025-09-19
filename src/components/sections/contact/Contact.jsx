import { useRef } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import FormContact from "./FormContact";
import { alertError, alertSuccess } from "../../../utils/alert";

const Contact = () => {
  const ref = useRef();
  const sendEmail = (ev) => {
    ev.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_MAIL_JS_SERVICE_ID,
        import.meta.env.VITE_MAIL_JS_TEMPLATE_ID,
        ref.current,
        {
          publicKey: import.meta.env.VITE_MAIL_JS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          alertSuccess();
        },
        (error) => {
          alertError(error);
          console.log(error);
        }
      );
  };

  const animation = {
    offScreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.1,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      initial={animation.offScreen}
      whileInView={animation.onscreen}
      className="flex flex-col flex-wrap md:justify-center gap-[3rem] md:w-[90%] lg:w-1/2 my-[2rem] md:mx-auto p-5 mt-[9rem]"
      id="Contact"
    >
      <h2 className="text-5xl font-suse font-bold text-center text-alternate">
        Have a nice works?
        <p className="opacity-50">Reach out and let's chat.</p>
      </h2>
      <FormContact onRef={ref} onSubmit={sendEmail} />
    </motion.div>
  );
};

export default Contact;
