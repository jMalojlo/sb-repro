const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "platform",
      values: [
        {
          name: "platform",
          value: "#01262f",
        },
      ],
    },
  },
};

export default preview;
