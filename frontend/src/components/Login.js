import React, { useEffect } from "react";
import "./Styles.css";

export default function Login() {
  useEffect(() => {
    document.body.style.backgroundImage = "URL(./images/pngwing.com.png)";
    return () => {
      document.body.style.backgroundImage = "";
    };
  });
  return (
    <div>
      <div class="container my-2" id="loginHeading">
        <img
          id="loginImgLogo"
          src="https://upload.wikimedia.org/wikipedia/en/c/c4/Indian_Institute_of_Technology%2C_Indore_Logo.png"
          height="100"
          width="auto"
          alt="IIT Indore Logo"
        />
        <h1 class="display-4 text-center">Content Portal</h1>
        <p class="lead text-center">
          Welcome to our study material website designed exclusively for our
          students. Here, you can access a wide range of study materials,
          including notes, presentations, videos, and more, all created and
          curated by our experienced faculty. With our user-friendly interface
          and intuitive navigation, you can easily find the content you need,
          anytime and anywhere. Whether you're preparing for exams, revising
          concepts, or exploring new topics, our website has got you covered.
          Start exploring now and take your learning to the next level!
        </p>
      </div>

      <div className="card mb-3 mx-auto">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://pbs.twimg.com/media/DWiuIqZWsAcuY_w.png"
              className="img-fluid rounded-start"
              alt="study-material"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="col-md">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInputGrid"
                  />
                  <label htmlFor="floatingInputGrid">Institute ID</label>
                </div>
                <br />
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingInputGrid"
                  />
                  <label htmlFor="floatingInputGrid">Password</label>
                </div>
              </div>
              <br />
              <div className="col-md">
                <div className="form-floating">
                  <select className="form-select" id="floatingSelectGrid">
                    <option selected>CSE</option>
                    <option value="1">EE</option>
                    <option value="2">ME</option>
                    <option value="3">CE</option>
                    <option value="4">MEMS</option>
                  </select>
                  <label htmlFor="floatingSelectGrid">Branch</label>
                </div>
              </div>
              <br />
              <div className="col-md">
                <div className="form-floating">
                  <select className="form-select" id="floatingSelectGrid">
                    <option selected>1st year</option>
                    <option value="1">2nd year</option>
                    <option value="2">3rd year</option>
                    <option value="3">4th year</option>
                  </select>
                  <label htmlFor="floatingSelectGrid">Select Year</label>
                </div>
              </div>
            </div>
            <div className="form-floating">
              <button
                class="btn login"
                type="submit"
                style={{ color: "white" }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
