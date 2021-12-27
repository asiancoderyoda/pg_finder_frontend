import { FieldError } from '../generated/graphql';

export const FieldErrorParser = (error: FieldError[]) => {
  const errMap: Record<string, string> = {};
  error.forEach((err) => {
    errMap[err.field] = err.message;
  });
  return errMap;
};
