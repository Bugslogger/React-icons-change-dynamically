import React from "react";

// we are using Ant Design icons from react-icon
import * as AireactIcons from "react-icons/ai"; // ai is for Ant Design icons
import * as BsreactIcons from "react-icons/bs"; // bs is for Bootstrap icons
import * as FareactIcons from "react-icons/fa"; // fa is for Font Awesome icons

const DynamicReactIcon = () => {
  // let create array containing names of icons
  const IconNames = [
    "AiFillAppstore",
    "AiFillApple",
    "AiFillAndroid",
    "AiFillChrome",
    "AiFillBulb",
    "BsFillAlarmFill",
    "BsFillBarChartFill",
    "BsFillBarChartLineFill",
    "FaBitcoin",
    "FaBloggerB"
  ];

  //    suppose you have to use different icons form different libraries
  //    here is the example how to use it.

  const ChangingIconsDynamically = (icons) => {
    if (icons.startsWith("Bs")) {
      return BsreactIcons[icons];
    }
    if (icons.startsWith("Fa")) {
      return FareactIcons[icons];
    }
    if (icons.startsWith("Ai")) {
      return AireactIcons[icons];
    }
  };

  return (
    <div className="App">
      {
        // here mapping IconNames array and displaying icons on web page
        // before that we need to import react-icons from react-icons library
        IconNames.map((icon, index) => {
          // here we are create tag with icon name
          //   next "AireactIcons" this is a object
          // AireactIcons[icon] is means we are trying to access key value from object
          //   to know more about this you can check javascript object tutorials.

          return (
            <div
              key={index}
              style={{
                fontSize: "40px",
              }}
            >
              {React.createElement(ChangingIconsDynamically(icon))}
            </div>
          );
        })
      }
    </div>
  );
};

export default DynamicReactIcon;
