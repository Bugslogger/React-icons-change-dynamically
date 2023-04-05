/**
 * let start from empty page
 *
 */
import React from "react";

// step 1:
import * as AiReactIcons from "react-icons/ai"; // ai for Ant Design Icons
// do the same thingg for bootstrap icons.
import * as BsReactIcons from "react-icons/bs"; // bs for Bootstrap
import * as BiReactIcons from "react-icons/bi"; // bi for Box Icons

const DynamicReactIcons = () => {
  // step 2:

  /**
   *
   * @param {string} iconName
   * @returns
   */

  //   if you want to show icons from 2 different lib.
  // suppose from "Bootstrap" and "ant Design Icons" at same time

  const DisplayIcons = (iconName) => {
    // now here we have to check which icon is from "bootstrap" and which one is from "AI"

    if (iconName.startsWith("Ai")) {
      return AiReactIcons[iconName];
    }
    if (iconName.startsWith("Bs")) {
      return BsReactIcons[iconName];
    }
    if (iconName.startsWith("Bi")) {
      return BiReactIcons[iconName];
    }
  };

  // assume we have an array which has names of icons.
  // now here in the array i will add some bootstrap icons

  const icons = [
    "AiFillApple",
    "AiFillAppstore",
    "AiFillBug",
    "BsFillAirplaneEnginesFill",
    "BiBeer",
  ];

  //    similarly you can do with all icons

  return (
    <div>
      {/* 
    step 3:
    */}

      {icons.map((iconName, index) => {
        return (
          <span key={index} style={{ fontSize: "50px", margin: "0 10px" }}>
            {React.createElement(DisplayIcons(iconName))}
          </span>
        );
      })}
    </div>
  );
};

export default DynamicReactIcons;
