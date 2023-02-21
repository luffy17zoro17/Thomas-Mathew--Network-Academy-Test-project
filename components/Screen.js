import AboutNA from "./AboutNA";
import AffiliatedPartners from "./AffiliatedPartners";
import ImageCarousal from "./ImageCarousal";
import PopularCourses from "./PopularCourses";
import WhyChooseUs from "./WhyChooseUs";



const Screen = () => {
    return (
       <div className="">
          <ImageCarousal/>
          <AboutNA/>
          <WhyChooseUs/>
          <AffiliatedPartners/>
          <PopularCourses/>
       </div> 
    );
}

export default Screen;