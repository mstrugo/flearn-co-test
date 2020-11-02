import React from 'react';
import { Nav } from './Nav';

export const Header = () => (
  <header className="bg-white flex">
    <div className="flex flex--between content--centered content--fixed-max-width">
      <h2>Flearn Co!</h2>
      <Nav />
    </div>
  </header>
);
