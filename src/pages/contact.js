import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import StyledForm from "../styles/formStyles"
import { Form, Field } from "react-final-form"
import Header from "./../components/header"
import cogoToast from 'cogo-toast'
import * as emailjs from 'emailjs-com'

/* EMAILJS SETUP SECTION */

const YOUR_SERVICE_ID = ""  
const YOUR_TEMPLATE_ID = ""
const YOUR_USER_ID = ""

const onSubmit = async values => {

  let templateParams = {
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message
  }

  cogoToast.loading('Sending email...')
    .then((emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, YOUR_USER_ID)
      .then( (response) => {
              cogoToast.success('email sent! :-)',{hideAfter: 5, })
          }, (err) => {
              cogoToast.error('error sending email - code: '+err)
          }
      )
    )) 
}

/* validation */

const required = value => (value ? undefined : 'Required')
const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)
const validEmail = value => ( ( value.indexOf("@") > 0 ) && ( value.indexOf(".") > 0 ) ? undefined : 'Must have @ and .' )
const minValue = min => value => isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
const fieldRule = (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined)

/* form */

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact us" />
      <Header siteTitle="Contact US">
          <h2>;-)</h2>
      </Header>
      <Section className="p-5">
        <StyledForm>
          <h3>Complete form bellow and hit submit button to send us an email.</h3>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine }) => (
              <form onSubmit={handleSubmit}>
                <Field name="name" validate={fieldRule(required)}>
                  {({ input, meta }) => (
                    <div>
                      <label>Name</label>
                      <input {...input} type="text" placeholder="Your name" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field name="email" validate={fieldRule(required,validEmail)}>
                  {({ input, meta }) => (
                    <div>
                      <label>email</label>
                      <input {...input} type="text" placeholder="email" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field
                  name="subject"
                  validate={fieldRule(required)}>
                  {({ input, meta }) => (
                    <div>
                      <label>Subject</label>
                      <input {...input} type="text" placeholder="Subject" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field
                  name="message"
                  validate={fieldRule(required)}>
                  {({ input, meta }) => (
                    <div>
                      <label>Message</label>
                      <textarea {...input} placeholder="Message" rows="4" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <div className="buttons">
                  <button type="submit" disabled={submitting}>
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={form.reset}
                    disabled={submitting || pristine}>
                    Reset
                  </button>
                </div>
              </form>
            )}
          />
        </StyledForm>
      </Section>
    </Layout>
  )
}

export default ContactPage
