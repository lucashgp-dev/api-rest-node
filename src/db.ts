import { Pool } from "pg";

//set password elephantsql
let password_db = "agGxKo0-YvPvjHSG7eISy3kU0fJyqVNS";

const connectionString = `postgres://cvjviutd:${password_db}@kesavan.db.elephantsql.com/cvjviutd`;
const db = new Pool({ connectionString });

export default db;
