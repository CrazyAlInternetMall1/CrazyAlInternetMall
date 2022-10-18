import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      {children}
      {/* <p style={{ textAlign: "center" }}>Footer</p> */}
      <Footer></Footer>
    </>
  );
};

export default Layout;
