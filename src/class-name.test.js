import React from "react";
import { render } from "@testing-library/react";
import className from "./index";

describe("className", () => {
  const Div = className.div`
    base
    ${({ conditional }) => conditional && "conditional"}
  `;

  test("apply class name", () => {
    const { container } = render(<Div />);
    expect(container.firstChild.className).toBe("base");
  });

  test("apply conditional class name", () => {
    const { container } = render(<Div conditional />);
    expect(container.firstChild.className).toBe("base conditional");
  });

  test("apply additional class name", () => {
    const { container } = render(<Div className="additional" />);
    expect(container.firstChild.className).toBe("base additional");
  });

  test("inherit component", () => {
    const Div2 = className(Div)`additional`;
    const { container } = render(<Div2 />);
    expect(container.firstChild.className).toBe("base additional");
  });

  test("lowercase props for dom element", () => {
    const { container } = render(<Div myProp="my value" />);
    expect(container.firstChild.attributes.myprop.value).toBe("my value");
  });

  test("stringify bools", () => {
    const { container } = render(<Div bool />);
    expect(container.firstChild.attributes.bool.value).toBe("true");
  });

  test("stringify number", () => {
    const { container } = render(<Div number={4.2} />);
    expect(container.firstChild.attributes.number.value).toBe("4.2");
  });
});
