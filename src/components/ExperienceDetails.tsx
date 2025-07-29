'use client';

import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  ExternalLink,
  TrendingUp,
  Brain,
  BarChart3,
  Lightbulb,
  Code2,
  LineChart,
  Bot,
  Car,
  Video
} from 'lucide-react';
import { experiencesData } from '@/data/experiences';

interface ExperienceDetailProps {
  experience: experiencesData;
  onBack: () => void;
}

const iconMap = {
  TrendingUp,
  BarChart3,
  Brain,
  Bot,
  Car,
  Lightbulb,
  Code2,
  LineChart,
  Video
};

export default function ExperienceDetail({ experience, onBack }: ExperienceDetailProps) {
  const IconComponent = iconMap[experience.icon as keyof typeof iconMap] || Code2;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [experience]);

  return (
    <div className="w-full">
      {/* Sticky Header */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 py-2 sm:px-6">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="hover:bg-slate-100 text-slate-700 whitespace-nowrap"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Experiences
            </Button>
            <div className="h-4 w-px bg-slate-300 shrink-0" />
            <div className="flex items-center space-x-2 sm:space-x-3 overflow-hidden">
              <div className={`p-1 rounded-lg bg-gradient-to-r ${experience.gradient} bg-opacity-20 shadow-inner shrink-0`}>
                <IconComponent className="h-4 w-4 text-slate-700" />
              </div>
              <div className="overflow-hidden">
                <h1 className="text-sm font-semibold sm:text-base text-slate-800 truncate">
                  {experience.title}
                </h1>
                <p className="text-xs text-slate-600 whitespace-normal break-words">
                  {experience.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <Card className="border-0 shadow-xl bg-gradient-to-r from-white to-blue-50/50 overflow-hidden mb-10 w-full">
          <div className={`h-2 bg-gradient-to-r ${experience.gradient} rounded-t-xl`} />
          <CardHeader>
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 mb-4 w-full">
                <div className={`flex-shrink-0 p-3 rounded-lg bg-gradient-to-r ${experience.gradient} bg-opacity-20 shadow-inner w-fit h-fit`}>
  {IconComponent && <IconComponent className="w-8 h-8 text-slate-700" />}
</div>

                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-2xl sm:text-3xl font-bold text-slate-800 leading-tight mb-1">
                      {experience.title}
                    </CardTitle>
                    <CardDescription className="text-base sm:text-lg text-slate-600 leading-snug whitespace-normal break-words">
                      {experience.subtitle}
                    </CardDescription>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {experience.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-5xl">
                  {experience.description}
                </p>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Main + Sidebar Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-8">
          {/* Main Content */}
          <div className="space-y-8 w-full">
            <Card className="border-0 shadow-lg w-full">
              <CardHeader>
                <CardTitle className="text-xl">Experience Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="prose prose-slate max-w-none">
                  {experience.detailedDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-slate-700 leading-relaxed mb-4 text-base lg:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {experience.keyFeatures?.length > 0 && (
                  <>
                    <h3 className="text-lg font-semibold text-slate-700">Key Features</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-slate-600">
                      {experience.keyFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </>
                )}

                {experience.technicalDetails?.length > 0 && (
                  <>
                    <h3 className="text-lg font-semibold text-slate-700">Technical Implementation</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-slate-600">
                      {experience.technicalDetails.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}

                {experience.images && experience.images.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-slate-700 mb-3">Visuals</h3>
                    <div className="flex flex-col items-center space-y-6">
                      {experience.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`${experience.title} visual ${index + 1}`}
                          className="rounded-lg shadow-md w-full max-w-[900px] object-contain"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 w-full">
            <Card className="border-0 shadow-lg w-full">
              <CardHeader>
                <CardTitle className="text-lg">Technologies Used</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {experience.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {(experience.logo || experience.companyDescription || experience.companyWebsite) && (
              <Card className="border-0 shadow-lg w-full">
                <CardHeader>
                  <CardTitle className="text-lg">About the Company</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-slate-700">
                  {experience.logo && (
                    <img
                      src={experience.logo}
                      alt={`${experience.title} logo`}
                      className="h-16 object-contain"
                    />
                  )}
                  {experience.companyDescription && <p>{experience.companyDescription}</p>}
                  {experience.companyWebsite && (
                    <a
                      href={experience.companyWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center space-x-1"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Visit Company Website</span>
                    </a>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
