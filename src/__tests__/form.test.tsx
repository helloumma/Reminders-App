/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import Form from "../components/form";

test("Renders the form tag", () => {
  const { comp } = render(
    <Form
      handleChange={() => {
        return null;
      }}
      handleSubmit={() => {
        return null;
      }}
      val={""}
    />
  );

  const formAttr = comp.getElementsByTagName("form");
  expect(formAttr.length).toBe(1);
});

test("Renders the label tags", () => {
  const { comp } = render(
    <Form
      handleChange={() => {
        return null;
      }}
      handleSubmit={() => {
        return null;
      }}
      val={""}
    />
  );

  const labelTag = comp.getElementsByTagName("label");
  expect(labelTag.length).toBe(3);
});

test("Renders the input tags", () => {
  const { comp } = render(
    <Form
      handleChange={() => {
        return null;
      }}
      handleSubmit={() => {
        return null;
      }}
      val={""}
    />
  );

  const inputTag = comp.getElementsByTagName("input");
  expect(inputTag.length).toBe(3);
});

test("Renders button", () => {
  const { comp } = render(
    <Form
      handleChange={() => {
        return null;
      }}
      handleSubmit={() => {
        return null;
      }}
      val={""}
    />
  );

  const buttonTag = comp.getElementsByTagName("button");
  expect(buttonTag.length).toBe(1);
});

test("Renders button text", () => {
  const { comp } = render(
    <Form
      handleChange={() => {
        return null;
      }}
      handleSubmit={() => {
        return null;
      }}
      val={""}
    />
  );

  const buttonText = screen.getByText(/SUBMIT/i);
  expect(buttonText).toBeInTheDocument();
});
