import ImageProp from "./props/ImageProp";
import TextProp from "./props/TextProp";


const AboutNAPoints = [
    {
        id:1,
        title:`Computer Networking, Server Platform, Cloud Technologies and Automation`,
    },
    {
        id:2,
        title:`Software Development, Testing, Web Development and DevOps`,
    },
    {
        id:3,
        title:`Accounting Packages`,
    },
    {
        id:4,
        title:`Digital Marketing`,
    },
    {
        id:5,
        title:`Logistics, SCM, International Shipping and Cargo Management`,
    },

]



const AboutNA = () => {
    return (
       <div className="flex justify-center gap-[39rem]">
         <div className="w-[30%] space-y-6 pt-[7rem]
           pb-[4rem]">
            <TextProp 
               title={`Who we are`}
               titleClassN={`text-2xl`}
            />
            <TextProp
               title={`About Network Academy`}
               titleClassN={`font-bold text-4xl`}
               details={`We started our journey in 2001. 
               Our ethics, training Quality and placement records made us the
                leader in the industry. And we are continuing our journey with a team of 
                industry leading trainers, for guiding & training you in future technologies. 
                We believe that quality training is the breathing essential for a student to 
                become a qualified professional. And we assure you that we are committed to 
                prepare you as an professional in various field of job industry.
                We are the leading provider of quality education in Kerala, in the field of..`}
               detailClassN={`leading-8`} 
               textDivClassN={`space-y-6`}
            />
            <div className="font-bold pt-[2rem]">
            {AboutNAPoints.map((point)=>(
                <div key={point.id} className="flex mb-8">
                   <div className="border-b-4 border-r-4
                     w-[1rem] h-[3rem] border-dotted
                      border-b-red-500 
                      border-cyan-400
                      rotate-45"/>
                   <TextProp title={point.title} titleClassN={`pl-11`}/>  
                </div>    
            ))}
            <div className="flex gap-11 pt-[3rem]">
             <TextProp
                title={`120 +`}
                titleClassN={`font-bold text-4xl`}
                details={`Courses`}
                textDivClassN={`border-r-4 pr-9
                  border-dashed`}
             />
             <TextProp
                title={`2000 +`}
                titleClassN={`font-bold text-4xl`}
                details={`Students`}
             />
             </div>
             <TextProp 
               title={`READ MORE`} 
               titleClassN={`bg-cyan-400 text-white
                 h-[5.2rem] w-[5.2rem] rounded-full
                 border-4 cursor-pointer
                 text-center shadow shadow-black
                 flex justfiy-center items-center
                 hover:text-black active:shadow-none
                `}
               textDivClassN={`pt-11 ml-5`} 
             />
            </div>
         </div>
         <ImageProp
            imgSrc={`https://images.unsplash.com/photo-1618355776464-8666794d2520?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80`}
            imgHt={`9000`}
            imgWd={`9000`}
            imgAlt={`aboutNA_right_pic`}
            imgClassN={`absolute w-[50rem] h-[60rem] object-cover right-0
               border-[2rem] border-white
                 shadow shadow-black`}
          />

       </div> 
    );
}
export default AboutNA;