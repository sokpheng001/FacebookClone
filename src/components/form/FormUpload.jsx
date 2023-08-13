"use client";
import { Form, Formik, Field } from "formik";
import React from "react";
import * as yup from "yup";

const validation = yup.object({
  title: yup.string(),
  yourDay: yup.string(),
});
const initailization = {
  title: "",
  yourDay: "",
};

export default function FormUpload() {
  return (
    <Formik
      initialValues={initailization}
      validationSchema={validation}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        alert(JSON.stringify(values));
        resetForm(true);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, formValue }) => (
        <Form className="flex gap-4 m-4">
          <Field
            name="title"
            type="text"
            placeholder="Name"
            className="placeholder:p-3 text-center shadow-md shadow-gray-500/20 rounded-full p-2 focus:outline-none w-1/2"
          />
          <button class="bg-cyan-500 shadow-lg shadow-sky-500/50 rounded-full p-2">
            Subscribe
          </button>
        </Form>
      )}
    </Formik>
  );
}
