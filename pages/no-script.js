import { withRouter } from "next/router";

function NoScript() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
        height: "100vh",
        backgroundImage: "url(" + `${"/img/bg-dots.svg"}` + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="row">
        <div className="col">
          <p style={{ fontSize: "40px" }}> Javascript is Required</p>
        </div>
      </div>
    </div>
  );
}

export default withRouter(NoScript);
