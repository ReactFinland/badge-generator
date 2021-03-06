module.exports = () => ({
  // conferenceId: "graphql-finland-2018", TODO
  // apiUrl: "http://localhost:3333/graphql", TODO
  output: "build",
  // layout: () => require("./layouts/SiteBody").default, TODO: drop from antwar
  paths: {
    "/": () => require("./pages/IndexPage.jsx").default,
    badges: () => require("./pages/BadgesPage.jsx").default,
    "left-arrow": () => require("./pages/LeftArrowPage.jsx").default,
    "right-arrow": () => require("./pages/RightArrowPage.jsx").default,
    "speakers-room": () => require("./pages/SpeakersRoomPage.jsx").default,
    schedule: () => require("./pages/SchedulePage.jsx").default,
    presentation: () => require("./pages/PresentationPage.jsx").default
  }
});
