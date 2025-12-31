import { cn } from '@/lib/utils';
import { Spotlight } from '../ui/Spotlight';
import CircularText from '../react-bits/CircularText';
import { TextGenerateEffect } from '../ui/TextGenerateEffect';
import Link from 'next/link';
import MagicButton from '../ui/MagicButton';
import { ArrowBigRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* Aceternity UI - Spotlight Effect Function */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Aceternity UI - Spotlight Effect Function */}
      <div className="absolute top-0 left-0 flex min-h-screen min-w-screen w-full items-center justify-center bg-transparent dark:bg-black">
        <div
          className={cn(
            'absolute inset-0',
            '[background-size:40px_40px]',
            '[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]',
            'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]'
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <div className="text-9xl">
          {/* <CircularText
            text="DESIGN*BUILD*DEPLOY*"
            onHover="speedUp"
            spinDuration={10}
            className="text-red-200 -mt-96 -z-10"
          /> */}
        </div>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="flex flex-col items-center justify-center max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            <CircularText
              text="DESIGN*BUILD*DEPLOY*"
              onHover="speedUp"
              spinDuration={10}
              className="text-red-200 -z-10"
            />
          </h2>

          <TextGenerateEffect
            className="text-rose-300 text-center text-[40px] md:text-5xl lg:text-6xl"
            words="JunkABLE Studio"
            filter={true}
            duration={2}
          />

          <p className="text-red-50 text-center mb-4 text-sm mt-10 md:text-lg md:tracking-wider lg:text-2xl">
            We are a creative{' '}
            <span className="font-bold text-2xl text-rose-300">Web Design</span>{' '}
            &{' '}
            <span className="font-bold text-2xl text-rose-300">
              Fullstack Development{' '}
            </span>
            Studio based in Las Vegas, NV. <br /> We help our clients develop
            their{' '}
            <span className="font-bold text-2xl text-rose-300">
              Web Identity
            </span>{' '}
            and assist them with their{' '}
            <span className="font-bold text-2xl text-rose-300">
              Brand Strategy
            </span>{' '}
            as it relates to their junk removal business.
          </p>

          <Link href="about">
            <MagicButton
              title="Show My Work"
              icon={<ArrowBigRight />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
