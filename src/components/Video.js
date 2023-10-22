import React, { useEffect, useRef } from "react";
// import "./styles.css";

export default function Video() {
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
    <div>
      <div>
        <video
          className="w-full"
          style={{ maxWidth: "100%", width: "", margin: "0 auto" }}
          playsInline
          loop
          muted
          controls
          alt="All the devices"
          src="https://player.vimeo.com/external/473749576.sd.mp4?s=ef6bb8682f311421654b91f9cbd8ce6ccf07cceb&profile_id=164&oauth2_token_id=57447761"
          ref={videoEl}
        />
      </div>
    </div>
  );
}
