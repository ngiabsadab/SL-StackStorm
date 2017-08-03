const { exec } = require('child_process'); 
const cmd = `curl -k http://35.186.159.24:3000/api/dashboards/db -H "Authorization: Bearer eyJrIjoiYnpDcXhpMUNweWtzQ3BOVGNHWGxJZmVQRnNEeGc1anYiLCJuIjoic3QyIiwiaWQiOjF9" -H "Accept: application/json" -H "Content-Type: application/json" -d '{"dashboard": {"id": null,"title": "HelloDashboard3","tags": [ "templated" ],"timezone": "browser","rows": [{}],"schemaVersion": 6,"version": 0},"overwrite":true}'`;
 
exec(cmd, (err, stdout, stderr) => {
  if (err) {
    // node couldn't execute the command
    console.log(`error ${err}`)
    return;
  }
// the *entire* stdout and stderr (buffered)
  console.log(`stdout: ${stdout}`);
 // console.log(`5555555`);
});
