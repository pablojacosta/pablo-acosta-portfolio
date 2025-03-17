import Image from 'next/image';

export const About = () => {
  return (
    <main className="px-6 pt-32 pb-24 max-w-4xl mx-auto">
      <div className="space-y-16">
        {/* Hero Section */}
        <div className="grid md:grid-cols-[300px,1fr] gap-12 items-start">
          <div className="relative w-full aspect-square md:aspect-auto md:h-[300px] rounded-2xl overflow-hidden bg-primary/20 ring-1 ring-primary/20">
            <Image
              src="/images/selfie.webp"
              alt="Profile photo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">About Me</h1>
            <p className="text-xl text-gray-300">
              As a passionate and versatile Full Stack Developer, I specialize
              in building comprehensive web applications with modern
              technologies like React, Next.js, Node.js, and TypeScript. With a
              strong foundation in both front-end and back-end development, I
              focus on creating seamless, scalable, and performant solutions
              that deliver exceptional user experiences.
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-primary">Experience</h2>
          <p className="text-lg text-gray-300">
            I thrive in fast-paced environments where innovation is key. Over
            the past 3 years, I've developed and maintained full-stack
            applications, working closely with cross-functional teams to deliver
            high-quality, scalable solutions. My experience spans across various
            industries, including blockchain, where I've integrated Web3
            technologies and smart contracts into dApps, showcasing my ability
            to work with both client-side and server-side technologies.
          </p>
        </div>

        {/* Philosophy Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-primary">Philosophy</h2>
          <p className="text-lg text-gray-300">
            I'm always looking to push the boundaries of what's possible with
            full-stack development and to stay ahead of trends in the industry.
            Whether it's crafting pixel-perfect UIs, or optimizing API
            performance, I strive to create web applications that are both
            powerful and user-friendly.
          </p>
        </div>

        {/* Expertise Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-primary">
            What I Bring To The Table
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-start gap-3 p-4 rounded-lg bg-primary/10 ring-1 ring-primary/10">
              <span className="h-1.5 w-2 rounded-full bg-primary mt-2" />
              <span className="text-gray-300">
                Full-stack expertise with modern technologies including React,
                Next.js, Node.js, and TypeScript
              </span>
            </li>
            <li className="flex items-start gap-3 p-4 rounded-lg bg-primary/10 ring-1 ring-primary/10">
              <span className="h-1.5 w-4 rounded-full bg-primary mt-2" />
              <span className="text-gray-300">
                Strong understanding of system architecture, including API
                design, and scalable infrastructure
              </span>
            </li>
            <li className="flex items-start gap-3 p-4 rounded-lg bg-primary/10 ring-1 ring-primary/10">
              <span className="h-1.5 w-4 rounded-full bg-primary mt-2" />
              <span className="text-gray-300">
                A collaborative mindset, having worked in agile teams to deliver
                end-to-end solutions that meet business and technical
                requirements
              </span>
            </li>
            <li className="flex items-start gap-3 p-4 rounded-lg bg-primary/10 ring-1 ring-primary/10">
              <span className="h-1.5 w-3 rounded-full bg-primary mt-2" />
              <span className="text-gray-300">
                A commitment to writing clean, maintainable code and building
                robust, scalable applications from front to back
              </span>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-primary">Let's Connect</h2>
          <p className="text-lg text-gray-300">
            I'm currently seeking opportunities to apply my full-stack expertise
            in a challenging, growth-oriented role where I can continue to
            refine my skills and contribute to building robust and scalable web
            applications. Let's connect and see how I can help bring your next
            web project to life!
          </p>
        </div>
      </div>
    </main>
  );
};
