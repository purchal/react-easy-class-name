import React from "react";
import domElements from "./domElements";

const STRINGIFIED_DATA_TYPES = ["boolean", "number"];
const SKIPPED_DOM_PROPS = ["className"];

const asString = (str, ...exprs) => {
  return ({ shallowProps, ...props }) => {
    const interpolated = exprs.map(ex =>
      typeof ex === "function" ? ex({ ...props, ...shallowProps }) : ex
    );
    const classNames = [...str, ...interpolated];
    if (props.className) classNames.push(props.className);
    return classNames
      .filter(str => !!str)
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();
  };
};

const className = Tag => (str, exprs) => {
  const classNameString = asString(str, exprs);
  return ({ shallowProps, ...props }) => {
    const domProps = Object.keys(props).reduce((acc, key) => {
      if (SKIPPED_DOM_PROPS.includes(key)) return acc;
      const domValue = STRINGIFIED_DATA_TYPES.includes(typeof props[key])
        ? props[key].toString()
        : props[key];
      acc[key.toLowerCase()] = domValue;
      return acc;
    }, {});
    return (
      <Tag
        {...domProps}
        className={classNameString({ shallowProps, ...props })}
      />
    );
  };
};

domElements.forEach(el => {
  className[el] = className(el);
});

export { className as default, asString };
