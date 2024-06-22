  import React from "react";

  function Menubar({ iconsData }) {
    return (
      <div className="flex aed w-96">
        {iconsData.map((icons, index) => (
          <a href="#" key={index} className="flex gap-2 items-center m-auto iconMenu">
            <icons.icon className='text-xl ' />
            <div className="count"></div>
            {icons.name}
          </a>
        ))}
      </div>
    );
  }

  export default Menubar;
