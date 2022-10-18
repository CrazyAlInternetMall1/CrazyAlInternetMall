import NewCard from "../blog/NewCard";
import Masonry from "@mui/lab/Masonry";
import { Grid } from "@mui/material";
import PriceBtn from "../blog/PriceBtn";

const Ubergrid = (props) => {
  return (
    <>
      <PriceBtn></PriceBtn>

      <Masonry
        container
        columns={{ xs: 1, sm: 2, md: 2, lg: 3, xl: 4, xxl: 5 }}
        defaultColumns={4}
        spacing={3}
        style={{ margin: "auto", flexFlox: "column" }}
        justifyContent="center"
        alignItems="center"
        justifySelf="center"
        alignSelf="center"
        className="masongrid"
      >
        <Grid item>
          <NewCard></NewCard>
        </Grid>
        <Grid item>
          <div className="card-background">
            <div className="card-outline">
              <div className="card-main">
                <div style={{ color: "#fff" }}>
                  {/* Title */}
                  <h2 className="c-title">Plug-N-Play Home</h2>
                  {/* Image */}
                  <div className="c-img-container">
                    <img
                      src="../static/images/nice.jpg"
                      className="img img-fluid"
                    ></img>
                  </div>
                  {/* Body */}
                  <section className="c-body">
                    <div className="c-info desc">
                      Green apples have a high fiber content which helps in
                      increasing the body's metabolism.Green apples have a high
                      fiber content which helps in increasing the body's
                      metabolism.Green apples
                    </div>
                  </section>
                  <div className="price-container">
                    <p>$</p>
                    <h1 className="price">900k</h1>
                  </div>
                  {/* Likes, and Links */}
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item>
          <NewCard></NewCard>
        </Grid>
        <Grid item>
          <NewCard></NewCard>
        </Grid>
        <Grid item>
          <NewCard></NewCard>
        </Grid>
        <Grid item>
          <NewCard></NewCard>
        </Grid>
        <Grid item>
          <div className="card-background">
            <div className="card-outline">
              <div className="card-main">
                <div style={{ color: "#fff" }}>
                  {/* Title */}
                  <h2 className="c-title">Plug-N-Play Home</h2>
                  {/* Image */}
                  <div className="c-img-container">
                    <img
                      src="../static/images/sar.jpg"
                      className="img img-fluid"
                    ></img>
                  </div>
                  {/* Body */}
                  <section className="c-body">
                    <div className="c-info desc">
                      Green apples have a high fiber content which helps in
                      increasing the body's metabolism.Green apples have a high
                      fiber content which helps in increasing the body's
                      metabolism.Green apples
                    </div>
                  </section>
                  <div className="price-container">
                    <p>$</p>
                    <h1 className="price">900k</h1>
                  </div>
                  {/* Likes, and Links */}
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item>
          <NewCard></NewCard>
        </Grid>
        <Grid item>
          <NewCard></NewCard>
        </Grid>
        <Grid item>
          <NewCard></NewCard>
        </Grid>
        <Grid item>
          <NewCard></NewCard>
        </Grid>
        <Grid item>
          <NewCard></NewCard>
        </Grid>
        <Grid item>
          <div className="card-background">
            <div className="card-outline">
              <div className="card-main">
                <div style={{ color: "#fff" }}>
                  {/* Title */}
                  <h2 className="c-title">Mermaid Skeleton</h2>
                  {/* Image */}
                  <div className="c-img-container">
                    <img
                      src="../static/images/skel.jpg"
                      className="img img-fluid"
                    ></img>
                  </div>
                  {/* Body */}
                  <section className="c-body">
                    <div className="c-info desc">
                      Green apples have a high fiber content which helps in
                      increasing the body's metabolism.Green apples have a high
                      fiber content which helps in increasing the body's
                      metabolism.Green apples
                    </div>
                  </section>
                  <div className="price-container">
                    <p>$</p>
                    <h1 className="price">900k</h1>
                  </div>
                  {/* Likes, and Links */}
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item>
          <NewCard></NewCard>
        </Grid>
        <Grid item>
          <NewCard></NewCard>
        </Grid>
        <Grid item>
          <NewCard></NewCard>
        </Grid>
        <Grid item>
          <NewCard></NewCard>
        </Grid>
        <Grid item>
          <NewCard></NewCard>
        </Grid>
        <Grid item>
          <NewCard></NewCard>
        </Grid>
        <Grid item>
          <NewCard></NewCard>
        </Grid>
        <Grid item>
          <NewCard></NewCard>
        </Grid>
      </Masonry>
    </>
  );
};

export default Ubergrid;
