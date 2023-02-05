import {
  DefaultBodyType,
  PathParams,
  ResponseComposition,
  rest,
  RestContext,
  RestRequest,
} from "msw";

interface Review {
  [x: string]: string;
}
interface SignInType {
  email: string;
  password: string;
}

interface SignOutType {
  accessToken: string;
}

interface SignUpType extends SignInType {
  phone: string;
  addr?: string;
  verifyCode: number;
}

interface UserType extends SignInType {
  phone: string;
  addr?: "";
  verify: boolean;
}
const emailCode = 1234;

const USER_LIST: UserType[] = [
  {
    email: "test@test.com",
    password: "qwe123qwe123",
    phone: "01000000000",
    addr: "",
    verify: true,
  },
  {
    email: "test2@test.com",
    password: "qwe123qwe123",
    phone: "01011111111",
    addr: "",
    verify: false,
  },
  {
    email: "test3@test.com",
    password: "qwe123qwe123",
    phone: "01022222222",
    addr: "",
    verify: false,
  },
];

const checkDuplicate = (email: string) => {
  return USER_LIST.filter((user) => user.email === email);
};

export const handlers = [
  rest.get("https://test.com/reviews", (_req, res, ctx) => {
    return res(
      ctx.json<Review[]>([
        {
          id: "60333292-7ca1-4361-bf38-b6b43b90cb16",
          author: "John Maverick",
          text: "Lord of The Rings, is with no absolute hesitation, my most favored and adored book by‑far. The trilogy is wonderful‑ and I really consider this a legendary fantasy series. It will always keep you at the edge of your seat‑ and the characters you will grow and fall in love with!",
        },
      ])
    );
  }),
  rest.post(
    "https://test.com/signup",
    (
      req: RestRequest<SignUpType, PathParams<string>>,
      res: ResponseComposition<DefaultBodyType>,
      ctx: RestContext
    ) => {
      req.json().then((res) => {
        const checkEmail = checkDuplicate(res.email);
        console.log(checkEmail);
      });

      return res(
        ctx.status(200),
        ctx.json<Review[]>([
          {
            id: "60333292-7ca1-4361-bf38-b6b43b90cb16",
            author: "John Maverick",
            text: "Lord of The Rings, is with no absolute hesitation, my most favored and adored book by‑far. The trilogy is wonderful‑ and I really consider this a legendary fantasy series. It will always keep you at the edge of your seat‑ and the characters you will grow and fall in love with!",
          },
        ])
      );

      // return res(ctx.status(400), ctx.json({ message: "REQUEST FAILED" }));
    }
  ),
  rest.get("https://test.com/signIn", (_req, res, ctx) => {
    return res(
      ctx.json<Review[]>([
        {
          id: "60333292-7ca1-4361-bf38-b6b43b90cb16",
          author: "John Maverick",
          text: "Lord of The Rings, is with no absolute hesitation, my most favored and adored book by‑far. The trilogy is wonderful‑ and I really consider this a legendary fantasy series. It will always keep you at the edge of your seat‑ and the characters you will grow and fall in love with!",
        },
      ])
    );
  }),
  rest.get("https://test.com/signOut", (_req, res, ctx) => {
    return res(
      ctx.json<Review[]>([
        {
          id: "60333292-7ca1-4361-bf38-b6b43b90cb16",
          author: "John Maverick",
          text: "Lord of The Rings, is with no absolute hesitation, my most favored and adored book by‑far. The trilogy is wonderful‑ and I really consider this a legendary fantasy series. It will always keep you at the edge of your seat‑ and the characters you will grow and fall in love with!",
        },
      ])
    );
  }),
];
