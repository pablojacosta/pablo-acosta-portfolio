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
              As a passionate and dynamic Front-End Developer, I specialize in
              building user-centric web applications with modern technologies
              like React, Next.js, and TypeScript. With a strong foundation in
              HTML, CSS, and JavaScript, I focus on creating seamless and
              intuitive user experiences that engage and empower users.
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
            technologies and smart contracts into dApps, but my primary focus
            now is on delivering exceptional front-end solutions.
          </p>
        </div>

        {/* Philosophy Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-primary">Philosophy</h2>
          <p className="text-lg text-gray-300">
            I'm always looking to push the boundaries of what's possible with
            front-end development and to stay ahead of trends in the industry.
            Whether it's crafting pixel-perfect UIs, optimizing performance, or
            ensuring the highest standards of accessibility, I strive to create
            web applications that are both beautiful and functional.
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
                Expertise in modern JavaScript frameworks, particularly React
                and Next.js
              </span>
            </li>
            <li className="flex items-start gap-3 p-4 rounded-lg bg-primary/10 ring-1 ring-primary/10">
              <span className="h-1.5 w-4 rounded-full bg-primary mt-2" />
              <span className="text-gray-300">
                Strong understanding of front-end principles, including
                responsive design, performance optimization, and cross-browser
                compatibility
              </span>
            </li>
            <li className="flex items-start gap-3 p-4 rounded-lg bg-primary/10 ring-1 ring-primary/10">
              <span className="h-1.5 w-4 rounded-full bg-primary mt-2" />
              <span className="text-gray-300">
                A collaborative mindset, having worked in agile teams with
                designers, back-end developers, and product owners to bring
                complex projects to life
              </span>
            </li>
            <li className="flex items-start gap-3 p-4 rounded-lg bg-primary/10 ring-1 ring-primary/10">
              <span className="h-1.5 w-3 rounded-full bg-primary mt-2" />
              <span className="text-gray-300">
                A commitment to writing clean, maintainable code and ensuring a
                positive user experience in every project
              </span>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-primary">Let's Connect</h2>
          <p className="text-lg text-gray-300">
            I'm currently seeking opportunities to apply my front-end expertise
            in a challenging, growth-oriented role where I can continue to
            refine my skills and contribute to building amazing web
            applications. Let's connect and see how I can help bring your next
            web project to life!
          </p>
        </div>
      </div>
    </main>
  );
};
