import { Link } from "react-router-dom";

const Blog = ({imgUrl, heading, summary, date}) => {
  return ( 
    <div>
      <div>
        <img src={imgUrl} alt="blog1" />
      </div>
      <p className="date">{date}</p>
      <div>
        <Link to="/" className="blog-title"><h3>{heading}</h3></Link>
        <p className="desc">{summary}</p>
      </div>
    </div>
   );
}
 
export default Blog;