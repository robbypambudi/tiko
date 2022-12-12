export type ApiReturn<T> = {
  status: boolean;
  message: string;
  data: T;
};
