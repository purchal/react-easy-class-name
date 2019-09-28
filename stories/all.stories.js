import React from "react";
import { action } from "@storybook/addon-actions";
import classy from "../src/index";

export default {
  title: "elements"
};

const RedText = classy.div`red-text`;
const Padding = classy.div`with-padding`;
const BlueBackground = classy(Padding)`blue-background`;
const Button = classy.button`
  button
  ${({ disabled }) => (disabled ? "button-disabled" : "button-active")}
`;

export const all = () => (
  <div>
    <RedText>Red text</RedText>
    <RedText className="gray-background">Red text on gray background</RedText>
    <BlueBackground>Blue background</BlueBackground>
    <Button>Active button</Button>
    <Button disabled>Disabled button</Button>
    <Button disabled classyProps={{ disabled: false }}>
      Disabled button with active class
    </Button>
  </div>
);
