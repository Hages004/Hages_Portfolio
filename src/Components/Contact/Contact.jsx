import "./Contact.css"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_a37b7zs', 'template_vojmcyy', form.current, {
          publicKey: 'JmTQf8S5NAFDeWPD6',
        })
        .then(() => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

  return (
    <div id="Contact Me" className="c-container">
        <h3>Contact Me</h3>
        <div className="c-content">
          <div className="c-con1">
            <form ref={form} onSubmit={sendEmail} className="c-content1">
                <p className="head">Let's work together</p>
                <p >I'm always excited to connect with new people and explore creative opportunities. Reach out today, and let's make something amazing together.</p>
                <input type="text" name="form_name" placeholder="Name" /><br></br>
                <input type="email" name="form_email" placeholder="E-mail" /><br></br>
                <textarea name="Messages" placeholder=" Write your Message....." /><br></br>
                <button className="send" type="submit">Send</button>
            </form>
            </div>
            <div className="c-content2">

                <p> <span className="phone"><i className="fa-solid fa-phone fa-2xl"></i> </span> +91 80729 69093</p><br></br>
                <p> <span className="em"> <i className="fa-solid fa-envelope fa-2xl"></i> </span>hages004@gmail.com</p><br></br>
                <a href="https://github.com/Hages004?tab=overview&from=2024-06-01&to=2024-06-16"><span className="gh"><i className="fa-brands fa-github fa-2xl"></i></span></a>
                <a href="https://www.linkedin.com/in/hages-s-p-51a66127b/"><span className="li"><i className="fa-brands fa-linkedin fa-2xl"></i></span></a>
            </div>
        </div>
</div>
  );
}

  /*return (
    <div className="c-container">
        <h3>Contact Me</h3>
        <div className="c-content">
            <div className="c-content1">
                <div className="c-msg">
                    <form action="">
                        <h4>Lets work together</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, aspernatur.</p>
                        <input className="fn" type="text"  placeholder="First Name" required/>
                        <input className="ln" type="text"  placeholder="Last Name" required/>
                        <input className="email" type="e-mail"  placeholder=" Email" required />
                        <textarea name="name" placeholder="Message"/>
                        <button>Send</button>
                    </form>
                </div>
            </div>

            <div className="c-content2">
                <div className="c-details"></div>
            </div>
        </div>
    </div>
  )*/



export default Contact
