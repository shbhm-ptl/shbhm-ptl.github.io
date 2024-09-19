import React from 'react';
import { Camera } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AnimatedSection, AnimatedHeader, AnimatedFooter, AnimatedFloatingButton } from '@/components/ui/AnimatedComponents';
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ScrollToTopButton, SocialButtons } from '@/components/ui/InteractiveElements';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <AnimatedSection title={title}>
    {children}
  </AnimatedSection>
);

const ExperienceItem: React.FC<{
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
}> = ({ company, position, duration, responsibilities }) => (
  <Card className="mb-6">
    <CardContent className="pt-6">
      <h3 className="font-semibold">{company}</h3>
      <p className="font-bold text-blue-600">{position}</p>
      <p className="text-sm text-gray-600">{duration}</p>
      <ul className="mt-2 list-disc list-inside">
        {responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const PublicationItem: React.FC<{
  title: string;
  authors: string;
  journal: string;
  year: string;
}> = ({ title, authors, journal, year }) => (
  <Card className="mb-4">
    <CardContent className="pt-6">
      <p className="font-bold">{title}</p>
      <p className="text-sm text-gray-600">{authors}</p>
      <p className="text-sm italic">{journal}, {year}</p>
    </CardContent>
  </Card>
);

const ProjectItem: React.FC<{
  title: string;
  technologies: string[];
  description: string;
}> = ({ title, technologies, description }) => (
  <Card className="mb-6">
    <CardContent className="pt-6">
      <h3 className="font-semibold">{title}</h3>
      <div className="my-2">
        {technologies.map((tech, index) => (
          <Badge key={index} variant="secondary" className="mr-2 mb-2">{tech}</Badge>
        ))}
      </div>
      <p>{description}</p>
    </CardContent>
  </Card>
);

const EducationItem: React.FC<{
  degree: string;
  institution: string;
  duration: string;
  coursework?: string;
}> = ({ degree, institution, duration, coursework }) => (
  <Card className="mb-4">
    <CardContent className="pt-6">
      <h3 className="font-semibold">{degree}</h3>
      <p className="font-bold">{institution}</p>
      <p className="text-sm text-gray-600">{duration}</p>
      {coursework && <p className="mt-2">Coursework: {coursework}</p>}
    </CardContent>
  </Card>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="max-w-4xl mx-auto p-8">
        <AnimatedHeader>
          <div>
            <h1 className="text-5xl font-bold mb-2 text-blue-800">Shubham Patil</h1>
            <p className="text-xl text-blue-600">Machine Learning Scientist - Ultrasound AI</p>
          </div>
          <Avatar className="w-32 h-32">
            <AvatarImage src="/path-to-your-image.jpg" alt="Shubham Patil" />
            <AvatarFallback><Camera size={64} className="text-gray-400" /></AvatarFallback>
          </Avatar>
        </AnimatedHeader>

        <main>
          <Section title="About Me">
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg">
                  I&apos;m an Machine Learning Scientist specializing in Ultrasound AI at Philips Research, Cambridge, MA. 
                  My work focuses on developing artificial intelligence-based algorithms and models for medical imaging, 
                  particularly in lung ultrasound.
                </p>
              </CardContent>
            </Card>
          </Section>

          <Section title="Experience">
            <ExperienceItem
              company="Philips Research, Cambridge, MA"
              position="Machine Learning Scientist - Ultrasound AI"
              duration="June 2020 - Present"
              responsibilities={[
                "Collaborated on lung ultrasound AI projects, resulting in 5 publications, an FDA 510(k) presubmission, and a patent application.",
                "Developed AI-based algorithms for detecting pleural line abnormalities, lung consolidation, and pleural effusion.",
                "Optimized data management and machine learning workflows."
              ]}
            />
          </Section>

          <Section title="Publications">
            <ScrollArea className="h-[400px] w-full rounded-md border p-4">
              <PublicationItem
                title="Artificial Intelligence Model to Identify Pleural Line Abnormalities in Lung Ultrasound"
                authors="A Chen, B Hicks, S Patil, et al"
                journal="Annals of Emergency Medicine"
                year="2023"
              />
              <PublicationItem
                title="Weakly Semi-Supervised Detector-Based Video Classification with Temporal Context for Lung Ultrasound"
                authors="G Li, L Chen, M Zahiri, N Balaraju, S Patil, et al"
                journal="International Conference on Computer Vision (ICCV) Workshop on Computer Vision for Automated Medical Diagnosis"
                year="2023"
              />
            </ScrollArea>
          </Section>

          <Section title="Projects">
            <ProjectItem
              title="Depth Estimation from Stereo Images"
              technologies={["Python", "PyTorch"]}
              description="Achieved a 2.78% improvement in three-pixel validation error on the KITTI stereo image dataset. Incorporated global context through spatial pyramid pooling and enhanced the receptive field using dilated convolutions."
            />
          </Section>

          <Section title="Education">
            <EducationItem
              degree="Master of Science, Computer Science"
              institution="Rochester Institute of Technology, New York"
              duration="August 2017 - May 2020"
              coursework="Statistical Machine Learning, Deep Learning, Computer Vision, Image Processing, Algorithms, Mathematics for Deep Learning"
            />
            <EducationItem
              degree="Bachelor of Engineering, Information Technology"
              institution="University of Mumbai, India"
              duration="August 2012 - May 2016"
            />
          </Section>

          <Section title="Skills">
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Programming</h3>
                    <p>Python, C++, MATLAB, PostgreSQL, MongoDB</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Framework/Tools</h3>
                    <p>PyTorch, OpenCV, scikit-learn, TensorFlow, Keras, pandas, SciPy, NumPy, Git, Shell</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Section>
        </main>

        <AnimatedFooter>
          <SocialButtons />
          <p className="text-center">&copy; 2024 Shubham Patil. All rights reserved.</p>
        </AnimatedFooter>

        <AnimatedFloatingButton>
          <ScrollToTopButton />
        </AnimatedFloatingButton>
      </div>
    </div>
  );
}