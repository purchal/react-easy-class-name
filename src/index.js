import React from "react";
import domAttributes from "./domAttributes";
import domElements from "./domElements";

const STRINGIFIED_DATA_TYPES = ["boolean", "number"];
const SKIPPED_DOM_PROPS = ["className"];

const asString = (str, exprs) => {
  return ({ shallowProps, ...props }) => {
    if (!Array.isArray(str)) {
      return Object.keys(str)
        .reduce((acc, key) => {
          if (props[key]) acc.push(str[key]);
          return acc;
        }, [])
        .join(" ");
    }
    const interpolated = exprs.map((ex) => {
      if (typeof ex === "function") return ex({ ...props, ...shallowProps });
      if (typeof ex === "object")
        return Object.keys(ex)
          .reduce((acc, key) => {
            if (props[key]) acc.push(ex[key]);
            return acc;
          }, [])
          .join(" ");
      return ex;
    });
    const classNames = [...str, ...interpolated];
    if (props.className) classNames.push(props.className);
    return classNames
      .filter((str) => !!str)
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();
  };
};

const className = (Tag, forwardProps = {}) => (str, ...exprs) => {
  const shouldDowncase = (key) =>
    !domAttributes.includes(key) && typeof Tag !== "function";
  const classNameString = asString(str, exprs);
  return ({ shallowProps, ...props }) => {
    const domProps = Object.keys(props).reduce((acc, key) => {
      if (SKIPPED_DOM_PROPS.includes(key)) return acc;
      const keyToUse = shouldDowncase(key) ? key.toLowerCase() : key;
      const domValue =
        STRINGIFIED_DATA_TYPES.includes(typeof props[key]) &&
        !domAttributes.includes(key)
          ? props[key].toString()
          : props[key];
      acc[keyToUse] = domValue;
      return acc;
    }, {});
    return (
      <Tag
        {...domProps}
        {...forwardProps}
        ref={props.innerRef}
        className={classNameString({ shallowProps, ...props })}
      />
    );
  };
};

domElements.forEach((el) => {
  className[el] = className(el);
});

export { className as default, asString, className };
