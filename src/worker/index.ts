import { Hono } from "hono";
import { accessAuth } from "./middleware/auth";

type Env = {
  username: string;
};
const app = new Hono<{ Bindings: Env }>();

app.get("/api/hello", (c) => {
  const envVar = c.env.username || "#";
  const part_one = "Welcome to";
  console.log({ part_one, envVar });
  return c.json({ message: `${part_one} ${envVar}!` });
});

app
  .use(accessAuth)
  .get("/api/healt", (c) => c.json({ status: `Healty! ⚡⚛️🔥☁️` }));

export default app;
