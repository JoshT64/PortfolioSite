import React from 'react';
import Body from './body';

export default function Header() {
  return (
    <div
      style={{ fontSize: '1.02rem' }}
      className="header flex items-center mr-auto  sticky top-0 bottom-0 self-start  h-20 m-0 min-w-full justify-between z-10"
    >
      <h1 className="m-4  sticky">JOSHCOIN</h1>
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
