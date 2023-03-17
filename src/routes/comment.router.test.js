const CommentRouter = require("./comment.route");

const routes = [
  { path: "/:filmId", method: "post" },
  { path: "/", method: "get" },
  { path: "/:commentId", method: "delete" },
  { path: "/:commentId", method: "put" },
  { path: "/:commentId", method: "get" },
];
describe("Comment router test", () => {
  it.each(routes)("`$method` exists on $path", (route) => {
    expect(
      CommentRouter.stack.some((s) =>
        Object.keys(s.route.methods).includes(route.method)
      )
    ).toBe(true);
    expect(CommentRouter.stack.some((s) => s.route.path === route.path)).toBe(
      true
    );
  });
});
