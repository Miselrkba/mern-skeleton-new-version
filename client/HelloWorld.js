import React from 'react';
import { hot } from 'react-hot-loader';

const HelloWorld = () => {
  return (
    <div>
      <h1>hi</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum ex quia
        ducimus porro vero nostrum laborum dolor dicta quam incidunt?
      </p>
    </div>
  );
};
export default hot(module)(HelloWorld);
