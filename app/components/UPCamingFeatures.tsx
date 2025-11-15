'use client'
import Link from 'next/link'
import { HoverEffect } from "@/app/components/ui/card-hover-effect";
  const features = [
  {
    title: "Comprehensive Guide to Higher Mathematics",
    description:
      "Master Algebra, Geometry, Trigonometry, and Calculus through structured lessons and real-world examples.",
    link: "/subjects/higher-mathematics",
  },
  {
    title: "The Art of English Grammar and Writing",
    description:
      "Improve grammar, vocabulary, and writing with engaging lessons designed for students and professionals.",
    link: "/subjects/english-grammar-writing",
  },
  {
    title: "A Journey Through Bangla Literature and Grammar",
    description:
      "Explore classical and modern Bangla literature while building strong grammar and creative writing skills.",
    link: "/subjects/bangla-literature-grammar",
  },
  {
    title: "Fundamentals of General Science",
    description:
      "Learn Physics, Chemistry, and Biology through clear concepts, visuals, and practical examples.",
    link: "/subjects/general-science",
  },
  {
    title: "Essential Principles of Chemistry Basics",
    description:
      "Understand atoms, molecules, chemical reactions, and real-life chemistry applications in an easy way.",
    link: "/subjects/chemistry-basics",
  },
  {
    title: "Advanced Concepts in Physics Made Simple",
    description:
      "Study motion, energy, electricity, magnetism, and waves with simplified explanations and examples.",
    link: "/subjects/physics-made-simple",
  },
];



export default function UPCamingFeatures() {
  return (
    <div className='p-12 bg-gray-900 '>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='text-center'> 
          <h2 className='text-base text-teal-600 font-semibold tracking-wide'>FEATURED COURSE</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Journey</p>
          </div>
          <div className='mt-10'>
              <HoverEffect items={features}/>
          </div>
          
          <div className="mt-10 text-center">
            <Link href={'/courses'} 
            className="px-4 py-3 rounded-full bg-white border-neutral-600 hover:bg-gray-200 text-gray-800 transition duration-300  ">
              view All Courses
            </Link>
        </div>
      </div>
    </div>
  )
}
