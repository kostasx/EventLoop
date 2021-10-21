const { Pool } = require('pg'); // <-- npm install pg

// CONNECTION CONFIGURATION
config = {
    user    : "postgres",   // default process.env.PGUSER 
    password: "password",   // default process.env.PGPASSWORD
    host    : "localhost",  // default process.env.PGHOST
    database: "postgres",   // default process.env.PGDATABASE
    port    : "5432",       // default process.env.PGPORT
}

const pool = new Pool(config);

// CREATE TABLE
const createTable = `
  CREATE TABLE courses(
    course_id SERIAL PRIMARY KEY,
    course_name VARCHAR (50) UNIQUE NOT NULL,
    topic VARCHAR (20) NOT NULL
  );
`
// READ TABLE
const readTable = `
  SELECT table_name, column_name, data_type, character_maximum_length 
  FROM information_schema.columns
  WHERE table_name = 'courses';
`

// UPDATE TABLE
const updateTable = `
  ALTER TABLE courses
  RENAME COLUMN topic TO course_topic
`

// DELETE TABLE
const deleteTable = `DROP TABLE courses;`

pool.connect( async (err, client, release) => {

  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  try {

    // C(reate)
    const createResult = await client.query( createTable );
    console.log({ createResult });
    
    // R(ead)
    const readResult = await client.query( readTable );
    console.table(readResult.rows);
    
    // U(pdate)
    const updateResult = await client.query( updateTable );
    console.table(updateResult.rows);

    // D(elete)
    const deleteResult = await client.query( deleteTable );
    console.log({ deleteResult });

    release();

  } catch ( err ){

    return console.error('Error executing query', err.stack)

  }
});

