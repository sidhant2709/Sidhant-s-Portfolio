import React from 'react';
import Resume from '../../assets/Resume.pdf';

const HeaderButtons = React.create = () => {
  return (
    <div className='header__buttons'>
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href="#conatct" className='btn btn-primary'>Let's Talk</a>
    </div>
  );
};

export default HeaderButtons;