import { createMiddleware } from "hono/factory";

export const accessAuth = createMiddleware(async (c, next) => {
  try {
    // demo test logic
    if (!c.env.TOKEN) {
      throw new Error("MISSING");
    }
    await next();
  } catch (
    error: any // eslint-disable-line @typescript-eslint/no-explicit-any
  ) {
    // Token verification failed
    const { message } = error;
    return c.json(`Invalid token: ${message}`, 403);
  }
});
