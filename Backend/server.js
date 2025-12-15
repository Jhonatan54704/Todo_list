const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const Task = require("./models/Task");

const app = express();
app.use(cors());
app.use(express.json());

// Conexión MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.error("Error MongoDB:", err));

// Obtener tareas
app.get("/tasks", async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  res.json(tasks);
});

// Crear tarea
app.post("/tasks", async (req, res) => {
  const task = new Task({
    text: req.body.text,
    priority: req.body.priority,
    dueDate: req.body.dueDate
  });
  await task.save();
  res.json(task);
});

// Actualizar estado
app.put("/tasks/:id", async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    { completed: req.body.completed },
    { new: true }
  );
  res.json(task);
});

// Eliminar tarea
app.delete("/tasks/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Tarea eliminada" });
});

app.get("/", (req, res) => {
  res.send("API Todo List funcionando 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
