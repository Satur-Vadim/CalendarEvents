import React from 'react';

const Header = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return (
    <div className="header d-flex">
      {days.map((item) => (<div key={item}>{item}</div>))}
    </div>
  );
};

export default Header;
