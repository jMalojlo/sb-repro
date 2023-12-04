import { jest } from "@storybook/jest";

export const useAuthentication = jest.fn(() => {
  return {
    user: {
      name: "testUserName",
      id: "auth0|5e680000000000000000001"
    },
    isAuthenticated: true,
    logout: jest.fn(),
    setActiveTenantId: jest.fn()
  };
});
