import { React, useState } from "react";
import "../resources/form.css";
import Footer from './Footer'

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    console.log("handleSubmit ran");
    e.preventDefault();

    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Message: ", message);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h1>How did we do?</h1>
            <div className="ui-divider">
              <div className="ui-form">
                <div className="field">
                  <input
                    type="text"
                    name="customername"
                    placeholder="Name"
                    required={true}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
                <div className="field">
                  <input
                    type="text"
                    name="customeremail"
                    placeholder="Email"
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="field">
                  <textarea
                    name="customermessage"
                    id="customermessage"
                    cols="30"
                    rows="10"
                    placeholder="Type something here..."
                    required={true}
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  ></textarea>
                </div>
                <button className="ui-button" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <iframe
          title="mugs"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.8455296301677!2d-80.85223568475534!3d35.16047298031899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88569e5940e5813d%3A0x455cb6d5cce25cfb!2sMugs!5e0!3m2!1sen!2sus!4v1654556054150!5m2!1sen!2sus"
          width="50%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </>
  );
}

export default Form;
