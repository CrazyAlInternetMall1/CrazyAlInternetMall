import Head from "next/head";
import Layout from "../../components/Layout";
import Card from "../../components/blog/Card";
import { singleTag } from "../../actions/tag";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";

const Tag = ({ tag, blogs, query }) => {
  const head = () => (
    <Head>
      <title>
        {tag.name} | {APP_NAME}
      </title>
      <meta name="description" content={`Coolest ${tag.name} items`} />
      {/* <link rel="canonical" href={`${DOMAIN}/categories/${query.slug}`} /> */}
      <meta property="og:title" content={`${tag.name}| ${APP_NAME}`} />
      <meta property="og:description" content={`Coolest ${tag.name} items`} />
      <meta property="og:type" content="webiste" />
      <meta property="og:url" content={`${DOMAIN}/tags/${query.slug}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta property="og:image" content={`${DOMAIN}/static/images/YDD.png`} />
      <meta
        property="og:image:secure_url"
        content={`${DOMAIN}/static/images/YDD.png`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );
  return (
    <>
      {head()}
      <Layout>
        <main>
          <div className="contianer-fluid text-center">
            <header>
              <div className="col-md-12 pt-3">
                <h1 className="display-4 font-weight-bold">{tag.name}</h1>
                {blogs.map((t, i) => (
                  <div className="" key={i}>
                    <Card blog={t}></Card>
                  </div>
                ))}
              </div>
            </header>
          </div>
        </main>
      </Layout>
    </>
  );
};

Tag.getInitialProps = ({ query }) => {
  return singleTag(query.slug).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return { tag: data.tag, blogs: data.blogs, query };
    }
  });
};

export default Tag;
