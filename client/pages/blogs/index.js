import Head from "next/head";
import Link from "next/link";
import { withRouter } from "next/router";
import Layout from "../../components/Layout";
import { listRelated } from "../../actions/blog";
import { useState, useEffect } from "react";
import { listBlogsWithCategoriesAndTags } from "../../actions/blog";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import Card from "../../components/blog/Card";
import smallCard from "../../components/blog/smallCard";

const head = () => {
  return (
    <Head>
      <title>Coolest things from Around the internet | {APP_NAME}</title>
      <meta
        name="description"
        content="Coolest things from around the internet you can buy today from amazon, ebay, etsy."
      />
      {/* <link rel="canonical" href={`${DOMAIN}${router.pathname}`} /> */}
      <meta
        property="og:title"
        content={`Coolest things from around the internet | ${APP_NAME}`}
      />
      <meta
        property="og:description"
        content={`Weirdest things from around the internet you can buy today from amazon, ebay, etsy. | ${APP_NAME}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}{router.pathname}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta property="og:image" content={`${DOMAIN}/static/images/YDD.png`} />
      <meta
        property="og:image:secure_url"
        content={`${DOMAIN}/static/images/YDD.png`}
      />
      <meta property="og:image:type" content="image/png" />
      {/* add facebook app_id latter on once facebook is up and running */}
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );
};

const Blogs = ({
  blogs,
  categories,
  tags,
  totalBlogs,
  blogsLimit,
  blogSkip,
  router,
}) => {
  const [limit, setLimit] = useState(blogsLimit);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(totalBlogs);
  const [loadedBlogs, setLoadedBlogs] = useState([]);

  const [related, setRelated] = useState([]);

  ///////////////////////////////////////////////////////////////////////////
  //             Implement once finished                                   //
  ///////////////////////////////////////////////////////////////////////////

  // const loadRelated = () => {
  //   listRelated({ blogs }).then((data) => {
  //     if (data.error) {
  //       console.log(data.error);
  //     } else {
  //       setRelated(data);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   loadRelated();
  // }, []);

  ///////////////////////////////////////////////////////////////////////////
  //             Implement once finished                                   //
  ///////////////////////////////////////////////////////////////////////////

  const loadMore = () => {
    let toSkip = skip + limit;
    listBlogsWithCategoriesAndTags(toSkip, limit).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setLoadedBlogs([...loadedBlogs, ...data.blogs]);
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };

  const loadMoreButton = () => {
    return (
      size > 0 &&
      size >= limit && (
        <button onClick={loadMore} className="btn btn-outline-primary btn-lg">
          Load mmore
        </button>
      )
    );
  };

  const showAllBlogs = () => {
    return blogs.map((blog, i) => {
      // ()
      return (
        <article key={i}>
          <Card blog={blog} />
          <hr />
        </article>
      );
    });
  };

  const showAllCategories = () => {
    return categories.map((c, i) => (
      <Link href={`/categories/${c.slug}`} key={i}>
        <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
      </Link>
    ));
  };

  const showAllTags = () => {
    return tags.map((t, i) => (
      <Link href={`/tags/${t.slug}`} key={i}>
        <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
      </Link>
    ));
  };

  const showLoadedBlogs = () => {
    return loadedBlogs.map((blog, i) => (
      <article key={i}>
        <Card blog={blog} />
      </article>
    ));
  };

  const showRelatedBlogs = () => {
    return related.map((blog, i) => {
      <div className="col-md-4" key={i}>
        <article>
          <smallCard></smallCard>
        </article>
      </div>;
    });
  };

  return (
    <>
      {head()}
      <Layout>
        <main>
          <div className="container-fluid">
            <header>
              <div className="col-md-12 pt-3">
                <h1 className="display-4 font-weight-bold text-center">
                  All Items
                </h1>
              </div>
              <section>
                <div className="pb-5 text-center">
                  {showAllCategories()}
                  {showAllTags()}
                </div>
              </section>
            </header>
          </div>
          <div className="container-fluid">{showAllBlogs()}</div>
          <div className="container-fluid">{showLoadedBlogs()}</div>
          {/* <div className="">{showRelatedBlogs}</div> */}
          <div className="">
            <smallCard></smallCard>
          </div>
          <div className="text-center pt-5 pb-5">{loadMoreButton()}</div>
        </main>
      </Layout>
    </>
  );
};

Blogs.getInitialProps = () => {
  let skip = 0;
  let limit = 2;
  return listBlogsWithCategoriesAndTags(skip, limit).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        blogs: data.blogs,
        categories: data.categories,
        tags: data.tags,
        totalBlogs: data.size,
        blogsLimit: limit,
        blogSkip: skip,
      };
    }
  });
};

export default withRouter(Blogs); //getInitalProps
