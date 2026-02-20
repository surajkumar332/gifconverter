import { useState, useEffect } from "react";
import gifshot from "gifshot";
import Result from "./Result";
import Dbutton from "./Dbutton";


function Button() {
  const [videoFile, setVideoFile] = useState(null);
  const [gif, setGif] = useState(null);
  const [ffmpegLoaded, setFfmpegLoaded] = useState(false);

  useEffect(() => {
 
    setFfmpegLoaded(true);
  }, []);



  const convertVideoToGif = () => {
    if (!videoFile) return;

    gifshot.createGIF(
      {
        video: [URL.createObjectURL(videoFile)], 
        gifWidth: 320,
        gifHeight: 240,
        interval: 0.8, 
      },
      function (obj) {
        if (!obj.error) {
          const image = obj.image;
          setGif(image); 
        } else {
          console.error("GIF creation failed", obj.error);
        }
      }
    );
  };

  return (
    <>
      <input
        type="file"
        accept="video/*"
        onChange={(e) => setVideoFile(e.target.files[0])}
      />
      
        {videoFile && ffmpegLoaded ? "Converting...": "Convert GIF"}
      <button onClick={convertVideoToGif} >
        Convert GIF
      </button>
      {gif && <Result output={gif} />}
      {gif && <Dbutton gif={gif}/>}
    </>
  );
}

export default Button;
