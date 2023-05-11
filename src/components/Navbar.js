import React from 'react';
// eslint-disable-next-line
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="container flex mx-auto justify-between mt-4 py-2 border-b-2">
      <div className="text-3xl text-gray-600 capitalize font-bold">
        <Link to="/">Math magician</Link>
      </div>
      <nav className="flex gap-1 capitalize text-gray-600 font-semibold text-lg">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/calculator">Calculator</NavLink>
        <NavLink to="/quote">Quote</NavLink>
      </nav>
    </div>
  );
}
