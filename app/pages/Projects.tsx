'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { projects } from '../constants/projects.data';

type ProjectType = 'all' | 'personal' | 'professional';

export function Projects() {
  const [filter, setFilter] = useState<ProjectType>('all');

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    return project.type === filter;
  });

  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-xl text-gray-300 mb-8">
          A selection of my professional work and personal projects.
        </p>
        <div className="flex gap-2 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'all'
                ? 'bg-primary text-black'
                : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('professional')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'professional'
                ? 'bg-blue-500 text-black'
                : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
            }`}
          >
            Professional
          </button>
          <button
            onClick={() => setFilter('personal')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'personal'
                ? 'bg-primary text-black'
                : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
            }`}
          >
            Personal
          </button>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {filteredProjects.map(project => (
            <article
              key={project.title}
              className="group bg-zinc-900 rounded-lg overflow-hidden border border-white/5 hover:border-primary/20 transition-colors flex flex-col"
            >
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="object-contain bg-zinc-950"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex items-center gap-1.5 px-2 py-1 text-xs rounded-full whitespace-nowrap ${
                        project.type === 'professional'
                          ? 'bg-blue-500/10 text-blue-400'
                          : 'bg-primary/10 text-primary'
                      }`}
                    >
                      {project.type === 'professional' ? (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-3.5 h-3.5"
                          >
                            <path d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                          </svg>
                          Professional
                        </>
                      ) : (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-3.5 h-3.5"
                          >
                            <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                          </svg>
                          Personal
                        </>
                      )}
                    </span>
                    {project.type === 'professional' && (
                      <span className="flex items-center gap-1.5 px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400">
                        NFTStudios
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{project.longDescription}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-3">
                  <Link
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary text-black font-medium rounded hover:bg-primary/90 transition-colors"
                  >
                    View Project
                  </Link>
                  {project.type === 'personal' && project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-background border border-primary/20 text-primary font-medium rounded hover:bg-primary/10 transition-colors"
                    >
                      View Code
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
