import { main } from "motion/react-client"
import HeroSectio from "@/app/components/HeroSectio";
import FeaturedCourses from "@/app/components/FeaturedCourses";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import TestimonialCards from "@/app/components/TestimonialCards";
import UPCamingFeatures from "@/app/components/UPCamingFeatures";
import Teacher from "@/app/components/Teacher";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
     <HeroSectio/>
     <FeaturedCourses/>
     <WhyChooseUs/>
     <TestimonialCards/>
     <UPCamingFeatures/>
     <Teacher/>
    </main>
   
  );
}
