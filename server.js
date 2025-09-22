const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Configurar EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rutas
const topicRoutes = require("./src/routes/topicRoutes");
app.use("/", topicRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// para habilitar archivos estáticos
app.use(express.static(path.join(__dirname, "src/public")));
