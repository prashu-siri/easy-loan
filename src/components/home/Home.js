import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import testimonials from '../../data/testimonials';
import Testimonial from "../testimonial/Testimonial";
import blogs from '../../data/blogs';
import Blog from "../blog/blog";

const Home = () => {

  useEffect(() => {
    document.title = "Easy Loan | Home";
  }, []);

  const navigate = useNavigate();
  
    return ( 
      <div className='home'>
        <div className='container'>
          <h1>The simple online loan.</h1>
          <p>Financial uncertainty is hard on employees, and causes even.</p>
          <button onClick={() => navigate('services')}>OUR SERVICES</button>
        </div>
        <section className="info">
          <h2>Solutions for every business need.</h2>
          <p>The brochure must grab a viewer's attention and hold it long
enough to deliver the pertinent information.</p>
        </section>
        <section className="card-wrapper">
          <div>
            <div>
              <img src="https://preview.colorlib.com/theme/easylo/assets/img/icon/services1.svg" alt="home" />
            </div>
            <p>Home Loan</p>
            <div>
              <h3>What are my options and the cost to exercise?</h3>
              <p className="desc">Tools such as a profit and tax calculator show the value of your stock options and exercise cost.</p>
            </div>
          </div>
          <div>
            <div><img src="https://preview.colorlib.com/theme/easylo/assets/img/icon/services2.svg" alt="car" /></div>
            <p>Car Loan</p>
            <div>
              <h3>Should I exercise now or later? How can I afford it?</h3>
              <p className="desc">Tools such as a profit and tax calculator show the value of your stock options and exercise cost.</p>
            </div>
          </div>
          <div>
            <div><img src="https://preview.colorlib.com/theme/easylo/assets/img/icon/services3.svg" alt="business" /></div>
            <p>Business Loan</p>
            <div>
              <h3>I own my shares - can I get liquidity now without selling?</h3>
              <p className="desc">Tools such as a profit and tax calculator show the value of your stock options and exercise cost.</p>
            </div>
          </div>
        </section>
        <div className="bg-lite news">
          <section className="info">
            <h2>Latest News</h2>
          </section>
          <section className="card-wrapper">
            {blogs.map((blog) => (
              <Blog key={blog.id} {...blog} />
            ))}
          </section>
        </div>
        <div className="testimonials">    
          <section className="card-wrapper">
            {testimonials.map((item) => (
              <Testimonial key={item.id} {...item} />
            ))}
            
          </section>
        </div>
      </div>
    );
}
 
export default Home;