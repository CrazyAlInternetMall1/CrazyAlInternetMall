import Layout from "../../components/Layout";
import Admin from "../../components/auth/Admin";

const AdminIndex = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 pt-5 pb-5">
              <h2>Welcome Back,</h2>
            </div>
            <div className="col-md-4">
              <ul class="list-group">
                <li className="list-group-item">
                  <a href="admin/crud/category-tag" className="">
                    Create New Category
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul class="list-group">
                <li className="list-group-item">
                  <a href="admin/crud/category-tag" className="">
                    Create New Tag
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul class="list-group">
                <li className="list-group-item">
                  <a href="admin/crud/blog" className="">
                    Create New Post
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul class="list-group">
                <li className="list-group-item">
                  <a href="admin/crud/blogs" className="">
                    Update/Delete Items
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default AdminIndex;
