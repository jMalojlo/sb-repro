import { userEvent, waitFor, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { NewFeature } from "./NewFeature";

export default {
  component: NewFeature,
};

export const ClickAButton = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const button = await waitFor(() => canvas.getByRole("button"));
    await step("Click the button", async () => {
      userEvent.click(button);
      await waitFor(() => expect(button).toHaveTextContent("hello"));
    });

    await step("Click the button again", async () => {
      userEvent.click(button);
      await waitFor(() => expect(button).toHaveTextContent("yellow"));
    });
  },
};
