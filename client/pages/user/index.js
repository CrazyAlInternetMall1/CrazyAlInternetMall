import Layout from "../../components/Layout";
import Private from "../../components/auth/Private";
import Link from "next/link";
import Ubergrid from "../../components/layoutcomp/Grid";
import UserInfo from "../../components/user/UserInfo";

const UserIndex = (props) => {
  return (
    <Layout>
      <div className="">
            <Private>
              <UserInfo></UserInfo>
              <Ubergrid></Ubergrid>
            </Private>
        </div>
    </Layout>
  );
};

export default UserIndex;
