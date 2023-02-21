import IconProp from "./props/IconProp";
import TextProp from "./props/TextProp";
import VideoProp from "./props/VideoProp";
import HouseIcon from '@mui/icons-material/House';
import Face3Icon from '@mui/icons-material/Face3';



const RightBoxContent=[
    {
        id:1,
        numb:`01`,
        icon:<HouseIcon/>,
        title:`Best Infrastructure`,
        detail:`Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the industry's standard`,
    },
    {
        id:2,
        numb:`02`,
        icon:< Face3Icon/>,
        title:`Quality of Training`,
        detail:`Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the industry's standard 
       `,

    }
]



const WhyChooseUs = () => {
    return (
       <div className="flex justify-center">
         <div>
            <TextProp 
              title={`Why Choose us`}
              titleClassN={`font-bold text-4xl py-[7rem]
               text-center`}
            />
            <div className="flex">
                <VideoProp
                   videoSrc={`https://www.shutterstock.com/shutterstock/videos/1072141856/preview/stock-footage-group-of-students-learns-at-lecture-room-young-people-study-in-university-or-pupil-sitting-at.webm`}
                   videoHt={`1720`}
                   videoWd={`2580`}
                   videoClassN={`h-[19.8rem] w-[32rem]
                    object-cover rounded-xl
                    border-[2rem] shadow shadow-black
                    border-white
                    border-r-black
                    border-t-black
                    `}
                />
                <div className="flex gap-8 pl-8">
                {RightBoxContent.map((item)=>(
                <div key={item.id} className={`w-[21rem] p-5
                   border-4 border-black space-y-11 pt-[3rem]
                   transition delay-120 duration-300 cursor-pointer
                   ${item.id===1 ? `rounded-t-3xl hover:translate-y-[-2rem]` : `rounded-r-3xl hover:translate-x-[2rem]`}`}>
                  <div>  
                    <div className="flex justify-between">
                    <TextProp 
                      title={item.numb}  
                      titleClassN={`text-4xl font-bold`}
                    />
                    <IconProp
                      icon={item.icon}
                      iconDivClassN={`scale-[1.9] py-2 px-4`}
                    />
                    </div>
                  </div>
                  <TextProp
                     title={item.title}
                     titleClassN={`font-bold text-2xl pb-4`}
                     details={item.detail}
                  />  
                </div>
                ))}
                </div>
            </div>
         </div>
       </div> 
    );
}

export default WhyChooseUs;