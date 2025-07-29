
// src/app/page.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar';
import { Badge } from '@/components/ui/badge';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ExternalLink, 
  TrendingUp, 
  BarChart3, 
  Brain,
  Award,
  MapPin,
  Calendar,
  BookMarked,
  Code,
  BookOpen,
  Car,
  Bot,
  Factory,
  Leaf,
  BatteryCharging,
  Milestone,
  Rocket,
  File,
  Briefcase,
  Handshake,
  School,
  Video
} from 'lucide-react';
import { projects, ProjectData } from '@/data/projects';
import ProjectDetail from '@/components/ProjectDetail';
import IndProjectDetail from '@/components/IndProjectDetails';
import { indprojects, IndProjectData } from '@/data/industrual_project';
import { experiences, experiencesData } from '@/data/experiences';
import ExperienceDetail from '@/components/ExperienceDetails';

import Link from 'next/link';

const iconMap = {
  TrendingUp: TrendingUp,
  BarChart3: BarChart3,
  Brain: Brain,
  Car: Car,
  Bot: Bot,
  Factory:Factory,
  Leaf: Leaf,
  BatteryCharging: BatteryCharging,
  Rocket: Rocket,
  School: School,
  Milestone: Milestone,
  Video: Video
};


const sectionIconMap = {
  introduction: Handshake,
  projects: Rocket,
  indprojects : Factory,
  resume: File
};


export default function Home() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [isMounted, setIsMounted] = useState(false);

  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [selectedIndProject, setSelectedIndProject] = useState<IndProjectData | null>(null);
  const [selectedexperience, setSelectedexperience] = useState<experiencesData | null>(null);

  
  const introductionRef = useRef<HTMLDivElement>(null);

  const projectsRef = useRef<HTMLDivElement>(null);
  const industrualprojectsRef = useRef<HTMLDivElement>(null);
  const experiencesRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);

  // Handle hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>, sectionName: string) => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
    setActiveSection(sectionName);
  };

  // Intersection Observer for active section tracking
  useEffect(() => {
    if (!isMounted) return;
    
    const observers: IntersectionObserver[] = [];
    const sections = [
      { ref: introductionRef, name: 'introduction' },
      { ref: projectsRef, name: 'projects' },
      {ref: industrualprojectsRef, name: 'industrual projects'},
      {ref: experiencesRef, name: 'experiences'},
      { ref: resumeRef, name: 'resume' }
    ];

    sections.forEach(({ ref, name }) => {
      if (ref.current) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(name);
            }
          },
          { threshold: 0.3 }
        );
        observer.observe(ref.current);
        observers.push(observer);
      }
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, [isMounted]);

  const handleProjectClick = (project: ProjectData) => {
    setSelectedProject(project);
  };
  
  const handleBackToProjects = () => {
    setSelectedProject(null);
  };
  
  const handleIndProjectClick = (project: IndProjectData) => {
    setSelectedIndProject(project);
  };
  
  const handleBackToIndProjects = () => {
    setSelectedIndProject(null);
  };

  const handleexperienceClick = (experience: experiencesData) => {
    setSelectedexperience(experience);
  };
  
  const handleBackToexperience = () => {
    setSelectedexperience(null);
  };

  // Don't render until hydrated to prevent hydration mismatches
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-[hsl(var(--sidebar-primary-foreground))] flex items-center justify-center">
        <div className="text-lg text-slate-600">Loading...</div>
      </div>
    );
  }

  const skills = ['Python', 'MATLAB', 'C++', 'Machine Learning', 'Deep Learning', 'Natural Language Processing',
    'Computer Vision', 'SQL', 'Reinforcement Learning', 'Large Language Models', 
    'AI Agents', 'AWS Lambda', 'FastAPI']
   ;

  const achievements = [
    { icon: School , text: "CentraleSupélec", color: "text-[hsl(var(--brand-primary))]" },
    { icon: BookMarked, text: "Artificial Intelligence Engineer ", color: "text-[hsl(var(--brand-sand))]" },
    { icon: Award, text: "7th Place - Morocco's National CNC Exam", color: "text-[hsl(var(--brand-coral))]" }
  ];

  return (
    <>
      <Sidebar className="border border-[hsl(var(--brand-primary))] bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
        <SidebarHeader className="border-b border-slate-200 bg-gradient-to-r from-[hsl(192,100%,28%)] to-[hsl(192,64%,80%)]">
          <div className="p-4">
            <div className="mt-2">
            <h2 className="text-xl font-bold text-[hsl(var(--sidebar-primary-foreground))]">Oumaima Chater</h2>

            <p className="text-slate-100 text-sm">AI Engineer</p>


            </div>
          </div>
        </SidebarHeader>
        <SidebarContent className="p-4">
        <SidebarMenu>
  {[
    { ref: introductionRef, name: 'introduction', label: 'Introduction', icon: Handshake },
    { ref: experiencesRef, name: 'experiences', label: 'Experiences', icon: Briefcase },
    { ref: projectsRef, name: 'projects', label: 'Projects', icon: Rocket },
    { ref: industrualprojectsRef, name: 'industrial projects', label: 'Industrial Projects', icon: Factory },
    { ref: resumeRef, name: 'resume', label: 'Resume & Documents', icon: File }
  ].map(({ ref, name, label, icon: Icon }) => (
    <SidebarMenuItem key={name}>
      <SidebarMenuButton
        onClick={() => scrollToSection(ref, name)}
        className={`w-full justify-start transition-all duration-200 ${
          activeSection === name 
            ? 'bg-[#D3ECF1] text-[#004B5A] font-semibold border-r-2 border-[#007A8E]' 
            : 'hover:bg-slate-100'
        }`}
        disabled={!!selectedProject || !!selectedIndProject|| !!selectedexperience}
      >
        {Icon && <Icon className="mr-2 h-4 w-4 text-[hsl(var(--brand-coral))]" />}
        {label}
      </SidebarMenuButton>
    </SidebarMenuItem>
  ))}
</SidebarMenu>

          
          <div className="mt-8 pt-4 border-t border-slate-200">
            <div className="flex justify-center space-x-3">
              <Button size="sm" variant="ghost" className="p-2" asChild>
                <a href="https://github.com/Ouma487" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button size="sm" variant="ghost" className="p-2" asChild>
                <a href="https://www.linkedin.com/in/oumaima-chater/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button size="sm" variant="ghost" className="p-2" asChild>
                <a href="mailto:chtr.oumaima@gmail.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </SidebarContent>
      </Sidebar>
      
      <SidebarInset className="border-r border-slate-200 bg-white/80 backdrop-blur-sm">

      <header className="sticky top-0 z-50 bg-[#fafafa] border-b border-[hsl(var(--brand-primary))]">

          <div className="flex items-center justify-between p-4">
            <SidebarTrigger className="text-slate-600 hover:bg-slate-100" /> 
            <div className="text-sm text-slate-600">
            </div>
          </div>
        </header>

        {selectedProject ? (
    <ProjectDetail project={selectedProject} onBack={handleBackToProjects} />
    ) : selectedIndProject ? (
      <IndProjectDetail indproject={selectedIndProject} onBack={handleBackToIndProjects} />
    ) : selectedexperience ? (
      <ExperienceDetail experience={selectedexperience} onBack={handleBackToexperience} />
    ) : (
    <div className="container mx-auto p-6">
            {/* Introduction Section */}
            <section 
              className="mb-12" 
              ref={introductionRef}
              id="introduction"
            >
              <Card className="shadow-2xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] bg-gradient-to-r from-[#fafafa] to-[#fafafa] rounded-xl transition duration-300">

                <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-[#007A8E] to-[#A4D7E1] bg-clip-text text-transparent">
                  About Me
                </CardTitle>

                  <CardDescription className="text-lg text-slate-600">
                    Artificial Intelligence Enginneer & Data Scientist
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 flex justify-center items-center">
                      <div className="relative">
                        <div className="w-56 h-56 rounded-full bg-gradient-to-r from-[#D9BF77] to-[#F2C94C] p-1 shadow-lg">
                           <img
                            src="/images/headshot.jpg"
                            alt="Oumaima Chater"
                            className="w-full h-full rounded-full object-cover"
                          />
                        </div>

                      </div>
                    </div>
                    
                    <div className="lg:col-span-2 space-y-6">
                      <p className="text-lg text-slate-700 leading-relaxed">
                      Driven AI Engineer and data science enthusiast with a solid foundation from CentraleSupélec. I bring hands-on experience in applied machine learning, predictive modeling, and AI strategy across industries. Passionate about translating complex technical challenges into scalable solutions using tools like Python, TensorFlow, and advanced statistical modeling.
                      </p>
                      
                      <div className="space-y-3">
                        {achievements.map(({ icon: Icon, text, color }, index) => (
                          <div
                          key={index}
                          className="flex items-center space-x-3 p-3 bg-[#fafafa] rounded-lg border border-[hsl(var(--brand-sand))] shadow-sm hover:shadow-md transition-shadow"
                        >
                        
                            <Icon className={`h-5 w-5 ${color}`} />
                            <span className="text-slate-700">{text}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-3">Core Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {skills.map((skill, index) => (
                            <Badge 
                              key={index} 
                              variant="secondary" 
                              className="bg-[hsl(var(--brand-primary))] text-[hsl(var(--background))] hover:bg-[hsl(var(--brand-secondary))] transition-colors cursor-default"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>


            {/*experiences section*/}
            <section 
  className="mb-12" 
  ref={experiencesRef}
  id="experiences"
>
  <div className="flex items-center space-x-3 mb-6">
    <div className="p-2 bg-[hsl(var(--brand-secondary))] rounded-lg shadow-sm">
      <Briefcase className="h-6 w-6 text-[hsl(var(--brand-primary))]" />
    </div>
    <h2 className="text-3xl font-bold text-slate-800">Professional Experience</h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {experiences.map((experience, index) => {
      const IconComponent = iconMap[experience.icon as keyof typeof iconMap] || Code;
      return (
        <Card 
          key={index} 
          className="h-full flex flex-col justify-between group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg overflow-hidden"
        >
          <div className={`h-2 bg-gradient-to-r ${experience.gradient}`} />

          <div className="flex-1 flex flex-col justify-between p-4">
            {/* Icon only (no logo) */}
<div className="flex items-start justify-between mb-3">
  <div className={`p-3 rounded-lg bg-gradient-to-r ${experience.gradient} bg-opacity-20 shadow-inner`}>
    <IconComponent className="h-6 w-6 text-slate-700" />
  </div>
</div>



            {/* Title + subtitle */}
            <div className="mb-2">
              <h3 className="text-lg font-semibold text-slate-800 group-hover:text-[hsl(var(--brand-primary))] transition-colors">
                {experience.title}
              </h3>
              <p className="text-sm text-slate-600 font-medium">
                {experience.subtitle}
              </p>
            </div>

            {/* Description, tags, button */}
            <div className="flex-1 flex flex-col justify-between">
              <p className="text-slate-700 text-sm leading-relaxed mb-4 line-clamp-4">
                {experience.description}
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {experience.tags.slice(0, 3).map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {experience.tags.length > 3 && <Badge variant="outline" className="text-xs">...</Badge>}
              </div>

              {/* ✅ View Details button triggers detail view */}
              <button
                onClick={() => handleexperienceClick(experience)}
                className="mt-auto w-full py-2 px-4 border border-slate-200 rounded-md text-center text-sm text-slate-600 group-hover:bg-[hsl(var(--brand-secondary))] group-hover:border-[hsl(var(--brand-primary))] group-hover:text-[hsl(var(--brand-primary))] transition-colors flex items-center justify-center"
              >
                View Details
                <ExternalLink className="ml-2 h-3 w-3" />
              </button>
            </div>
          </div>
        </Card>
      );
    })}
  </div>
</section>




            

            {/* Projects Section */}
            <section 
              className="mb-12" 
              ref={projectsRef}
              id="projects"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-[hsl(var(--brand-secondary))] rounded-lg shadow-sm">
                <Rocket className="h-6 w-6 text-[hsl(var(--brand-primary))]" />

                </div>
                <h2 className="text-3xl font-bold text-slate-800"> Projects</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {projects.map((project, index) => {
                  const IconComponent = iconMap[project.icon as keyof typeof iconMap] || Code;
                  return (
                    <Card 
  key={index} 
  className="h-full flex flex-col justify-between group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg overflow-hidden cursor-pointer"
  onClick={() => handleProjectClick(project)}
>
  <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

  <div className="flex-1 flex flex-col justify-between p-4">
    {/* Icon + ExternalLink (top) */}
    <div className="flex items-start justify-between mb-3">
      <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-20 shadow-inner`}>
        {IconComponent && <IconComponent className="h-6 w-6 text-slate-700" />}
      </div>
      <ExternalLink className="h-4 w-4 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>

    {/* Title + subtitle */}
    <div className="mb-2">
      <h3 className="text-lg font-semibold text-slate-800 group-hover:text-[hsl(var(--brand-primary))] transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-slate-600 font-medium">
        {project.subtitle}
      </p>
    </div>

    {/* Description, tags, button */}
    <div className="flex-1 flex flex-col justify-between">
      <p className="text-slate-700 text-sm leading-relaxed mb-4 line-clamp-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1 mb-4">
        {project.tags.slice(0, 3).map((tag, tagIndex) => (
          <Badge key={tagIndex} variant="outline" className="text-xs">
            {tag}
          </Badge>
        ))}
        {project.tags.length > 3 && <Badge variant="outline" className="text-xs">...</Badge>}
      </div>

      <div className="mt-auto w-full py-2 px-4 border border-slate-200 rounded-md text-center text-sm text-slate-600 group-hover:bg-[hsl(var(--brand-secondary))] group-hover:border-[hsl(var(--brand-primary))] group-hover:text-[hsl(var(--brand-primary))] transition-colors flex items-center justify-center">
        View Details
        <ExternalLink className="ml-2 h-3 w-3" />
      </div>
    </div>
  </div>
</Card>


                  );
                })}
              </div>
            </section>


            {/* Industrual Projects Section */}
            <section 
              className="mb-12" 
              ref={industrualprojectsRef}
              id="industrual projects"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-[hsl(var(--brand-secondary))] rounded-lg shadow-sm">
                <Factory className="h-6 w-6 text-[hsl(var(--brand-primary))]" />

                </div>
                <h2 className="text-3xl font-bold text-slate-800">Industrual Projects</h2>
              </div>
              
              <div className="w-full">

                {indprojects.map((indproject, index) => {
                  const IconComponent = iconMap[indproject.icon as keyof typeof iconMap] || Code;
                  return (
                    <Card 
  key={index} 
  className="h-full flex flex-col justify-between group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg overflow-hidden cursor-pointer"
  onClick={() => handleIndProjectClick(indproject)}
>
  <div className={`h-2 bg-gradient-to-r ${indproject.gradient}`} />

  <div className="flex-1 flex flex-col justify-between p-4">
    {/* Icon + ExternalLink (top) */}
    <div className="flex items-start justify-between mb-3">
    <div className="p-3 rounded-lg bg-gradient-to-r from-[hsl(14_77%_90%)] to-transparent shadow-inner">
        {IconComponent && <IconComponent className="h-6 w-6 text-slate-700" />}
      </div>
      <ExternalLink className="h-4 w-4 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>

    {/* Title + subtitle */}
    <div className="mb-2">
      <h3 className="text-lg font-semibold text-slate-800 group-hover:text-[hsl(var(--brand-primary))] transition-colors">
        {indproject.title}
      </h3>
      <p className="text-sm text-slate-600 font-medium">
        {indproject.subtitle}
      </p>
    </div>

    {/* Description, tags, button */}
    <div className="flex-1 flex flex-col justify-between">
      <p className="text-slate-700 text-sm leading-relaxed mb-4 line-clamp-4">
        {indproject.description}
      </p>

      <div className="flex flex-wrap gap-1 mb-4">
        {indproject.tags.slice(0, 3).map((tag, tagIndex) => (
          <Badge key={tagIndex} variant="outline" className="text-xs">
            {tag}
          </Badge>
        ))}
        {indproject.tags.length > 3 && <Badge variant="outline" className="text-xs">...</Badge>}
      </div>

      <div className="mt-auto w-full py-2 px-4 border border-slate-200 rounded-md text-center text-sm text-slate-600 group-hover:bg-[hsl(var(--brand-secondary))] group-hover:border-bg-[hsl(var(--brand-primary))] group-hover:text-[hsl(var(--brand-primary))] transition-colors flex items-center justify-center">
        View Details
        <ExternalLink className="ml-2 h-3 w-3" />
      </div>
    </div>
  </div>
</Card>


                  );
                })}
              </div>
            </section>


            

          {/* Resume Section */}
            <section 
              className="mb-8" 
              ref={resumeRef}
              id="resume"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-[hsl(var(--brand-secondary))] rounded-lg shadow-sm">
                  <BookOpen className="h-6 w-6 text-[hsl(var(--brand-primary))]" />
                </div>
                <h2 className="text-3xl font-bold text-slate-800">Resume & Documents</h2>
              </div>
              
              <Card className="border-0 shadow-xl">
                <div className="h-2 bg-gradient-to-r from-[hsl(var(--brand-anthracite))] to-transparent" />
                <CardHeader>
                  <CardTitle className="text-xl">Professional Documents</CardTitle>
                  <CardDescription>
                    Download my resume and other relevant professional materials.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button 
  className="bg-[hsl(var(--brand-anthracite))] text-white shadow hover:shadow-md hover:brightness-90"
  onClick={() => {
    const link = document.createElement('a');
    link.href = '/Chater_CV (6).pdf';
    link.download = 'Oumaima_Chater_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
>
  <Download className="mr-2 h-4 w-4" />
  Download Resume (PDF)
</Button>

                    <Button 
                      variant="outline" 
                      className="bg-white text-black hover:text-black hover:bg-white shadow hover:shadow-md"
                      asChild
                    >
                      <a href="mailto:chtr.oumaima@gmail.com">
                        <Mail className="mr-2 h-4 w-4" />
                        Contact Me
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        )}
      </SidebarInset>
    </>
  );
}
