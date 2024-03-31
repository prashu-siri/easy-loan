import { GrMoney } from "react-icons/gr";
import { MdAutorenew } from "react-icons/md";
import { CiMobile1 } from "react-icons/ci";
import { MdOutlinePayments } from "react-icons/md";

const Service = () => {
    return ( 
      <>
        <div className="container">
          <h1>Services</h1>
        </div>
        <div className="wrapper service-wrapper">
          <div className="offer">
            <h2>What do we offer?</h2>
            <p className="desc">More than five years of providing service for customer. We have several options that you can choose from.</p>
            <p className="desc">Easy Loan is your trusted partner in personal finance, offering a range of loan services tailored to meet your needs. Our commitment is to provide you with fast, flexible, and fair financial solutions.</p>
            <p className="desc">Join Easy Loan today and experience financial freedom like never before. Let us help you achieve your dreams with our comprehensive loan services.</p>
          </div>
          <div>
            <div className="service">
              <GrMoney className="service-icon"/>
              <div>
                <h3>Instant Personal Loans</h3>
                <p className="sub-heading">Quick cash loans for urgent needs with minimal paperwork</p>
              </div>
            </div>
            <div className="service">
              <MdAutorenew className="service-icon"/>
              <div>
                <h3>Flexible Loan Amounts</h3>
                <p className="sub-heading">Offering a range of small amounts for short-term needs to larger loan for significant expenses.</p>
              </div>
            </div>
            <div className="service">
              <CiMobile1 className="service-icon"/>
              <div>
                <h3>Varied repayment Terms</h3>
                <p className="sub-heading">Options to choose repayment periods that suit the borrower's financial situations.</p>
              </div>
            </div>
            <div className="service">
              <MdOutlinePayments className="service-icon"/>
              <div>
                <h3>Digital EMI Payments</h3>
                <p className="sub-heading">Convenient online payment options for monthly installments.</p>
              </div>
            </div>
          </div>
        </div>
      </>
     );
}
 
export default Service;