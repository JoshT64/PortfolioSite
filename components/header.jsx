import React from 'react';
import Body from './body';

export default function Header() {
  return (
    <div className="flex items-center mr-auto border-b-2  h-16 m-0 min-w-full justify-between">
      <h1 className="m-4">JOSHCOIN</h1>
      <ul className="text-center m-8 ">
        <li
          onClick={() => {
            window.scrollTo({
              behavior: 'smooth',
              top: 500,
              left: 0,
            });
          }}
          className="ml-10 inline transition ease-in duration-150 hover:bg-purple-100 cursor-pointer"
        >
          About Me
        </li>
        <li
          onClick={() => {
            window.scrollTo({
              behavior: 'smooth',
              top: 1000,
              left: 100,
            });
          }}
          className="ml-10 inline transition ease-in duration-150 hover:bg-purple-100 cursor-pointer"
        >
          Projects
        </li>
      </ul>
    </div>
  );
}
