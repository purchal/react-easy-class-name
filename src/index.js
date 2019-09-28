import React from "react";
import domElements from "./domElements";

const classyString = (str, ...exprs) => {
  return ({ classyProps = {}, ...props }) => {
    const interpolated = exprs.map(ex =>
      typeof ex === "function" ? ex({ ...props, ...classyProps }) : ex
    );
    const classNames = [...str, ...interpolated];
    if (props.className) classNames.push(props.className);
    return classNames.join(" ");
  };
};

const classy = Tag => (str, exprs) => {
  const classNameString = classyString(str, exprs);
  return props => <Tag {...props} className={classNameString(props)} />;
};

domElements.forEach(el => {
  classy[el] = classy(el);
});

export default classy;
