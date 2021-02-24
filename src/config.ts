type Config = {
  secretTest: string;
  bucket: {
    name: string;
    region: string;
    access: string;
    accessSecret: string;
  };
};

export const config: Config = {
  secretTest: process.env.SECRET_TEST as string,
  bucket: {
    name: process.env.BUCKET_NAME as string,
    region: process.env.BUCKET_REGION as string,
    access: process.env.BUCKET_ACCESS_ID as string,
    accessSecret: process.env.BUCKET_ACCESS_SECRET as string,
  },
};
