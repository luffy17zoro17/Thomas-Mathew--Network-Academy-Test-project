import ImageProp from "./props/ImageProp";
import InputProp from "./props/InputProp";
import TextProp from "./props/TextProp";
import SendIcon from '@mui/icons-material/Send';
import IconProp from "./props/IconProp";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';

import Link from "next/link";


const FooterListOne= [
    {
        id:1,
        title:`Home`,
    },
    {
        id:2,
        title:`About`,
    },
    {
        id:3,
        title:`Courses`,
    },
    {
        id:4,
        title:`News`,
    },
    {
        id:5,
        title:`Careers`,
    },
    {
        id:6,
        title:`Contact`,
    },
]



const FooterListTwo= [
    {
        id:1,
        title:`Networking`,
    },
    {
        id:2,
        title:`Software`,
    },
    {
        id:3,
        title:`Digital Marketing`,
    },
    {
        id:4,
        title:`Accounting`,
    },
    {
        id:5,
        title:`Logistics`,
    },
    {
        id:6,
        title:`Medical Coding`,
    },
    {
        id:7,
        title:`Hospital Administration`
    }
]



const FooterListThree = [
    {
        id:1,
        title:`Email:`,
        details:`info@networkacademy.org`,
    },
    {
        id:2,
        title:`Phone:`,
        details:`9746473302 | 9539997778`,
    },
    {
        id:3,
        title:`Address:`,
        details:`Behind Varuna Navy Quarters,
        Chilavannur Rd, Kadavanthra P.O,
        Elamkulam.`,
    },

]




const SocialMediaList = [
    {
        id:1,
        icon:<FacebookIcon/>,
    },
    {
        id:2,
        icon:<TwitterIcon/>,
    },
    {
        id:3,
        icon:<InstagramIcon/>,
    },
    {
        id:4,
        icon:<YouTubeIcon/>,
    },
    {
        id:5,
        icon:<PinterestIcon/>,
    },
  
]

const Footer = () => {
    return (
        <div className="bg-black text-white">
           <div className="flex justify-center items-start
                 gap-[5vw] py-[5rem]">
             <div className="w-[20rem]">
                <ImageProp
                   imgSrc={`http://networkacademy.org/img/logo-light.png`}
                   imgWd={`9000`}
                   imgHt={`9000`}
                   imgAlt={`footer_logo`}
                   imgClassN={`object-contain h-[10rem] w-[24rem]
                     z-20 bg-black`}
                />
                <TextProp
                  details={`We started our journey in 2001. Our ethics,
                   training Quality and placement records made us the leader in the industry.`}
                  detailClassN={`pb-6`} 
                />
                <TextProp
                   details={`Please write your email and get our amazing updates, news and support*`}
                   detailClassN={`pb-6 italic`}
               />

               <div className="relative flex items-center
                  border-4 w-[18rem] justify-end rounded-r-full">
                <InputProp
                  inputPlaceholder={`Enter your e-mail here`}
                  inputClassN={`p-2 outline-none border-2 text-black
                    border-black z-[-10] rounded-r-full`}
                />
                <IconProp iconDivClassN={`absolute z-30 rounded-full border-4 
                border-white bg-black shadow shadow-black
                right-3 p-2 scale-[1.2] hover:border-cyan-400
                  cursor-pointer`} icon={<SendIcon/>} />
               </div> 
             </div>

            <div className="flex pt-[3rem] gap-[5vw]">
             <div className="">
                <TextProp title={`Quick Links`} titleClassN={`font-bold text-xl pb-7`}/>
                {FooterListOne.map((item)=>(
                    <div key={item.id} className="mb-3 text-sm flex gap-3 items-center">
                        <IconProp iconDivClassN={`scale-[0.7]`} icon={<ArrowForwardIcon/>}/>
                        <TextProp title={item.title}/>
                    </div>    
                ))}
             </div>

             <div>
                <TextProp title={`Courses`} titleClassN={`font-bold text-xl pb-7
                `}/>
                {FooterListTwo.map((item)=>(
                    <div key={item.id} className="mb-3 text-sm flex items-center gap-3">
                        <IconProp iconDivClassN={`scale-[0.7]`} icon={<ArrowForwardIcon/>}/>
                        <TextProp title={item.title}/>
                    </div>    
                ))}
             </div>

             <div className="w-[15rem]">
                <TextProp title={`Contact Info`} titleClassN={`font-bold text-xl pb-7`}/>
                {FooterListThree.map((item)=>(
                    <div key={item.id} className="mb-3 text-sm">
                        <TextProp 
                           title={item.title} 
                           titleClassN={`font-bold pr-2`}
                           details={item.details}
                           textDivClassN={`
                             ${item.id===3 ? `flex-col` : `flex`}`}
                        />
                    </div>    
                ))}
                <div className="flex gap-3 py-4">
                {SocialMediaList.map((item)=>(
                    <div key={item.id} className={`p-1 shadow-inner
                     shadow-black border-4 rounded-full
                     hover:border-cyan-400 cursor-pointer
                     transition delay-120 duration-300
                      ${item.id===1 ? `bg-blue-600` : item.id===2 ? `bg-cyan-400` : item.id===3 ? `bg-purple-700` : item.id===4 ? `bg-red-600` : `bg-red-800`}
                     `}>
                       <IconProp icon={item.icon}
                          />  
                    </div>    
                ))}
                </div>
             </div>
            </div> 
           </div> 
           <div className="justify-around flex text-sm border-t py-[5rem]">
             <TextProp title={`© Copyrights 2021. Tecacs IT Group PVT LTD.`}/>
             <TextProp title={`Privacy policy`} details={`Terms & Conditions`}
                 textDivClassN={`flex gap-[2vw]`}/>
                
           </div>
           <div className="flex justify-center font-medium text-green-400 pb-[5rem]">Network Academy Test Project completed by
                  <Link href="https://www.linkedin.com/in/thomas-mathew-b26b87253/">
                    --{'>'} <b className="underline hover:text-red-500
                       text-yellow-600">THOMAS MATHEW</b></Link></div> 
        </div>
    );
}

export default Footer;