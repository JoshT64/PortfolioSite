import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Card from '../projects/Card';

export default function Body() {
  const [isScrolled, setIsScrolled] = useState(false);

  const props = useSpring({
    to: { opacity: 1, x: 0 },
    from: { opacity: 0, x: 25 },
    delay: 300,
    config: { mass: 3, tension: 1700, friction: 1000, duration: 250 },
    reverse: isScrolled ? true : false,
  });

  const props2 = useSpring({
    to: { opacity: 1, x: 0 },
    from: { opacity: 0, x: -25 },
    delay: 469,
    reverse: isScrolled ? true : false,
    config: {
      bounce: 1000,
      mass: 5,
      tension: 2000,
      friction: 200,
      duration: 300,
    },
  });
  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset < 360 ? false : true);
      return () => (window.onscroll = null);
    };
  }, []);

  return (
    <div>
      <main
        style={props}
        className="flex flex-col flex-1 px-20 text-center mb-20"
      >
        <animated.div style={props}>
          <h1 className="text-5xl font-bold m-2 mb-2 mt-0 ">Joshua Toney.</h1>
        </animated.div>
        <animated.div style={props2}>
          <p style={{ fontSize: '1.2rem' }} className="pt-2 text-gray-600">
            Front-end Developer, Designer and React Enthusiast.
          </p>
        </animated.div>

        <animated.img
          style={props2}
          src="miijosh.png"
          height="216"
          width="216"
          className="mt-5 mb-5 border border-purple-500 rounded-full bg-purple-200 self-center"
        />
        <animated.div style={props2}>
          <p style={{ fontSize: '1.2rem' }} className="text-gray-500">
            I love creating things.
          </p>
          <p className=" max-w-3xl m-auto mt-2 border-t-2 text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            convallis eros sem, quis sagittis lacus vulputate non. Integer et
            rutrum orci, vitae volutpat lorem. Vivamus purus felis, dictum vitae
            vestibulum non, bibendum vel nisl. Duis nec dignissim nulla, sit
            amet vehicula est. Nulla ac sem lectus. Vestibulum ullamcorper enim
            vitae massa tincidunt pretium ac scelerisque erat. Cras finibus
            iaculis sagittis. Aliquam vehicula lacinia diam, ut semper risus
            volutpat et. Integer vitae dolor consectetur, semper nulla vel,
            blandit risus. Donec in vestibulum tellus. Aenean metus arcu,
            vestibulum vel pharetra in, sodales eget nunc. Nunc scelerisque
            egestas odio, a cursus mi tempor sit amet.
          </p>
        </animated.div>
      </main>
      {/* ====== MID SECTION ====== */}
      <div className=" grid-cols-3 grid  divide-x-2 mt-10">
        {/* ====== PROJECTS ======== */}
        <div id="projects" className="mt-4 mb-16 col-span-2 mr-10">
          <br></br>
          <h1 className="text-3xl bg-purple-100 inline-block">Projects</h1>
          <Card />
        </div>
        {/* ===== SKILLS ===== */}
        <div className="   col-span-1">
          <h1 className=" border-t-2 text-3xl bg-purple-100 inline-block border-gray mt-10  ">
            Skills
          </h1>
        </div>
      </div>
      {/* ========= ABOUT ME ========= */}
      <div id="about" className="mt-52">
        <br></br>
        <h1 className="mt-52 text-3xl bg-purple-100 inline-block">About Me</h1>
        <p style={{ width: '25rem' }} className="m-auto mt-4">
          Aspiring Web Developer, finding new solutions on the daily. Addicted
          to learning new things.
        </p>
      </div>
    </div>
  );
}
