import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { projectArray } from '@/components/Data';

export const metadata = {
  title: 'Portfolio - Projects',
  description: 'The projects page of my portfolio.',
}

export default function Projects() {
  return (
    <div>Projects
      <ProjectCard projects={projectArray}/>
    </div>
  );
}
