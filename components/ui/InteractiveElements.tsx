"use client";

import React from 'react';
import { Button } from "@/components/ui/button"
import { ChevronDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

export const ScrollToTopButton = () => (
  <Button 
    variant="outline" 
    size="sm"
    onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
  >
    <ChevronDown size={24} />
  </Button>
);

export const SocialButtons = () => (
  <div className="flex justify-center space-x-4 mb-4">
    <Button variant="ghost" size="sm" className="p-2 hover:bg-blue-700 transition-colors duration-200">
      <a href="mailto:shubham.patil@mail.rit.edu"><Mail size={24} /></a>
    </Button>
    <Button variant="ghost" size="sm" className="p-2 hover:bg-blue-700 transition-colors duration-200">
      <a href="tel:585-957-0929"><Phone size={24} /></a>
    </Button>
    <Button variant="ghost" size="sm" className="p-2 hover:bg-blue-700 transition-colors duration-200">
      <a href="https://www.linkedin.com/in/patilshubham"><Linkedin size={24} /></a>
    </Button>
    <Button variant="ghost" size="sm" className="p-2 hover:bg-blue-700 transition-colors duration-200">
      <a href="https://github.com/yourgithub"><Github size={24} /></a>
    </Button>
  </div>
);