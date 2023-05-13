import "./HomePage.css";
const HomePage = () => {
  return (
    <>
      <div>
        <div className="video-background">
          <video autoPlay loop muted>
            <source src="/bg_video.mp4" type="video/mp4" />
          </video>
          <div className="image-overlay">
            <img src="/pro_pic.jpg" alt="profile" height={100} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
