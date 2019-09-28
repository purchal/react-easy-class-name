import React from "react";
import { action } from "@storybook/addon-actions";
import className, { asString } from "../src/index";

export default {
  title: "elements"
};

const RedText = className.div`red-text`;
const Padding = className.div`with-padding`;
const BlueBackground = className(Padding)`blue-background`;
const Button = className.button`
  button
  ${({ disabled }) => (disabled ? "button-disabled" : "button-active")}
`;
const str = asString`one ${({ skip }) => (skip ? "two" : "SKIP THIS")}`;

export const all = () => (
  <div>
    <RedText>Red text</RedText>
    <RedText className="gray-background">Red text on gray background</RedText>
    <BlueBackground>Blue background</BlueBackground>
    <Button>Active button</Button>
    <Button disabled>Disabled button</Button>
    <Button disabled classNameProps={{ disabled: false }}>
      Disabled button with active class
    </Button>
    <div>{str({ skip: true })}</div>
  </div>
);
