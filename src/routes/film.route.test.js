const FilmRouter = require("./film.route");

const routes = [
  { path: "/", method: "get" },
  { path: "/", method: "post" },
  { path: "/:filmId", method: "delete" },
  { path: "/:filmId", method: "put" },
  { path: "/:filmId", method: "get" },
];
describe("Film router test", () => {
  it.each(routes)("`$method` exists on $path", (route) => {
    expect(
      FilmRouter.stack.some((s) =>
        Object.keys(s.route.methods).includes(route.method)
      )
    ).toBe(true);
    expect(FilmRouter.stack.some((s) => s.route.path === route.path)).toBe(
      true
    );
  });
});
