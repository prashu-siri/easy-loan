import { RiHome4Line } from "react-icons/ri";
import { CiMobile1 } from "react-icons/ci";
import { BsPostcard } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import APP_CONSTANTS from "../Constants";


const Contact = () => {

  useEffect(() => {
    document.title = "Easy Loan | Contact Us";
  }, []);

  const { register, handleSubmit, formState } = useForm({
      defaultValues : {
          name: "",
          email: "",
          message: ""
      }, 
      mode: 'onBlur'
  });

  const { errors, isValid } = formState;
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = () => {
    setIsSuccess(false);
    if(!isValid) {
      return;
    }

    setIsSuccess(true);
  }

  return ( 
    <>
      <div className="container">
        <h1>Contact Us</h1>
      </div>
      <div className="wrapper contact">
        <form onSubmit={handleSubmit(onSubmit)}>
          {isSuccess && <div class="alert alert-banner alert-success">
            <span class="body">{APP_CONSTANTS.MESSAGES.CONTACT_SUCCESS_MSG}</span>
          </div>}
          <h2 className="page-title">Get in touch</h2>
          <div className="form-group-wrapper">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input id="name" type="text" className="form-input" placeholder="Enter name"
                {...register('name', {
                  required: {
                    value: true,
                    message: "Name is required"
                  }
                })}
              />
              <span className='field-error'>{errors?.name?.message}</span>
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input id="email" type="text" className="form-input" placeholder="Enter email" 
                {...register('email', {
                  required: {
                    value: true,
                    message: APP_CONSTANTS.FIELD_ERRORS.EMAIL_REQUIRED
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: APP_CONSTANTS.FIELD_ERRORS.EMAIL_INVALID
                  }
                })}
              />
              <span className='field-error'>{errors?.email?.message}</span>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" cols={30} rows={10}  className="form-textarea" placeholder="Enter message"
              {...register('message', {
                required: {
                  value: true,
                  message: "Write a message"
                }
              })}
            />
            <span className='field-error'>{errors?.message?.message}</span>
          </div>
          <button className="btn-submit" type="submit">Send Message</button>
        </form>
        <div>
          <div className="contact-info">
            <RiHome4Line />
            <div>
              <p className="heading">ButtonWood, California</p>
              <p className="sub-heading">123 Fake St., CA 94103</p>
            </div>
          </div>
          <div className="contact-info">
            <CiMobile1 />
            <div>
              <p className="heading">+1 123 456 7890</p>
              <p className="sub-heading">Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className="contact-info">
            <BsPostcard />
            <div>
              <p className="heading">support@easyloan.com</p>
              <p className="sub-heading">Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </>
   );
}
 
export default Contact;