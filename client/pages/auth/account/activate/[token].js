import { useState, useEffect } from "react";
import Layout from "../../../../components/Layout";
import { withRouter } from "next/router";
import { signup } from "../../../../actions/auth";
import jwt from "jsonwebtoken";

const ActivateAccount = ({ router }) => {
  const [values, setValues] = useState({
    name: "",
    token: "",
    error: "",
    laoding: false,
    success: false,
    showButton: true,
  });

  const { name, token, error, loading, success, showButton } = values;

  useEffect(() => {
    let token = router.query.token;
    if (token) {
      const { name } = jwt.decode(token);
      setValues({ ...values, name, token });
    }
  }, [router]);

  const clickSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, loading: true, error: false });
    signup({ token }).then((data) => {
      if (data.error) {
        setValues({
          ...values,
          error: data.error,
          loading: false,
          showButton: false,
        });
      } else {
        setValues({
          ...values,
          laoding: false,
          success: true,
          showButton: false,
        });
      }
    });
  };

  const showLoading = () => ( loading ? <h2>Loading...</h2> : '' )

  return (
    <Layout>
        <div className="container">
            <h3>Hey {name}, ready to activate your account</h3>
            {showLoading()}
            {error && 'You have successfully activated your account. Please sign in'}
            {showButton && <button className="btn btn-outline-primary" onClick={clickSubmit}>Activate</button>}
        </div>
    </Layout>
  )
};

export default withRouter(ActivateAccount);
