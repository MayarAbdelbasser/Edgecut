import "./Blogs.css";

function BlogCard(props) {
  return (
    <div className="blog">
      <div className="blog__image">
        <img src={props.image} alt="blog-image" />
      </div>
      <div className="blog__details">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <a href="#" className="btn btn-primary">
          About Us
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
