import express from "express";
import session from "express-session";
import MongoStore from 'connect-mongo'
import {
  url
} from "./config/configDB.js";
import http from "http";
import {
  Server as ioServer
} from "socket.io";
const app = express();
export const serverHttp = http.createServer(app);
const io = new ioServer(serverHttp);

//imports--------------------------------------------------------imports
//dirname
import {
  fileURLToPath
} from "url";
import {
  dirname
} from "path";
const __filename = fileURLToPath(
  import.meta.url);
export const __dirname = dirname(__filename);

//middlewears--------------------------------------------------------middlewears
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//Motor EJS--------------------------------------------------------Motor EJS
app.set("views", "./views");
app.set("view engine", "ejs");

//rutas--------------------------------------------------------rutas
//ruta principal

//session
app.use(session({
  store: MongoStore.create({
    mongoUrl: url
  }),
  secret: "secreto",
  resave: false,
  saveUninitialized: false,
  rolling: true,
  cookie: {
    maxAge: 600000,
  },
}));


//Rutes Requires---------------------------------------------------
import {
  router as apiFakeProductsRoutes
} from "./routes/fakeProducts.routes.js";
import {
  homeRouter as homeRouter
} from "./routes/home.routes.js";
import {
  authWebRouter as authWebRoutes
} from "./routes/auth.routes.js";

//routes-------------------------------------------Rutes
app.use("/api/productos-test", apiFakeProductsRoutes);
app.use(homeRouter);
app.use(authWebRoutes);

//ruta 404
app.all("*", (req, res) => {
  res.status(404).send("Ruta no encontrada");
});

//Socket--------------------------------------------------------Socket
import {
  socketModule
} from "./utils/socket.js";
socketModule(io);