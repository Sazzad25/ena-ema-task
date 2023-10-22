import React, { useEffect, useRef } from "react";
// import ReactDOM from "react-dom";
import VideoBg from "reactjs-videobg";
// import ogg from "./Neon.ogg";
// import webm from "./Neon.webm";
// import mp4 from "./Neon.mp4";
// import poster from "../images/1.jpg";

import "./Video2.css";

export default function Video2() {
    const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  return (
    <div className="App pb-3">
        
      <VideoBg  >
        <VideoBg.Source
          className=''
          src="https://player.vimeo.com/external/473749576.sd.mp4?s=ef6bb8682f311421654b91f9cbd8ce6ccf07cceb&profile_id=164&oauth2_token_id=57447761"
          type="video/ogg"
          ref={videoEl}
          playsInline
          loop
          muted
          controls
          alt="All the devices"
        />
      </VideoBg>

      <div className="text-orange-400 form">
        {/* <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" /> */}
        <button>Login</button>
      </div>
    </div>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
