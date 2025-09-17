import { motion } from "motion/react";
const Contact = () => {
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
      <form className="flex flex-wrap font-suse gap-y-5 md:gap-x-0 justify-between">
        <label className="input bg-sub opacity-75 text-alternate  w-full md:w-[49%] rounded-lg">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </g>
          </svg>
          <input
            type="text"
            required
            placeholder="Username"
            pattern="[A-Za-z][A-Za-z0-9\-]*"
            minLength="3"
            maxength="30"
            title="Only letters, numbers or dash"
          />
        </label>
        <label className="input bg-sub opacity-75 text-alternate w-full md:w-[49%] rounded-lg">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input
            type="email"
            placeholder="mail@site.com"
            className="focus:outline-1 focus:outline-alternate"
            required
          />
        </label>
        <textarea
          className="textarea bg-sub opacity-75 text-alternate focus:outline-1 focus:outline-alternate w-full rounded-lg "
          placeholder="Type your message"
        ></textarea>
        <button className="btn bg-alternate w-full rounded-lg hover:bg-sub hover:text-alternate hover:border-1 hover:border-alternate">
          Submit
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
