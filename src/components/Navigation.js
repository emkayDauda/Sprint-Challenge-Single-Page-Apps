import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div>
        <div>
          <NavLink to="/">Welcome</NavLink>
        </div>
        <div>
          <NavLink to="/characters">Characters</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
