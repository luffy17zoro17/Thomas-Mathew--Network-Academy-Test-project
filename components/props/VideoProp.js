



const VideoProp = ({videoHt,videoWd,videoSrc,
     videoClassN}) => {
    return (
      <div>
      <iframe
        width={videoWd} 
        height={videoHt} 
        src={videoSrc} 
        title="No Copyright Video, Background, Green Screen, Motion Graphics, Animated Background, Copyright Free" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen
        className={videoClassN}>   
      </iframe>

      </div>  
    );
}

export default VideoProp;

