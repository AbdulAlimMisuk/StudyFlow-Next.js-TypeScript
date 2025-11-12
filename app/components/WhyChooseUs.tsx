"use client";
import React from "react";
import { StickyScroll } from "@/app/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Comprehensive Guide to Higher Mathematics",
    description:
      "Build a strong foundation in Algebra, Geometry, Trigonometry, and Calculus. Strengthen your analytical and problem-solving skills through practical examples and real-life applications.",
  },
  {
    title: "The Art of English Grammar and Writing",
    description:
      "Improve your grammar, vocabulary, and writing through focused lessons and creative exercises. Learn to express ideas clearly in both written and spoken English.",
  },
  {
    title: " Through Bangla Literature and Grammar",
    description:
      "Explore classic and modern Bangla literature while mastering grammar and writing techniques. Develop your creative writing and appreciation for Bangla’s cultural richness.",
  },
  {
    title: "Essential Principles of Chemistry Basics",
    description:
      "Learn about atoms, molecules, reactions, and compounds through simple explanations and experiments. Connect chemistry concepts to everyday life.",
  },
  {
    title: "Advanced Concepts in Physics Made Simple",
    description:
      "Discover motion, energy, light, and electricity through clear examples and practical problem-solving methods. Learn how Physics shapes the world around us.",
  },
];


export default function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  )
}
