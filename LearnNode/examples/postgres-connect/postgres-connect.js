const { Client } = require('pg');
const { Pool }   = require('pg'); 

// CONNECTION CONFUGIRATION
config = {
    user    : "postgres",  // default process.env.PGUSER 
    password: "password",   // default process.env.PGPASSWORD
    host    : "localhost",  // default process.env.PGHOST
    database: "postgres",   // default process.env.PGDATABASE
    port    : "5432",       // default process.env.PGPORT
}

// Connect via the Client API: https://node-postgres.com/api/client
// const client = new Client({ connectionString: `postgresql://${DB_USER}:${DB_PASS}@${HOST}:${PORT}/${DB_NAME}` });
const client = new Client(config);
client.connect();
client.query('Select now() as run_at;', (err, res) => {
    if (err) { console.log(err); } 
    console.log(`Run at date-time : ${res.rows[0].run_at}`);
    client.end();
});

// Connect via the Pool API: https://node-postgres.com/api/pool
// "Use a pool if you have or expect to have multiple concurrent requests. That is literally what it is there for: to provide a pool of re-usable open client instances (reduces latency whenever a client can be reused)."
// Reference: https://stackoverflow.com/questions/48751505/how-can-i-choose-between-client-or-pool-for-node-postgres
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

