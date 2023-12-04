export default {
  "https://dev.abccd.com": {
    roles: ["Trade Executor"],
    legalEntities: [5018, 5019, 5020],
    legalEntity: 5018,
    lgEntities: [
      {
        legalEntityId: "5018",
        legalEntityUrl: "https://beta-man-alpha-antilia.dev.covantis.ch"
      },
      {
        legalEntityId: "5019",
        legalEntityUrl: "https://beta-man-alpha-apus.dev.covantis.ch"
      },
      {
        legalEntityId: "5020",
        legalEntityUrl: "https://beta-man-alpha-andromeda.dev.covantis.ch"
      }
    ],
    tenant_id: "5018",
    consents: {
      privacy: {
        accepted: true,
        accepted_date: 1679401066,
        version: "v1.1"
      },
      terms: {
        accepted: true,
        accepted_date: 1679401081,
        version: "v1.3"
      }
    },
    created_at: "2022-03-02T15:54:01.902Z",
    username: "Joni Mitchellbm",
    email: "joni.mitchell.betaman@alpha.com",
    user: {
      full_name: "Joni Mitchellbm",
      given_name: "Joni",
      family_name: "Mitchellbm"
    }
  },
  iss: "https://covantis-dev.eu.auth0.com/",
  sub: "auth0|60a248a11a55450069baec66",
  aud: [
    "https://beat-auth0-api/",
    "https://covantis-dev.eu.auth0.com/userinfo"
  ],
  iat: 1693398726,
  exp: 1693485126,
  azp: "yUR1PuErTfONoChSwMxYvQ6OPKsD4iTu",
  scope: "openid profile email offline_access",
  permissions: [
    "ca:create",
    "ca:update",
    "ca:viewDetails",
    "master-data:read",
    "nomination:create",
    "nomination:update",
    "nomination:viewDetails",
    "voyage:create",
    "voyage:read"
  ]
};
