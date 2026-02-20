import React, { useState } from "react";

function InputFile() {

const [video, setVideo] = useState(null);
  

  return(
    <>
     <div className="box">
      <input type="file" accept="video/*" onChange={(e)=> setVideo(e.target.files[0])}/>
     </div>
    </>
  );
};
export default InputFile;