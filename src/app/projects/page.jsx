import ProjectCard from '@/components/ProjectCard/ProjectCard';
import Introduction from '@/components/Introduction/Introduction';
import { projectArray } from '@/components/Data';

export const metadata = {
  title: 'Portfolio - Projects',
  description: 'The projects page of my portfolio.',
}

export default function Projects() {
  return (
    <div className="pt-6 px-36 pb-16 flex flex-col gap-6">
      <div className="w-[672px] h-[248px] flex flex-col gap-6">
        <h1 className="font-bold text-zinc-800 dark:text-zinc-100 text-5xl leading-12">
          Things I&apos;ve made trying to put my dent in the universe.
        </h1>
        <p className="text-zinc-600 dark:text-zinc400 leading-7">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..
        </p>
      </div>
      <ProjectCard projects={projectArray}/>
    </div>
  );
}
