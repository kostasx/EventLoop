const { Client } = require('pg');
const { Pool }   = require('pg'); // Pool vs Client: https://stackoverflow.com/questions/48751505/how-can-i-choose-between-client-or-pool-for-node-postgres

config = {
    user    : "postgres",  // default process.env.PGUSER 
    password: "password",   // default process.env.PGPASSWORD
    host    : "localhost",  // default process.env.PGHOST
    database: "postgres",   // default process.env.PGDATABASE
    port    : "5432",       // default process.env.PGPORT
}

// Client: https://node-postgres.com/api/client
// const client = new Client({ connectionString: `postgresql://${DB_USER}:${DB_PASS}@${HOST}:${PORT}/${DB_NAME}` });
const client = new Client(config);
client.connect();
client.query('Select now() as run_at;', (err, res) => {
    if (err) { console.log(err); } 
    console.log(`Run at date-time : ${res.rows[0].run_at}`);
    client.end();
});

// Pool: https://node-postgres.com/api/pool
const pool = new Pool(config);

pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack)
    }
    client.query('SELECT NOW()', (err, result) => {
      release()
      if (err) {
        return console.error('Error executing query', err.stack)
      }
      console.log({ rows: result.rows });
    })
});

