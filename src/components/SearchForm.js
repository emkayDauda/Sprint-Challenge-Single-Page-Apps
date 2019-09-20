import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import * as yup from 'yup'

export default function SearchForm({onSubmit}) {

  const initialForm = {name: "", check: false}
  const validationSchema  = yup.object().shape({
    name: yup.string().required("A name is required")
  })

  const validate = (formValues) => {
     const errors = {}

     if(!formValues.name){
       errors.name = 'Enter a name'
     }

     return errors;
  }
 
  return (
    <section className="search-form">
     <Formik
     initialValues = {initialForm}
     validationSchema = {validationSchema}
     validate = {validate}
     onSubmit={onSubmit}
     render = {props => {
      return (
        <Form>
          <label>
            Name
            <Field name='name' type='text' placeholder='Enter a name' />
            <ErrorMessage name='name' component='div' />
          </label>
          <label>
            <Field name='check' type='checkbox' placeholder='Enter a name' />
            <ErrorMessage name='check' component='div' />
            Search from server
          </label>
          <button type='submit'>Search</button>
        </Form>
      )
     }}
     />
    </section>
  );
}
