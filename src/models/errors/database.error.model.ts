class DatabaseError extends Error {
  constructor(public msg: string, public err?: any) {
    super(msg);
  }
}

export default DatabaseError;
