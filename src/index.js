import React from "react";
import domElements from "./domElements";

const asString = (str, ...exprs) => {
  return ({ classNameProps = {}, ...props }) => {
    const interpolated = exprs.map(ex =>
      typeof ex === "function" ? ex({ ...props, ...classNameProps }) : ex
    );
    const classNames = [...str, ...interpolated];
    if (props.className) classNames.push(props.className);
    return classNames.join(" ");
  };
};

const className = Tag => (str, exprs) => {
  const classNameString = asString(str, exprs);
  return ({ classNameProps, ...props }) => (
    <Tag {...props} className={classNameString(props)} />
  );
};

domElements.forEach(el => {
  className[el] = className(el);
});

export { className as default, asString };
