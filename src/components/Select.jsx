import React from "react";

function Select({ onItemClick ,itemData}) {

 
  return (
    <>
      <div className="selectDrop ">
        <div className="searchFields">
          <ul className="item_menu text-center p-3  w-[220px] h-[286px]">
            {itemData.map((item, index) => (
              <li key={index} onClick={() => onItemClick(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Select;
