function Dbutton({gif}){

  const downloadGif = () =>{
    if(!gif) return;
    const a = document.createElement("a");
    a.href = gif;
    a.download = "output.gif";
    a.click();
  };


  return(
    <>
    <button onClick={()=>downloadGif()}>Download GIF</button>
    </>
  );
};
export default Dbutton;