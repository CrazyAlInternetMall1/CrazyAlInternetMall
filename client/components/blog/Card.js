import Link from "next/link";
import { API } from "../../config";

const Card = ({ blog }) => {
  const showBlogCategories = (blog) => {
    return blog.categories.map((c, i) => (
      <Link key={i} href={"/categories/${c.slug}"}>
        <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{c.name}</a>
      </Link>
    ));
  };

  const showBlogTags = (blog) => {
    return blog.tags.map((t, i) => (
      <Link key={i} href={"/tag/${c.slug}"}>
        <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
      </Link>
    ));
  };

  return (
    <div className="lead d-flex justify-items-center">
      <header>
        <Link href={`/blogs/${blog.slug}`}>
          <a href="">
            <h2 className="display-6 pt-3 pb-3">{blog.title}</h2>
          </a>
        </Link>
      </header>
      <section>
        <p className="ml-1 pt-2pb-2">Day {blog.createdAt}</p>
      </section>
      <section>
        {showBlogCategories(blog)}
        {showBlogTags(blog)}
      </section>
      <div className="row">
        <section>
          <img
            className="img img-fluid"
            style={{ maxHeight: "200px", width: "auto" }}
            src={`${API}/blog/photo/${blog.slug}`}
            alt={blog.title}
          />
        </section>
      </div>
      <hr></hr>
    </div>
  );
};

export default Card;
