import React, { useRef, useState } from 'react';
import { useSpring, animated, config } from '@react-spring/web';
import projects from './projects';

export default function Card() {
  return (
    <div className="flex flex-row justify-center rounded m-8">
      {projects.map((project, idx) => {
        return (
          <div
            key={idx}
            className="m-10"
            style={{ width: '30rem', height: '20rem' }}
          >
            <h1 className="  text-2xl" style={{ textDecoration: 'underline' }}>
              {project.name}
            </h1>
            <img
              style={{
                borderRadius: '1rem',
                height: '18rem',
              }}
              src={project.img}
            />
            <p className="text-gray-500">{project.description}</p>
          </div>
        );
      })}
    </div>
  );
}
