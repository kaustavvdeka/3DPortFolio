import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> academic journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>High School</h4>
                <h5>Sarabari High School</h5>
              </div>
              <h3>2015 – 2020</h3>
            </div>
            <p>
              Completed high school education with a strong academic foundation
              and achieved an overall score of 81.33%.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary (Science Stream)</h4>
                <h5>Aryabhatta Junior Science College</h5>
              </div>
              <h3>2020 – 2022</h3>
            </div>
            <p>
              Studied Physics, Chemistry, and Mathematics in the science stream
              and secured 85.2% in higher secondary examinations.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science & Engineering</h4>
                <h5>Triguna Sen School of Technology, Assam University</h5>
              </div>
              <h3>2023 – 2027</h3>
            </div>
            <p>
              Currently pursuing a Bachelor of Technology in Computer Science,
              focusing on software development, artificial intelligence,
              machine learning, and full stack web technologies.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;