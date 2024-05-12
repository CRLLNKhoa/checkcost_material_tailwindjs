import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/logs/:id",
    "/logs",
    "/tool",
    "/player/:name",
    "/tool/single-rewind",
    "/tool/double-rewind",
    "/tool/time-rewind",
    "/teams",
    "/world-tree",
    "/calculator"
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
