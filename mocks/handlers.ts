import {
  DefaultBodyType,
  PathParams,
  ResponseComposition,
  rest,
  RestContext,
  RestRequest,
} from "msw";
import jwt from "jsonwebtoken";

const SECRET_KEY = "qwe123qwe123";

const USER = {
  email: "test@test.com",
  password: "qwe123",
};

interface SignIn {
  email: string;
  password: string;
}

export const signIn = rest.post(
  "https://test.com/signin",
  async (
    req: RestRequest<SignIn, PathParams<string>>,
    res: ResponseComposition<DefaultBodyType>,
    ctx: RestContext
  ) => {
    const param = await req.json();
    if (USER.email === param.email) {
      const token = jwt.sign(
        { type: "accessToken", exp: Math.floor(Date.now() / 1000) + 60 * 60 },
        SECRET_KEY
      );
      const refresh = jwt.sign(
        { type: "refreshToken", exp: Math.floor(Date.now() / 1000) + 60 * 120 },
        SECRET_KEY
      );
      return res(
        ctx.status(200),
        ctx.json([
          { message: "SUCCESS", accessToken: token, refreshToken: refresh },
        ])
      );
    } else {
      return res(ctx.status(200), ctx.json([{ message: "ERROR" }]));
    }
  }
);

export const refresh = rest.post(
  "https://test.com/refresh",
  async (
    req: RestRequest<{ refresh: string }, PathParams<string>>,
    res: ResponseComposition<DefaultBodyType>,
    ctx: RestContext
  ) => {
    const param = await req.json();
    const refToken = jwt.decode(param.refreshToken);

    return res(ctx.status(200), ctx.json([{ message: "token refresh" }]));
  }
);

export const handlers = [signIn, refresh];
