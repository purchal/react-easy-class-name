import React, { useRef } from "react";
import { render } from "@testing-library/react";
import className from "./index";

describe("with tagged template", () => {
  const Div = className.div`
    base
    ${({ conditional }) => conditional && "conditional"}
    ${({ secondConditional }) => secondConditional && "second-conditional"}
    ${{ objectKey: "with-object-key", secondObjectKey: "with-2nd-obj-key" }}
  `;

  test("doesn't downcase props for components", () => {
    const Comp = ({ aProp }) => <div>{aProp}</div>;
    const Classed = className(Comp)``;
    const { container, debug } = render(<Classed aProp="my-prop" />);
    expect(container.firstChild.innerHTML).toBe("my-prop");
  });

  test("regular string", () => {
    const { container } = render(<Div />);
    expect(container.firstChild.className).toBe("base");
  });

  test("function", () => {
    const { container } = render(<Div conditional />);
    expect(container.firstChild.className).toBe("base conditional");
  });

  test("multiple functions", () => {
    const { container } = render(<Div conditional secondConditional />);
    expect(container.firstChild.className).toBe(
      "base conditional second-conditional"
    );
  });

  test("supply additional className prop", () => {
    const { container } = render(<Div className="additional" />);
    expect(container.firstChild.className).toBe("base additional");
  });

  test("component inheritance", () => {
    const Div2 = className(Div)`additional`;
    const { container } = render(<Div2 />);
    expect(container.firstChild.className).toBe("base additional");
  });

  test("object", () => {
    const { container } = render(<Div objectKey secondObjectKey={false} />);
    expect(container.firstChild.className).toBe("base with-object-key");
  });

  test("object with multiple keys", () => {
    const { container } = render(<Div objectKey secondObjectKey />);
    expect(container.firstChild.className).toBe(
      "base with-object-key with-2nd-obj-key"
    );
  });

  describe("DOM attribute", () => {
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

  describe("with object", () => {
    const Div = className.div({ first: "1st", second: "2nd", third: "3rd" });

    test("truthy props", () => {
      const { container } = render(<Div first third />);
      expect(container.firstChild.className).toBe("1st 3rd");
    });
  });

  describe("innerRef", () => {
    const Div = className.div({ first: "1st" });

    test("truthy props", () => {
      const { container } = render(<Div first fooBar="foobar" />);
      expect(container.firstChild.className).toBe("1st");
    });
  });

  describe("forwarded props", () => {
    const Div = className.div({ first: "1st" });

    test("forward props", () => {
      const Button = className("button", { type: "button" })`my-class`;
      const { container } = render(<Button />);
      expect(container.firstChild.type).toBe("button");
    });
  });
});
