import { AtIcon, CodeBranchIcon } from '@/app/constants/icons';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="px-6 pt-32 pb-4 max-w-7xl mx-auto">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-16 max-w-6xl  leading-tight">
        Turning ideas into scalable and performant web solutions through{' '}
        <span className="text-primary">clean</span> and{' '}
        <span className="text-primary">efficient</span> code.
      </h1>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/projects"
          className="inline-flex items-center px-8 py-4 bg-primary text-black font-medium rounded-md hover:bg-primary/90 transition-colors"
        >
          <CodeBranchIcon className="w-5 h-5 mr-2" />
          View my projects
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center px-8 py-4 bg-background border border-primary/20 text-primary font-medium rounded-md hover:bg-primary/10 transition-colors"
        >
          <AtIcon className="w-5 h-5 mr-2" />
          Get in touch
        </Link>
      </div>
    </section>
  );
};
