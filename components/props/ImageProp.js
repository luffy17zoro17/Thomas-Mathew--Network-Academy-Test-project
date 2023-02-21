import Image from "next/image";


const ImageProp = ({imgSrc,imgHt,imgWd,imgAlt,
     imgClassN,imgDivClassN})=>{
    return (
       <div className={imgDivClassN}>
         <Image
           src={imgSrc}
           height={imgHt}
           width={imgWd}
           alt={imgAlt}
           className={imgClassN}
         />
       </div> 
    );
}

export default ImageProp