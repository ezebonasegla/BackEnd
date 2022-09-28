//Server
import express from "express";
import http from "http";
import { Server as ioServer } from "socket.io";
const app = express();
export const serverHttp = http.createServer(app);
const io = new ioServer(serverHttp);

//imports--------------------------------------------------------imports
//dirname
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

//middlewears--------------------------------------------------------middlewears
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Motor EJS--------------------------------------------------------Motor EJS
app.set("views", "./views");
app.set("view engine", "ejs");

//rutas--------------------------------------------------------rutas
//ruta principal
app.get("/", (req, res) => {
  res.render("home", { title: "Principal" });
});

//Rutes Requires---------------------------------------------------
import { router as apiFakeProductsRoutes } from "./routes/fakeProducts.routes.js";
import { router as apiProductsRoutes } from "./routes/products.routes.js";
import { router as apiCarritosRoutes } from "./routes/carritos.routes.js";
//routes-------------------------------------------Rutes
app.use("/api/productos-test", apiFakeProductsRoutes);
app.use("/api/productos", apiProductsRoutes);
app.use("/api/carritos", apiCarritosRoutes);

//ruta 404
app.all("*", (req, res) => {
  res.status(404).send("Ruta no encontrada");
});

//Socket--------------------------------------------------------Socket
import { socketModule } from "./utils/socket.js";
socketModule(io);
