import { FaStar } from "react-icons/fa";

const Testimonial = ({name, rating, message}) => {
  return (  
    <div className="testimonial-wrapper">
      <div className="testimonial-header">
        <img
          alt="Man"
          src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
        />
        <div className="rating">
          <div>
            {[...Array(rating)].map((_, i) => (
              <FaStar key={i}/>
            ))}
          </div>
          <h3>{name}</h3>
        </div>
      </div>
      <p className="testimonial-message">{message}</p>
    </div>
  );
}
 
export default Testimonial;