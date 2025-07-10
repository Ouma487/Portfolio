
// src/components/ProjectDetail.tsx
'use client';

import { useEffect } from 'react'; 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Download, 
  Github, 
  ExternalLink, 
  PlayCircle,
  FileText,
  TrendingUp,
  Brain,
  BarChart3,
  Lightbulb,
  Code2,
  LineChart,
  Bot,
  Car,
  Factory,
  Leaf,
  BatteryCharging
} from 'lucide-react';
import { IndProjectData } from '@/data/industrual_project';

interface IndProjectDetailProps {
  indproject: IndProjectData;
  onBack: () => void;
}

const iconMap = {
  TrendingUp: TrendingUp,
  BarChart3: BarChart3,
  Brain: Brain,
  Bot: Bot,
  Car: Car,
  Lightbulb: Lightbulb,
  Code2: Code2,
  LineChart: LineChart,
  Factory: Factory,
  Leaf: Leaf,
  BatteryCharging: BatteryCharging
};

export default function IndProjectDetail({ indproject, onBack }: IndProjectDetailProps) {

   

    const iconKey = (indproject.icon || "").trim() as keyof typeof iconMap;
    const IconComponent = Object.prototype.hasOwnProperty.call(iconMap, iconKey)
      ? iconMap[iconKey]
      : Leaf;
    
    

  useEffect(() => {
    // Scrolls to top when component mounts or project changes
    window.scrollTo(0, 0); 
  }, [indproject]); // Add project as a dependency

  return (
    <div className="w-full"> 
      {/* Header for ProjectDetail - sticky within its own scroll context */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-3 py-2 sm:px-4 sm:py-3"> {/* Reduced padding */}
          <div className="flex items-center space-x-2 sm:space-x-3"> {/* Reduced spacing */}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onBack}
              className="hover:bg-slate-100 text-slate-700 whitespace-nowrap" // Added whitespace-nowrap to prevent button text wrapping
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Button>
            <div className="h-4 w-px bg-slate-300 shrink-0" /> {/* Added shrink-0 */}
            <div className="flex items-center space-x-2 sm:space-x-3 overflow-hidden"> {/* Added overflow-hidden for title safety */}
              <div className={`p-1 rounded-lg bg-gradient-to-r ${indproject.gradient} bg-opacity-20 shadow-inner shrink-0`}> {/* Reduced padding, added shrink-0 */}
                {IconComponent && <IconComponent className="h-4 w-4 text-slate-700" />} {/* Consistent small icon size */}
              </div>
              <div className="overflow-hidden"> {/* Added overflow-hidden for text safety */}
                <h1 className="text-sm font-semibold sm:text-base text-slate-800 truncate">{indproject.title}</h1> {/* Reduced font size, added truncate */}
                <p className="text-xs text-slate-600 truncate">{indproject.subtitle}</p> {/* Kept small, added truncate */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <Card className="border-0 shadow-xl bg-gradient-to-r from-white to-blue-50/50 overflow-hidden mb-8">
          <div className={`h-2 bg-gradient-to-r ${indproject.gradient}`} />
          <CardHeader>
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${indproject.gradient} bg-opacity-20 shadow-inner`}>
                    {IconComponent && <IconComponent className="h-8 w-8 text-slate-700" />}
                  </div>
                  <div>
                    <CardTitle className="text-3xl font-bold text-slate-800">
                      {indproject.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-slate-600">
                      {indproject.subtitle}
                    </CardDescription>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {indproject.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <p className="text-lg text-slate-700 leading-relaxed">
                  {indproject.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col space-y-3 lg:min-w-[200px] pt-2">
                {indproject.pdfReport && (
                  <Button 
                    className="bg-[hsl(var(--brand-primary))] hover:brightness-90 text-white shadow hover:shadow-md"
                    onClick={() => window.open(indproject.pdfReport, '_blank')}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                  </Button>
                )}
                
                {indproject.codeRepo && (
                  <Button 
                    variant="outline" 
                    onClick={() => window.open(indproject.codeRepo, '_blank')}
                    className="hover:bg-slate-50 shadow hover:shadow-md"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                )}
                
                {indproject.liveDemo && (
                  <Button 
                    variant="outline" 
                    onClick={() => window.open(indproject.liveDemo, '_blank')}
                    className="hover:bg-green-50 border-green-300 text-green-700 shadow hover:shadow-md"
                  >
                    <PlayCircle className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                )}
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Content */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Project Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-slate max-w-none">
                  {indproject.detailedDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-slate-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
                 {indproject.images && indproject.images.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-slate-700 mb-3">Visuals</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {indproject.images.map((image, index) => (
                        <img 
                          key={index} 
                          src={image} 
                          alt={`${indproject.title} visual ${index + 1}`} 
                          data-ai-hint="project image"
                          className="rounded-lg shadow-md object-cover w-full h-auto"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm text-slate-600">
                    {indproject.keyFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Technologies Used</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {indproject.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {indproject.pdfReport && (
                  <Button 
                    variant="outline" 
                    className="w-full justify-start hover:bg-slate-50"
                    onClick={() => window.open(indproject.pdfReport, '_blank')}
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Read Full Report
                  </Button>
                )}
                
                {indproject.codeRepo && (
                  <Button 
                    variant="outline" 
                    className="w-full justify-start hover:bg-slate-50"
                    onClick={() => window.open(indproject.codeRepo, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Button>
                )}
                
                {indproject.liveDemo && (
                  <Button 
                    variant="outline" 
                    className="w-full justify-start hover:bg-green-50 border-green-300 text-green-700"
                    onClick={() => window.open(indproject.liveDemo, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
