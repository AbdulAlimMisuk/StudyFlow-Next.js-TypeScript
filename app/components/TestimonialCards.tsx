'use client'
import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards";
import { cn } from "@/app/lib/utils";
 const content = [
  {
    quote:
      "Learning is not just about absorbing information — it's about growing, exploring, and challenging your limits. StudyFlow helps you stay consistent, inspired, and confident throughout your learning journey.",
    name: "StudyFlow",
    title: "Comprehensive Guide to Higher Mathematics",
  },
  {
    quote:
      "Mastering language is mastering thought. StudyFlow helps you express your ideas with clarity and confidence through consistent practice and engaging lessons.",
    name: "StudyFlow",
    title: "The Art of English Grammar and Writing",
  },
  {
    quote:
      "Every word in literature carries a universe of emotion. StudyFlow lets you explore the beauty of Bangla literature while strengthening your understanding of grammar and creative expression.",
    name: "StudyFlow",
    title: "A Journey Through Bangla Literature and Grammar",
  },
  {
    quote:
      "Curiosity is the heart of science. StudyFlow encourages you to question, explore, and understand how the world works through engaging lessons in Physics, Chemistry, and Biology.",
    name: "StudyFlow",
    title: "Fundamentals of General Science",
  },
  {
    quote:
      "Chemistry is the bridge between imagination and reality — from atoms to life itself. StudyFlow helps you understand the invisible world that shapes everything around us.",
    name: "StudyFlow",
    title: "Essential Principles of Chemistry Basics",
  },
  {
    quote:
      "Physics teaches us how the universe breathes and moves. StudyFlow makes complex concepts simple, turning curiosity into understanding through clear explanations and examples.",
    name: "StudyFlow",
    title: "Advanced Concepts in Physics Made Simple",
  },
];

export default function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black  relative flex flex-col items-center justify-center overflow-hidden">
       <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      <h2 className="text-3xl text-white font-bold text-center mb-15 z-10">Expand Your Mind, One Subject at a Time</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
           items={content}
           direction="right"
           speed="normal" />
        </div>
      </div>
    </div>
  )
}
