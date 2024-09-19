"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-16"
  >
    <h2 className="text-3xl font-semibold mb-6 text-blue-600">{title}</h2>
    {children}
  </motion.section>
);

export const AnimatedHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.header
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex items-center justify-between mb-16"
  >
    {children}
  </motion.header>
);

export const AnimatedFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.footer
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mt-16 p-6 bg-blue-600 text-white rounded-lg"
  >
    {children}
  </motion.footer>
);

export const AnimatedFloatingButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div 
    className="fixed bottom-4 right-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1 }}
  >
    {children}
  </motion.div>
);