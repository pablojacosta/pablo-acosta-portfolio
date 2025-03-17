import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../constants/projects.data';

export const FeaturedProjects = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects
            .filter(project => project.isFeatured)
            .map(project => (
              <Link
                key={project.title}
                href={project.link}
                className="group block bg-white/5 rounded-lg overflow-hidden 
                hover:bg-white/10 transition-colors"
              >
                <div className="relative h-48 sm:h-[35rem]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-white/5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};
