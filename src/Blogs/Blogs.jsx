import "./Blogs.css";
import img1 from "../assets/b1.jpg";
import img2 from "../assets/b2.jpg";
import img3 from "../assets/b3.jpg";
import BlogCard from "./BlogCard";

function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Look even slightly believable. If you are",
      description:
        "alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      image: img1,
    },
    {
      id: 2,
      title: "Anything embarrassing hidden in the middle",
      description:
        "alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      image: img2,
    },
    {
      id: 3,
      title: "Molestias magni natus dolores odio commodi. Quaerat!",
      description:
        "alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      image: img3,
    },
  ];

  return (
    <div className="container blogs__container flex" id="blogs">
      <h2>Latest Blog</h2>
      <div className="blogs__holder">
        {blogs.map((blog) => {
          return (
            <BlogCard
              key={blog.id}
              title={blog.title}
              description={blog.description}
              image={blog.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Blogs;
