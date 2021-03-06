import React, { useRef, useState, useEffect } from 'react';
import projects from './projects';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useSpring, animated } from 'react-spring';

export default function Card(props) {
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   window.onscroll = () => {
  //     setIsScrolled(window.pageYOffset <= 490 ? false : true);
  //     console.log(isScrolled);
  //     return () => (window.onscroll = null);
  //   };
  // }, [isScrolled]);

  return (
    <animated.div
      style={props.style}
      // style={props}
      className='flex flex-col justify-center items-center rounded m-8 '
    >
      {projects.map((project, idx) => {
        return (
          <animated.div key={idx}>
            <h1 className='m-2  text-3xl'>{`${project.name}:`}</h1>
            <a href={project.link}>
              <img
                className='m-4 border'
                style={{
                  borderRadius: '1rem',
                  height: '27rem',
                }}
                src={project.img}
              />
            </a>

            <p
              className='text-gray-500 m-auto'
              style={{ width: '35rem', textAlign: 'center' }}
            >
              {project.description}
            </p>
          </animated.div>
        );
      })}
    </animated.div>
  );
}
