'use client'
import { WavyBackground } from "@/app/components/ui/wavy-background";
import { AnimatedTooltip } from "@/app/components/ui/animated-tooltip";
 const teachers = [
  {
    id: 1,
    name: "Md. Rafiqul Islam",
    designation: "Senior Mathematics Teacher",
    image: "https://img.freepik.com/premium-photo/indian-male-teacher_981168-3018.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 2,
    name: "Abdul Alim",
    designation: "English Language Specialist",
    image: "https://img.freepik.com/premium-photo/indian-male-teacher_981168-3023.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 3,
    name: "Abdul Karim",
    designation: "Bangla Literature Expert",
    image: "https://img.freepik.com/free-photo/elegant-young-teacher-with-brunette-hair-stylish-light-shirt-black-striped-suit-glasses-holding-writings-pen-giving-lecture_197531-24666.jpg",
  },
  {
    id: 4,
    name: "Abdur Rahman",
    designation: "Science and Biology Instructor",
    image: "https://thumbs.dreamstime.com/b/portrait-young-indian-male-teacher-headset-sitting-office-front-camera-teaching-talking-online-290833072.jpg",
  },
  {
    id: 5,
    name: "Engr. Mahmud Hasan",
    designation: "Physics Instructor",
    image: "https://img.freepik.com/premium-photo/smiling-handsome-indian-male-teacher_928503-3479.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 6,
    name: "Tanvir Chowdhury",
    designation: "Chemistry Specialist",
    image: "https://img.freepik.com/premium-photo/full-body-portrait-photo-happy-indian-school-male-teacher-standing-proudly-blurred-background-o_928503-3759.jpg?semt=ais_hybrid&w=740&q=80",
  },
];

export default function Teacher() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
       <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet our Teacher</h2>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={teachers} />
        </div>
       </WavyBackground>
    </div>
  )
}
