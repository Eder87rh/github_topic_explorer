import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import Topic from "./[id]";
import * as nextRouter from "next/router";
import { mocks } from "../../graphql/queries/topic";

describe("Topic", () => {
  beforeAll(() => {
    nextRouter.useRouter = jest.fn();
    nextRouter.useRouter.mockImplementation(() => ({
      route: "/",
      query: { id: "react" },
    }));
  });

  afterEach(() => {
    nextRouter.useRouter.mockReset();
  });

  it("should render the component", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Topic />
      </MockedProvider>
    );
    expect(await screen.findByText("REACT")).toBeInTheDocument();
  });

  it("should render angular data", async () => {
    nextRouter.useRouter.mockImplementation(() => ({
      route: "/",
      query: { id: "angular" },
    }));

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Topic />
      </MockedProvider>
    );
    expect(await screen.findByText("ANGULAR")).toBeInTheDocument();
  });
});
