'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ExternalLink } from 'lucide-react';

interface ExperienceData {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  details: string[];
  tags: string[];
  gradient: string;
  icon: any;
  more?: {
    companyIntro?: string;
    mission?: string;
    challenges?: string[];
    website?: string;
  };
}

interface ExperienceDetailProps {
  experience: ExperienceData;
  onBack: () => void;
}

export default function ExperienceDetail({ experience, onBack }: ExperienceDetailProps) {
  const IconComponent = experience.icon;

  return (
    <div className="w-full">
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-3 py-3 flex items-center space-x-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="hover:bg-slate-100 text-slate-700 whitespace-nowrap"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Experience
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Card className="border-0 shadow-xl bg-gradient-to-r from-white to-blue-50/50 overflow-hidden mb-8">
          <div className={`h-2 bg-gradient-to-r ${experience.gradient}`} />
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${experience.gradient} bg-opacity-20 shadow-inner`}>
                <IconComponent className="h-8 w-8 text-slate-700" />
              </div>
              <div>
                <CardTitle className="text-3xl font-bold text-slate-800">
                  {experience.title} @ {experience.company}
                </CardTitle>
                <CardDescription className="text-lg text-slate-600">
                  {experience.period} · {experience.location}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">


            {experience.more?.companyIntro && (
              <div>
                <h4 className="text-slate-800 font-semibold mb-2">About the Company</h4>
                <p className="text-slate-700">{experience.more.companyIntro}</p>
              </div>
            )}

            {experience.more?.mission && (
              <div>
                <h4 className="text-slate-800 font-semibold mb-2">Mission</h4>
                <p className="text-slate-700">{experience.more.mission}</p>
              </div>
            )}

            {experience.more?.challenges && experience.more.challenges.length > 0 && (
              <div>
                <h4 className="text-slate-800 font-semibold mb-2">Key Challenges</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  {experience.more.challenges.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {experience.details.length > 0 && (
              <div>
                <h4 className="text-slate-800 font-semibold mb-2">Highlights</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  {experience.details.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-2 mt-4">
              {experience.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>

            {experience.more?.website && (
              <div className="mt-6">
                <a 
                  href={experience.more.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[hsl(var(--brand-primary))] hover:underline"
                >
                  Visit Company Website <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
