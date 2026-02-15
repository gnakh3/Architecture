"use client";

import React, { useState } from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import SuccessCard from "@/components/atoms/SuccessCard/SuccessCard";
import { AnimatePresence, motion, easeInOut } from "framer-motion";

const schema = Yup.object().shape({
  name: Yup.string()
    .required("Can’t be empty")
    .matches(/^[A-Z][a-z]+(?: [A-Z][a-z]+)+$/, "Enter a valid full name")
    .max(50, "Name can’t be longer than 50 characters"),
  email: Yup.string()
    .required("Can’t be empty")
    .email("Invalid email")
    .max(100, "Email can’t be longer than 100 characters"),
  message: Yup.string().required("Can’t be empty"),
});

type DataType = {
  name: string;
  email: string;
};

const wrap = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeInOut },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeInOut } },
};

const Regex = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState<DataType | null>(null);

  return (
    <>
      <motion.div
        className="w-full flex gap-7.5 max-lg:flex-col max-lg:gap-15 max-sm:gap-10.5 mb-40 max-md:px-8"
        variants={wrap}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.h1
          className="text-[rgba(27,29,35,1)] font-bold text-[72px] leading-16 tracking-[-2px] lg:min-w-87.5 max-sm:text-[48px] max-sm:leading-13 max-sm:tracking-[-1.71px]"
          variants={item}
        >
          Connect
          <br className="hidden lg:block max-sm:block" /> with us
        </motion.h1>

        <motion.div className="flex-1" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            onSubmit={(values, { resetForm }) => {
              setIsOpen(true);
              setSubmittedData({ name: values.name.split(" ")[0], email: values.email });
              localStorage.setItem("message", JSON.stringify(values));
              resetForm();
            }}
            validationSchema={schema}
          >
            {({ errors, touched }) => (
              <Form>
                <motion.div className="relative mb-10.25" variants={item}>
                  <Field
                    name="name"
                    placeholder="Name"
                    className={`w-full px-8.75 pb-5.5 text-[20px] font-bold leading-[100%] tracking-[-0.31px] border-b focus:border-b-[3px] outline-0 ${
                      errors.name && touched.name
                        ? "text-[rgba(223,86,86,1)] placeholder:text-[rgba(223,86,86,0.5)] border-[rgba(223,86,86,1)]"
                        : "placeholder:text-[rgba(200,204,216,1)] border-[rgba(27,29,35,1)] text-[rgba(27,29,35,1)]"
                    }`}
                  />
                  {errors.name && touched.name && (
                    <ErrorMessage
                      name="name"
                      component={"p"}
                      className="absolute bottom-1 right-4 text-[18px] font-bold text-[rgba(223,86,86,1)] tracking-[-0.28px] leading-[100%] max-sm:text-[14px]"
                    />
                  )}
                </motion.div>

                <motion.div className="relative mb-10.25" variants={item}>
                  <Field
                    name="email"
                    placeholder="Email"
                    className={`w-full px-8.75 pb-5.5 text-[20px] font-bold leading-[100%] tracking-[-0.31px] border-b focus:border-b-[3px] outline-0 ${
                      errors.email && touched.email
                        ? "text-[rgba(223,86,86,1)] placeholder:text-[rgba(223,86,86,0.5)] border-[rgba(223,86,86,1)]"
                        : "placeholder:text-[rgba(200,204,216,1)] border-[rgba(27,29,35,1)] text-[rgba(27,29,35,1)]"
                    }`}
                  />
                  {errors.email && touched.email && (
                    <ErrorMessage
                      name="email"
                      component={"p"}
                      className="absolute bottom-1 right-4 text-[18px] font-bold text-[rgba(223,86,86,1)] tracking-[-0.28px] leading-[100%] max-sm:text-[14px]"
                    />
                  )}
                </motion.div>

                <motion.div className="relative flex flex-col" variants={item}>
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Message"
                    className={`w-full px-8.75 pb-17.25 text-[20px] font-bold leading-[100%] tracking-[-0.31px] border-b focus:border-b-[3px] outline-0 resize-none ${
                      errors.message && touched.message
                        ? "text-[rgba(223,86,86,1)] placeholder:text-[rgba(223,86,86,0.5)] border-[rgba(223,86,86,1)]"
                        : "placeholder:text-[rgba(200,204,216,1)] border-[rgba(27,29,35,1)] text-[rgba(27,29,35,1)]"
                    }`}
                  />
                  {errors.message && touched.message && (
                    <ErrorMessage
                      name="message"
                      component={"p"}
                      className="absolute bottom-1 right-4 text-[18px] font-bold text-[rgba(223,86,86,1)] tracking-[-0.28px] leading-[100%] max-sm:text-[14px]"
                    />
                  )}
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-20 h-20 bg-[rgba(27,29,35,1)] float-end hover:bg-[rgba(96,99,109,1)] flex items-center justify-center"
                  variants={item}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                    <Image width={24} height={18} src={"/Arrow.svg"} alt="Arrow Icon" />
                  </motion.div>
                </motion.button>
              </Form>
            )}
          </Formik>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {isOpen && submittedData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.35, ease: easeInOut }}
            >
              <SuccessCard
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                name={submittedData.name}
                email={submittedData.email}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Regex;
