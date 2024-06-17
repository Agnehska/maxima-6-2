import db from "../index.js";
import createTodosTable from "./1_create_todos_table.js";

const runDbMigrations = async () => {
  console.log('migrations start')

  const client = await db.connect();

  try {
    await client.query('Begin');

    await client.query(createTodosTable);

    await client.query('Commit')

    console.log('Finished migration')
  } catch (e){
    await client.query('Rollback')

    console.log('Failed migration')

    throw e;
  } finally {
    client.release();
  }
}

export default runDbMigrations;