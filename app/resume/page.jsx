"use client";

import React from 'react';
import { 
  FaHtml5, 
  FaCss3Alt,  
  FaPython,
  FaDatabase
} from "react-icons/fa";
import { SiMysql, SiPostgresql, SiDotnet, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About Me",
  description: "I am a full stack developer with a passion for building APIs using Next.js, Prisma Client and ASP.NET and managing Database using PostgreSQL and Microsoft SQL Server",
  info:[
    {
      fieldName: "Name",
      fieldValue: "D.V.Sai Nithin Guptha",
    },
    {
      fieldName: "Gender",
      fieldValue: "Male",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 7396651028",
    },
    {
      fieldName: "Email",
      fieldValue: "sainithinguptha@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Languages",
      fieldValue: "Telugu & English",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "Sai Nithin",
    },
    {
      fieldName: "Work from Office/ Work from Home",
      fieldValue: "Available",
    }
  ]
}

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "I Skilled in writing APIs using ASP.NET, Next.js and have solid skills in database management and SQL servers. I am also good in various programming languages and technologies.",
  items : [
    {
      company : "Green Tech Industries",
      position : "Software Developer",
      duration : "June 2024 - Present",
    },
    
    {
      company : "Green Tech Industries ",
      position : "ASP.NET Inten",
      duration : "Jan 2024 - June 2024",
    },
    
  ]
}

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "I Skilled in writing APIs using ASP.NET, Next.js and have solid skills in database management and SQL servers. I am also good in various programming languages and technologies.",
  items : [
    {
      institute : "VFSTR, Guntur,",
      degree : "Computer Science Engineering",
      duration : "Nov 2020 - May 2024",
    },
    {
      institute : "Xperts Junior College, Guntur",
      degree : "Intermediate (MPC)",
      duration : "June 2018 - June 2020",
    },
    {
      institute : "VEMHS, Guntur",
      degree : "X class",
      duration : "June 2015 - May 2018",
    },
  ]
}

const skills = {
  title: "My Skills",
  description: "I skilled in writing APIs using ASP.NET, Next.js and have solid skills in database management and SQL servers. I am also proficient in various programming languages and technologies.",
  skillList : [
    {
      icon : <FaHtml5 />,
      name : "HTML"
    },
    {
      icon : <FaCss3Alt />,
      name : "CSS"
    },
    {
      icon : <SiMysql />,
      name : "MySQL"
    },
    {
      icon : <SiPostgresql />,
      name : "PostgreSQL"
    },
    {
      icon : <FaDatabase />,
      name : "SQL Server"
    },
    {
      icon : <SiNextdotjs />,
      name : "Next.js"
    },
    {
      icon : <SiDotnet />,
      name : "ASP.NET"
    },
    {
      icon : <FaPython />,
      name : "Python"
    },
  ]
}
const Resume = () => {
  const playClickSound = () => {
    const audio = new Audio("/assets/click2.mp3");
    audio.play();
  };

  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease : "easeIn"},
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience" onClick={playClickSound}>Experience</TabsTrigger>
            <TabsTrigger value="education" onClick={playClickSound}>Education</TabsTrigger>
            <TabsTrigger value="skills" onClick={playClickSound}>Skills</TabsTrigger>
            <TabsTrigger value="about" onClick={playClickSound}>About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institute}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index)=>{
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-white">{item.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume;
