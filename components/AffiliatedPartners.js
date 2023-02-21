import ImageProp from "./props/ImageProp";
import TextProp from "./props/TextProp";


const AffiliatedItems = [
    {
        id:1,
        imgSrc:`http://networkacademy.org/img/partners/1.png`
    },
    {
        id:2,
        imgSrc:`http://networkacademy.org/img/partners/2.png`
    },
    {
        id:3,
        imgSrc:`http://networkacademy.org/img/partners/3.png`
    },
    {
        id:4,
        imgSrc:`http://networkacademy.org/img/partners/4.png`
    },
]





const AffiliatedPartners = () => {
    return (
       <div className="flex justify-center">
         <div>
            <TextProp 
               title={`Affiliations`} 
               titleClassN={`font-medium text-2xl
                 `}
               details={`Affiliated Partners`}
               detailClassN={`font-bold text-4xl
               border-black border-dashed pb-11
                rounded-3xl shadow-md mx-[14rem]
               border-b-4`}
               textDivClassN={`text-center pt-[15rem] pb-[4rem] 
               space-y-6`}
            />
            <div className="flex gap-[5vw] pb-[5rem]">
            {AffiliatedItems.map((item)=>(
           <div key={item.id} className="">
            <ImageProp
               imgSrc={item.imgSrc}
               imgWd={18000}
               imgHt={18000}
               imgAlt={``}
               imgClassN={`object-contain h-[15rem] w-[15rem]`}
            />
            </div>
            ))}
            </div>
         </div>
       </div> 
    );
}

export default AffiliatedPartners;