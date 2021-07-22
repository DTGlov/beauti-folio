import React,{useState,useContext} from 'react';
import './Contact.scss';
import wave from '../../assets/waving_hand.gif';
import FirebaseContext from '../../context/firebase';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    message:''
  });

  const date = new Date();

  const isInvalid = form.post === "" || form.message===""
  const { firebase } = useContext(FirebaseContext);

  const clearForm = () => {
    setForm({
      name: "",
      message:""
  })
}

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await firebase.firestore().collection("messages").add({
        messages: form,
        dateSent:date.toLocaleString()
      })
      if (isInvalid) {
        alert("Fill in all spaces 😬")
        return
      } else {
         alert("Message Sent 🚀🤗");
         clearForm();
      }
     
    } catch (error) {
      alert(error.message)
    }
  }
    return (
      <div className="contact-section" id="Contact">
        <div className="contact-container">
          <h1 className="contact-container-text">Say Hello </h1>
          <img src={wave} alt="" className="contact-container-gif" />
        </div>
        <div className="contact-details">
          <p className="contact-details-para">
            I am actively searching for a <span>junior developer job</span> and
            I'm also open to working on exciting projects. Just hit me up.
          </p>
        </div>
        <div className="form-container">
        <form data-aos="fade-up" action="" className="form">
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            type="text"
            placeholder="Enter Name"
          />
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Enter Message"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <div className= "con-button">
            <p className={isInvalid?"con-button-content-invalid":"con-button-content"} onClick={handleSubmit}>
              Send
            </p>
          </div>
        </form>
      </div>
      </div>
    );
}

export default Contact
