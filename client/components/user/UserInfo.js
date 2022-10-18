import { isAuth } from "../../actions/auth";

const UserInfo = () => {
  return (
    <>
    <div className="uc-container">
        <h1>Welcome Back, Garrett</h1>;
        <button className="btn btn-primary" style={{padding:'10px', margin:'10px'}}>Edit Profile</button>
        <button className="btn btn-primary" style={{padding:'10px', margin:'10px'}}>Share Profile</button>
        <h5 style={{textDecoration:"underline", textAlign:"center", paddingTop:"70px"}}>Saved Items</h5>
    </div>
    </>
  );
};

export default UserInfo;
