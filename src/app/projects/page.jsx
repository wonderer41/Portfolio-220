import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { projectList } from "@/components/Data";

export const metadata = {
  title: "Portfolio - Projects",
  description: "The projects page of my portfolio.",
};

export default function Projects() {
  return (
    <div className="flex flex-col pt-6 px-6 lg:px-36 pb-16 gap-6">
      <div className="flx flex-col gap-6">
        <h1 className="font-bold text-zinc-800 dark:text-zinc-100 text-5xl leading-12">
          I&apos;ve trying to put these ones together in my universe.
        </h1>
        <p className="text-zinc-600 dark:text-zinc400 leading-7">
          Learning is a continuous journey of discovery and growth, fueled by curiosity and the desire to understand
          more about the world and ourselves. It involves stepping outside of comfort zones, challenging preconceived
          ideas, and embracing both successes and setbacks as valuable experiences. Through learning, we gain new
          perspectives, build skills, and develop resilience. Each lesson, whether big or small, contributes to a
          broader understanding and empowers us to adapt, innovate, and make meaningful contributions in our personal
          and professional lives.
        </p>
      </div>
      <ProjectCard projects={projectList} />
    </div>
  );
}
