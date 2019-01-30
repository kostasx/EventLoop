const { exec } = require('child_process');
let date = new Date;
let year = date.getFullYear();

// The `say` command works only on Mac :(
  // Replace the command below with something that also runs on the window command prompt
  // e.g. the `dir` command:
exec(`say "The current year is ${year}"`, (err, stdout, stderr) => {

  if (err) { return; }

  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);

});
