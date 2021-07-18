import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Card from '../projects/Card';

export default function Body() {
  const props = useSpring({
    to: { opacity: 1, x: 0, height: 50 },
    from: { opacity: 0, x: 25, height: 0 },
    delay: 300,
    config: { mass: 3, tension: 1700, friction: 1000, duration: 250 },
  });

  const props2 = useSpring({
    to: { opacity: 1, x: 0 },
    from: { opacity: 0, x: -25 },
    delay: 570,
    config: {
      bounce: 1000,
      mass: 5,
      tension: 2000,
      friction: 200,
      duration: 300,
    },
  });

  return (
    <div>
      <main style={props} className="flex flex-col flex-1 px-20 text-center ">
        <animated.div style={props}>
          <h1 className="text-3xl font-bold m-2 mb-2 mt-0 ">Joshua Toney.</h1>
        </animated.div>
        <animated.div style={props2}>
          <p className="pt-2 text-gray-600">
            Front-end Developer, Designer and React Enthusiast
          </p>
        </animated.div>

        <animated.img
          style={props2}
          src="miijosh.png"
          height="216"
          width="216"
          className="mt-3 mb-3 border border-purple-500 rounded-full bg-purple-200 self-center"
        />
        <animated.div style={props2}>
          <p className="text-gray-500">I love creating things.</p>
        </animated.div>
      </main>
      {/* ========= ABOUT ME ========= */}
      <div id="about" className="mt-52">
        <br></br>
        <h1 className="mt-52 text-3xl bg-purple-100 inline-block">About Me</h1>
        <p style={{ width: '25rem' }} className="m-auto mt-4">
          Aspiring Web Developer, finding new solutions on the daily. Addicted
          to learning new things.
        </p>
      </div>
      {/* ====== PROJECTS ======== */}
      <div id="projects" className="mt-4 mb-16">
        <br></br>
        <h1 className="text-3xl bg-purple-100 inline-block">Projects</h1>
        <Card />
      </div>
    </div>
  );
}
