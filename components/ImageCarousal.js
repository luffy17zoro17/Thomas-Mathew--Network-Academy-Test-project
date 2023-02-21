import ImageProp from "./props/ImageProp";
import TextProp from "./props/TextProp";



const ImageCarousal = () => {
    return (
       <div className="">
         <div>
          <ImageProp
             imgSrc={`https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`}
             imgHt={9000}
             imgWd={9000}
             imgAlt={`image_carousal`}
             imgClassN={`object-cover w-full h-screen
              mt-[-9rem] z-[-30] blur-sm`}
          />
          <div className="absolute z-10 flex justify-center top-0
             w-full h-screen flex-col items-center text-white
              space-y-8">
              <div className="bg-black absolute w-full h-screen top-0 
                opacity-50 z-[-10]"/>
             <TextProp 
                title={`Education is a tool that`}
                titleClassN={`text-5xl`}
                details={`Helps You Succeed.`}
                detailClassN={`text-8xl`}
                textDivClassN={`text-center
                space-y-5`}
             />
             <TextProp details={`Nomatter what your dream is, Education is that stepping
               stone that can get you there one day.`}
               detailClassN={`text-xl w-[30vw] text-center`}
             />
            <div className="flex justify-center left-0
               absolute w-full flex bottom-[5rem]
                ">
             <TextProp 
               title={`GET STARTED`}
               titleClassN={`text-2xl rounded-full h-[12rem] w-[12rem]
                 font-bold hover:font-light transition delay-120 duration-300
                flex justify-center items-center border-[0.4rem] shadow-inner
                 shadow-black cursor-pointer hover:bg-white
                  hover:text-black hover:border-black
                  hover:border-dashed`}
              
             />  
            </div> 
          </div>
         </div> 
       </div> 
    );
}

export default ImageCarousal;