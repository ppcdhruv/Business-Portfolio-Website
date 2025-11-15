import React from 'react';
import Container from './ui/Container';

const PageWedge: React.FC = () => {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white">
            Most sites look fine.
            <br />
            <span className="text-zinc-700 dark:text-zinc-300">Almost none perform.</span>
          </h2>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            Your problem isn’t the website — it’s the <strong className="text-zinc-800 dark:text-zinc-200">performance stack</strong> behind it.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default PageWedge;