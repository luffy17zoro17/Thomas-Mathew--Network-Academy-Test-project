import IconProp from "./props/IconProp";
import ImageProp from "./props/ImageProp";
import TextProp from "./props/TextProp";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import InputProp from "./props/InputProp";
import SearchIcon from '@mui/icons-material/Search';



const NavRightTitles = [
    {
        id:1,
        title:`Home`,
    },
    {
        id:2,
        title:`Courses`,
    },
    {
        id:3,
        title:`Careers`,
    },
    {
        id:4,
        title:`Blog`,
    },
    {
        id:5,
        title:`Students Corner`,
    },
    {
        id:6,
        title:`Contact Us`,
    },


]



const Navbar = () => {
    return (
        <div className="mt-[4rem]">
          <div className="shadow-xl h-[5rem] flex items-center
             justify-around bg-white rounded-full
              ">
             <ImageProp
                imgSrc={`http://networkacademy.org/img/logo.png`}
                imgHt={800}
                imgWd={800}
                imgAlt={`Network_Logo`}
                imgClassN={`object-contain h-[5rem] w-[15vw]`}
             /> 
             <div className="flex gap-[1.4vw]">
                {NavRightTitles.map((item)=>(
                    <div key={item.id} className={`flex items-center cursor-pointer
                       hover:shadow-gray-700 hover:shadow-inner px-3
                        hover:rounded-full hover:text-cyan-500
                        
                      ${item.id===6 ? `border-r-4 border-gray-700
                       pr-5 mr-9 rounded-r-xl` : ``}`}>
                       
                       <TextProp title={item.title}/> 
                       {item.id===2 && <IconProp icon={<ArrowDropDownIcon/>}/>} 
                    </div>    
                ))}
                <div className="relative border-4 flex items-center
                    rounded-full border-black p-2 border-dotted
                    hover:border-cyan-600"> 
                  <InputProp 
                     inputPlaceholder={`Search`}
                     inputClassN={`pl-[4rem] outline-none bg-transparent
                       `}
                  />
                  <IconProp 
                     icon={<SearchIcon/>}
                     iconDivClassN={`absolute
                       bg-white shadow border-black
                       border-4 p-2
                       rounded-full shadow-black`}
                  />
                </div>
             </div>
          </div>  
        </div>
    );
}

export default Navbar;