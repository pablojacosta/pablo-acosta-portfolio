import { Metadata } from 'next';
import { Projects } from '../pages/Projects';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'A showcase of my recent web development projects, featuring work in React, Next.js, and more.',
};

export default function ProjectsPage() {
  return <Projects />;
}
