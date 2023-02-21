import IconProp from "./props/IconProp";
import ImageProp from "./props/ImageProp";
import TextProp from "./props/TextProp";
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';

import ListIcon from '@mui/icons-material/List';
import PersonIcon from '@mui/icons-material/Person';

const PopularCourseBoxes = [
    {
        id:1,
        imgSrc:`http://networkacademy.org/img/courses/1.jpg`,
        title:`CCNA 200-301`,
        profilePic:`http://networkacademy.org/img/advisor/1.jpg`
    },
    {
        id:2,
        imgSrc:`http://networkacademy.org/img/courses/1.jpg`,
        title:`CCNA 200-301`,
        profilePic:`http://networkacademy.org/img/advisor/1.jpg`
    },
    {
        id:3,
        imgSrc:`http://networkacademy.org/img/courses/3.jpg`,
        title:`PYTHON FOR DATASCIENCE`,
        profilePic:`http://networkacademy.org/img/advisor/3.jpg`
    },
    {
        id:4,
        imgSrc:`http://networkacademy.org/img/courses/2.jpg`,
        title:`MCSA`,
        profilePic:`http://networkacademy.org/img/advisor/2.jpg`
    }
]





const PopularCourses = () => {
    return (
       <div className="flex justify-center bg-indigo-100">
        <div className="">
         <div className="flex py-[6rem] justify-center
              gap-[9vw]">
            <TextProp 
               title={`Popular Courses`}
               titleClassN={`text-2xl`}
               details={`Our Most Popular &
                 Trending Online Courses`}
               detailClassN={`font-bold text-4xl w-[22rem]
               `}
               textDivClassN={`space-y-7`}  
            />
            <TextProp 
               title={`We are here to help you to find
                suitable courses for your academic qualification and relavance.`}
               details={`COURSE SELECTOR +`}
               detailClassN={`font-medium border-y border-black
                 w-[15rem] p-3 border-x-[0.6rem] text-center
                 shadow-md transition delay-120 duration-300
                 hover:bg-white cursor-pointer rounded-full`}
               textDivClassN={`w-[22rem] space-y-6`}
            />
         </div>
         <div className="flex gap-[2rem] pb-[6rem]">
            {PopularCourseBoxes.map((item)=>(
            <div key={item.id} className="bg-white p-5
             shadow-xl rounded-xl
             rounded-tr-none hover:border-cyan-400
             border-[0.15rem] border-black">    
            <ImageProp
               imgSrc={item.imgSrc}
               imgHt={`11000`}
               imgWd={`11000`}
               imgAlt={`course box`}
               imgClassN={`h-[17rem] cursor-pointer
                border-b-[1rem] rounded-xl
                rounded-tr-none border-t-0
                border-gray-200 w-[20rem] object-cover
                shadow-inner shadow-black
                translate-y-0
                transition delay-120 duration-300
                hover:translate-y-[0.3rem]
                hover:border-t-[1rem]
                hover:border-b-0`}
            />

            <div className="flex justify-between mb-3
               mt-9">
              <IconProp icon={`⭐⭐⭐⭐⭐ 5.0 (867)`}/>
              <TextProp title={`$1.00`}/>
            </div>

             <div className="flex items-center border-b
              border-dashed pb-6 border-cyan-400">
               <ImageProp
                  imgSrc={item.profilePic}
                  imgHt={`5000`}
                  imgWd={`5000`}
                  imgAlt={`profile_pic`}
                  imgClassN={`h-[2.6rem] w-[2.6rem] 
                    object-cover rounded-full`}
               />
               <TextProp 
                  title={`Busel Park in Programming`}
                  titleClassN={`pl-3`}
               /> 
             </div>   
             <TextProp
                title={item.title}
                titleClassN={`font-medium text-xl py-4`}
                details={`Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been the industry's standard`}
                textDivClassN={`w-[20rem]`}
             />
             <div className="flex items-center gap-4 py-4">
               <div className="flex items-center gap-2"><IconProp icon={<QueryBuilderIcon/>}/><TextProp title={`08:27:00`}/></div> 
               <div className="flex items-center gap-2"><IconProp icon={<ListIcon/>}/><TextProp title={`65`}/></div> 
               <div className="flex items-center gap-2"><IconProp icon={<PersonIcon/>}/><TextProp title={`6K`}/></div> 
             </div>   

             <TextProp title={`Enroll now`} titleClassN={`border-black border-2
               rounded-xl w-[9rem] text-center py-3 cursor-pointer
                shadow-md mb-[-1.3rem] font-medium
                hover:border-cyan-400`}/>
            </div>
            ))}
         </div>
        </div> 
       </div> 
    );
}

export default PopularCourses;