import { useEffect } from "react";

const About = () => {
  
  useEffect(() => {
    document.title = "Easy Loan | About Us";
  }, []);
  
  return ( 
    <>
      <div className="container">
        <h1>About Us</h1>
      </div>
      <section className="df bg-lite section-wrapper">
        <div className="left-panel">
          <img src="https://images.unsplash.com/photo-1606787364410-947e10173148?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="family" />
        </div>
        <div className="right-panel">
          <h2>We guide projects and organizations in making the right decisions.</h2>
          <p>Tools such as a profit simulator and tax calculator show the value of your 
            stock options and exercise cost. The brochure must grab a viewer’s attention 
            and hold it long enough to deliver the pertinent information.</p>
          <ul>
            <li><span>Monthly recurring revenue</span></li>
            <li>Customer acquisition cost</li>
            <li>Number of customers</li>
          </ul>
          <button className="btn btn-outline">Learn More</button>
        </div>
      </section>
      <section className="info">
          <h2>Why choose us?</h2>
          <p>The brochure must grab a viewer's attention and hold it long
  enough to deliver the pertinent information.</p>
        </section>
        <section className="card-wrapper">
          <div className="df-column">
            <div><img src="https://preview.colorlib.com/theme/easylo/assets/img/icon/services4.svg" alt="Quick Apply" /></div>
            <div style={{textAlign: 'center'}}>
              <h3>Quick Apply</h3>
              <p className="desc">Tools such as a profit and tax calculator show the value of your stock options and exercise cost.</p>
            </div>
          </div>
          <div className="df-column">
            <div><img src="https://preview.colorlib.com/theme/easylo/assets/img/icon/services5.svg" alt="Online & Secure" /></div>
            <div style={{textAlign: 'center'}}>
              <h3>Online & Secure</h3>
              <p className="desc">Tools such as a profit and tax calculator show the value of your stock options and exercise cost.</p>
            </div>
          </div>
          <div className="df-column">
            <div><img src="https://preview.colorlib.com/theme/easylo/assets/img/icon/services7.svg" alt="Low Interest" /></div>
            <div style={{textAlign: 'center'}}>
              <h3>Low Interest</h3>
              <p className="desc">Tools such as a profit and tax calculator show the value of your stock options and exercise cost.</p>
            </div>
          </div>
        </section>
        <section className="df-reverse bg-lite section-wrapper">
          <div className="left-panel">
            <img src="https://images.unsplash.com/photo-1606787364410-947e10173148?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="family" />
          </div>
          <div className="right-panel">
            <h2>Get Loan in 3 easy steps</h2>
            <p>Tools such as a profit simulator and tax calculator show the value of your 
              stock options and exercise cost. The brochure must grab a viewer’s attention 
              and hold it long enough to deliver the pertinent information.</p>
            <ul>
              <li><span>Monthly recurring revenue</span></li>
              <li>Customer acquisition cost</li>
              <li>Number of customers</li>
            </ul>
            <button className="btn btn-outline">Learn More</button>
          </div>
        </section>
    </>
    
    );
  }
  
  export default About;