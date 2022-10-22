import { React, useState } from "react";
import '../resources/form.css'

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
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>How did we do?</h1>
          <div className="ui-divider">
            <div className="ui-form">
              <div className="field">
                <label htmlFor="Name">Name: </label>
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
                <label htmlFor="email">Email: </label>
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
    </>
  );
}

export default Form;
