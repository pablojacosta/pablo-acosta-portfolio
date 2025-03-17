import Image from 'next/image';
import Link from 'next/link';

export const About = () => {
  return (
    <section className="px-6 py-24 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-16">Hi!</h2>
      <div className="grid md:grid-cols-[300px,1fr] gap-12">
        <div className="relative w-full aspect-square md:aspect-auto md:h-[300px] rounded-2xl overflow-hidden bg-primary/20 ring-1 ring-primary/20">
          <Image
            src="/images/selfie.webp"
            alt="Profile photo"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-8">
          <p className="text-xl text-gray-300">
            I'm Pablo Acosta, a passionate Full Stack Developer specializing in
            building dynamic, responsive, and high-performance web applications
            that prioritize both user experience and system architecture. My
            goal is to create robust solutions that excel in every aspect - from
            intuitive front-end interfaces to efficient back-end systems.
          </p>
          <p className="text-xl text-gray-300">
            I have extensive experience with modern web technologies including
            React, Next.js, Node.js, and TypeScript, allowing me to build
            complete, scalable applications. My comprehensive full-stack
            expertise enables me to architect and implement solutions that are
            both powerful and maintainable, ensuring seamless integration
            between all system components.
          </p>
          <p className="text-xl text-gray-300">
            I take pride in writing clean, maintainable code and am constantly
            improving my skills with modern frameworks and tools. Some of the
            technologies I'm proficient in include:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div>
              <h3 className="text-sm font-semibold text-primary mb-1">
                Front-End
              </h3>
              <ul className="space-y-0.5 text-sm text-gray-300">
                <li className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  React & Next.js
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  TypeScript
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  SASS & Tailwind
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-primary mb-1">
                State Management
              </h3>
              <ul className="space-y-0.5 text-sm text-gray-300">
                <li className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  Zustand
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  React Context
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-primary mb-1">
                Version Control
              </h3>
              <ul className="space-y-0.5 text-sm text-gray-300">
                <li className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  Git
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  Github
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-primary mb-1">
                Back-End
              </h3>
              <ul className="space-y-0.5 text-sm text-gray-300">
                <li className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  Node.js
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  Express.js
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  MongoDB
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-primary mb-1">
                Testing
              </h3>
              <ul className="space-y-0.5 text-sm text-gray-300">
                <li className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  Jest
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  React Testing Library
                </li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-400 italic">
            Committed to delivering high-quality, end-to-end solutions that
            combine excellent user experience with robust system architecture.
          </p>
          <div className="space-y-6">
            <a
              href="/pablo-jesus-acosta-resume.pdf"
              download
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-lg"
            >
              Download my resume →
            </a>
            <div className="flex gap-6">
              <Link
                href="https://github.com/pablojacosta"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/in/pablo-j-acosta"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
