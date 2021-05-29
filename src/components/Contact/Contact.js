import React from "react";
import "./Contact.scss";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bu9oqhx",
        "template_lwh1wca",
        e.target,
        "user_Y2VvIximudWt5Y32mZnuf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <section id='contact-form'>
      <div className='container'>
        <div className='contact-heading'>
          <h2>contact</h2>
        </div>
        <div className='contact-wrapper'>
          <div className='contact'>
            <form
              onSubmit={sendEmail}
              className='portfolio-form'
            >
              <p>
                <label for='floatingName'>Name</label>
                <input
                  type='text'
                  class='form-control'
                  id='floatingName'
                  placeholder='Name'
                  name='name'
                />
              </p>

              <p>
                <label for='floatingName'>subject</label>
                <input
                  type='text'
                  class='form-control'
                  id='floatingName'
                  placeholder='Name'
                  name='subject'
                />
              </p>

              <p>
                <label for='floatingInput'>Email</label>
                <input
                  type='email'
                  class='form-control'
                  id='floatingInput'
                  placeholder='name@example.com'
                  name='email'
                />
              </p>

              <p>
                <label for='floatingTextarea2'>
                  Message
                </label>
                <textarea
                  class='form-control'
                  placeholder='Leave a comment here'
                  id='floatingTextarea2'
                  style={{ height: "100px" }}
                  name='message'
                ></textarea>
              </p>

              <p>
                <button class='' type='submit'>
                  Send Message
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
