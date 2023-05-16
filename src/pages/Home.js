import "./HomePage.css";
// import { useSpring, animated } from "react-spring";

const HomePage = () => {
  // const styles = useSpring({
  //   from: { opacity: 0 },
  //   to: { opacity: 1 },
  //   delay: 1000, // Adjust the delay as needed
  // });

  const words = ["Welcome", "to", "My", "Website"];

  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src="/bg_video.mp4" type="video/mp4" />
      </video>
      <div className="image-overlay"></div>
      <div className="animation-word">
        <div className="hero-title">
          {words.map((word, index) => (
            <span key={index} className="hero-word">
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
