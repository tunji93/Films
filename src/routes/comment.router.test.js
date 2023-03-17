const CommentRouter = require("./comment.route");

const routes = [
  { path: "/film/:filmId", method: "post" },
  { path: "/film/:filmId", method: "get" },
  { path: "/:commentId", method: "delete" },
  { path: "/:commentId", method: "put" },
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
