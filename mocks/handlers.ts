import {http} from "msw";

export const handlers = [
  http.get("/api/events", (req, res, ctx) => {
    return res(ctx.json({events: []}));
  }),
];
