type Config = {
  secretTest: string;
};

export const config: Config = {
  secretTest: process.env.SECRET_TEST as string,
};
