import { createMiddleware } from "hono/factory";
/* import { jwtVerify, createRemoteJWKSet } from "jose"; */

export const accessAuth = createMiddleware(async (c, next) => {
  // Verify the POLICY_AUD environment variable is set
  /*  if (!c.env.POLICY_AUD) {
    return c.json("Missing required audience", 403);
  } */

  // Get the JWT from the request headers
  /* const token = c.req.header("cf-access-jwt-assertion"); */

  // Check if token exists
  /*  if (!token) {
    return c.json("Missing required CF Access JWT", 403);
  } */

  try {
    // Create JWKS from your team domain
    /*  const JWKS = createRemoteJWKSet(
      new URL(`${c.env.CF_ACCESS_DOMAIN}/cdn-cgi/access/certs`),
    );
 */
    // Verify the JWT
    /* const { payload } = await jwtVerify(token, JWKS, {
      issuer: c.env.CF_ACCESS_DOMAIN,
      audience: c.env.POLICY_AUD,
    }); */

    // Token is valid, proceed with your application logic
    //return c.json(`Hello ${payload?.email || "authenticated user"}!`, 200);

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
