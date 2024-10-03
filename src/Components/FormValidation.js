import React, { useState } from 'react'
import * as yup from 'yup'
import {Formik,ErrorMessage} from 'formik'

function FormValidation() {
    const [details, setDetails] = useState({
        username:"",
        mail:"",
        mob:""
    })

    const schema = yup.object().shape({
        username:yup.string().required("cant leave empty"),
        mail:yup.string().email().required(),
        mob:yup.string().matches(/\d/,"must be a number").length(10,"must be 10 numbers").required()

    })

    function handleChange(e){
        setDetails({...details, [e.target.name]:e.target.value})
    }

    function handleSubmit(e){
      //  e.preventDefault()
        console.log(details);
        
    }

  return (
    <div>
        <Formik
        initialValues={details}
        validationSchema={schema}
        onSubmit={handleSubmit}
        enableReinitialize>
            {({handleSubmit})=> (
      <form onSubmit={handleSubmit}>
        <input type='text' name='username' onChange={handleChange} />
        <ErrorMessage name='username' component='div' />
        <input type='text' name='mail' onChange={handleChange} />
        <ErrorMessage name='mail' component='div' />
        <input type='text' name='mob' onChange={handleChange} />
        <ErrorMessage name='mob' component='div' />
        <button type='submit'>submit</button>
      </form>
      )}
      </Formik>
    </div>
  )
}

export default FormValidation
