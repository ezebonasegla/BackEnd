import { serverHttp } from "./app.js";
import _yargs from "yargs";

const yargs = _yargs(process.argv.slice(2));
const args = yargs.default("port", 8080).argv;

//start Server
const port = args.port;
serverHttp.listen(port, () => {
  console.log(`The server is listening in port: ${port}`);
});
