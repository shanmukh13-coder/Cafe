// Assuming your Menu.js is set up something like this.

import React, { useEffect, useState } from 'react';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch('https://cafe-website-backend.onrender.com/api/menu')
      .then((response) => response.json())
      .then((data) => setMenuItems(data));
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;