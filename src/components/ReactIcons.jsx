import React from "react";
import { AiFillApple, AiFillAppstore } from "react-icons/ai"; // ai is for Ant Design Icons

const ReactIcons = () => {
  // Now support you are geting icons from server in json or in array or in string
  //   let see here.

  // here we are storing icon name in variable.
  //   const icons = "AiFillApple";

  //   now suppose "icons" is array not a variable that containes string.
  // let say it has more than 2 icons
  const icons = ["AiFillApple", "AiFillAppstore"];

  return (
    <div>
      {/* 
            what do you think it will worl or not?
            let see.

            so it doesn't works.
            how can we archive this?
        */}
      {/* <icons fontSize={"50px"} /> */}
      {/* 
      now map it. 
      */}
      {icons.map((iconNames) => {
        // what you think will this work or not?
        // let see again
        // this also doesn't works
        // so what to do now?

        // sorry by mistake i closed my vscode.

        // now let see what to do to render icons on web page
        
        return `<${iconNames} fontSize={"50px"} />`;
      })}
    </div>
  );
};

export default ReactIcons;
