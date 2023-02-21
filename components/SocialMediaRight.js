import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconProp from './props/IconProp';
import TextProp from './props/TextProp';


const SocialMediaRightList = [
    {
        id:1,
        title:`Like Us!`,
        icon:<FacebookIcon/>,
    },
    {
        id:2,
        title:`Follow Us!`,
        icon:<TwitterIcon />

    },
    {
        id:3,
        title:`Follow Us!`,
        icon:<YouTubeIcon/>,
    },
    {
        id:4,
        title:`Google Us!`,
        icon:<GoogleIcon/>
    },
    {
        id:5,
        title:`Follow Us!`,
        icon:<PinterestIcon/>, 
    },
    {
        id:6,
        title:`Follow Us!`,
        icon:<LinkedInIcon/>
    },
]



const SocialMediaRight = () => {
    return (
       <div className='fixed right-0 z-30 top-[20rem]'>
          {SocialMediaRightList.map((item)=>(
            <div key={item.id} className={`flex gap-3 p-4 border-4
             text-white items-center translate-x-[10.5rem]
             mb-2 cursor-pointer shadow-xl
             transition delay-120 duration-300
              w-[14rem]
             hover:translate-x-[-0.1rem]
              ${item.id===1 ? `bg-blue-700 rounded-tl-3xl` : 
                item.id===2 ? `bg-cyan-400 rounded-tl-2xl` : 
               item.id===3 ? `bg-red-600 rounded-l-xl` :
                item.id===4 ? `bg-yellow-600 rounded-l-xl`
               : item.id===5 ? `bg-red-800 rounded-bl-2xl` : `bg-blue-600
                rounded-bl-3xl`}`}>
               <IconProp icon={item.icon}/><TextProp title={item.title}/> 
            </div>    
          ))}
       </div> 
    );
}

export default SocialMediaRight;