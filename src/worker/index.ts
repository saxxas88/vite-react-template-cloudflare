import { Hono } from "hono";

type Env = {
  username: string;
};
const app = new Hono<{ Bindings: Env }>();

app.get("/api/", (c) => {
  const envVar = c.env.username || "#";
  const name = "Cloudflare";
  console.log({ name, envVar });
  return c.json({ value: ` ${name} + ${envVar}` });
});

export default app;
