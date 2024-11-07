"use client";
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Assuming you have a custom button component

const AboutMe = () => {
  return (
    <div className=" w-[100%] min-h-screen flex items-center justify-center mt-[-40px]">
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
          <p className="mt-2 text-gray-600">A little bit about who I am and what I do.</p>
        </div>
        
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3">
            <img
              src="/profile-picture.jpg" // Replace with your profile picture URL
              alt="Profile Picture"
              className="w-32 h-32 rounded-full mx-auto md:mx-0"
            />
          </div>
          <div className="md:w-2/3 md:ml-6">
            <h2 className="text-2xl font-semibold text-gray-800">Hi, I'm Shreyash Rajurkar</h2>
            <p className="mt-4 text-gray-700">
            Hi! I'm a passionate web developer currently in my third year at IIIT Nagpur, pursuing a BTech degree with the class of 2026. My journey in the tech world has led me to work on various exciting projects, and I've developed a deep love for Data Structures and Algorithms (DSA) as well as Competitive Programming (CP).
            </p>
            <p className="mt-4 text-gray-700">
            I'm currently honing my skills in the MERN stack, and I'm always eager to learn more and take on new challenges. 
            </p>
          </div>
        </div>

        {/* Portfolio Link */}
        <div className="text-center mt-8">
          
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
