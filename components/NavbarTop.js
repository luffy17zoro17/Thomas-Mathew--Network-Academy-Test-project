import IconProp from "./props/IconProp";
import TextProp from "./props/TextProp";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';


const NavbarTop = () => {
    return (
     <div className="absolute z-50 w-full top-0">
        
        <div className="flex text-white
         justify-between px-[5vw] items-center h-[3.5rem]
         font-bold">
            <TextProp
               title={`A Training Brand of Tecacs`}
            />
            <div className="flex items-center gap-2">
               <IconProp
                  icon={<LocalPhoneIcon/>}
               /> 
               <TextProp title={`9746473302 | 9539997778 /`}/>
               <IconProp
                  icon={<EmailIcon/>}
               />
               <TextProp title={`info@networkacademy.org`}/>
            </div>
        </div>
        <div className="rounded-b-full 
        bg-gradient-to-b from-indigo-500 via-cyan-400 to-transparent
        absolute h-[3.5rem] w-full blur-xl
            opacity-80 z-[-30] top-0"/>
     </div>   
    );
}
export default NavbarTop;