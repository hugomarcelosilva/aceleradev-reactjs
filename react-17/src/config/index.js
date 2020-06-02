export const config = {
  spotify: {
    authorizationURL: "https://accounts.spotify.com/authorize",
    clientId: "0f0327fdd45b4fe08dd6ffb39b6e1691",
    redirectUrl: `${window.location.origin}/authorize`,
    webAPI: "https://api.spotify.com/v1",
    scopes: ["user-read-email", "user-read-private", "streaming"],
  },
};
