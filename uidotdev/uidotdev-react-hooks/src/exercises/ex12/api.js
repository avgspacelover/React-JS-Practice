export const login = (email, password) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      if (!email || !password) {
        rej(new Error("Not valid email or password"));
      }

      res({
        username: "Registered user",
        email,
        password
      });
    }, 1000);
  });
