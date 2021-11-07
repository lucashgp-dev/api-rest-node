export default class ForbiddenError extends Error {
  constructor(
      public msg: string,
      public err?: any,
  ) {
      super(msg);
  }
}