import Head from "next/head";
import Layout from "../../components/Layout";
import Card from '../../components/blog/Card'
import {singleCategory} from '../../actions/category'
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";

const Category = ({category, blogs, query}) => {
    const head = () => (
    <Head>
      <title>
        {category.name} | {APP_NAME}
      </title>
      <meta name="description" content={`Coolest ${category.name} items`} />
      {/* <link rel="canonical" href={`${DOMAIN}/categories/${query.slug}`} /> */}
      <meta property="og:title" content={`${category.name}| ${APP_NAME}`} />
      <meta property="og:description" content={`Coolest ${category.name} items`} />
      <meta property="og:type" content="webiste" />
      <meta property="og:url" content={`${DOMAIN}/categories/${query.slug}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta property="og:image" content={`${DOMAIN}/static/images/YDD.png`} />
      <meta
        property="og:image:secure_url"
        content={`${DOMAIN}/static/images/YDD.png`} />
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
                                <h1 className="display-4 font-weight-bold">{category.name}</h1>
                                {blogs.map((b,i) => (
                                    <div className="" key={i}>
                                        <Card blog={b}></Card>
                                    </div>
                                ))}
                            </div>
                        </header>
                    </div>
                </main>
            </Layout>
        </>
    )
}

Category.getInitialProps = ({query}) => {
    return singleCategory(query.slug)
    .then(data => {
        if(data.error){
            console.log(data.error);
        }
        else {
            return {category: data.category, blogs: data.blogs, query}
        }
    })
}

export default Category