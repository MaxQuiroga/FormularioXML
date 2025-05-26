const express = require("express");
const fs = require("fs");
const path = require("path");
const xml2js = require("xml2js");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
const XML_PATH = path.join(__dirname, "datos.xml");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Ruta para recibir personas nuevas
app.post("/agregar-persona", (req, res) => {
  const { nombre, edad } = req.body;

  fs.readFile(XML_PATH, (err, data) => {
    if (err) return res.status(500).send("Error al leer XML");

    xml2js.parseString(data, (err, result) => {
      if (err) return res.status(500).send("Error al parsear XML");

      // Si no hay personas aún, crear el nodo raíz
      if (!result.personas) result.personas = {};
      if (!result.personas.persona) result.personas.persona = [];

      result.personas.persona.push({ nombre: [nombre], edad: [edad] });

      const builder = new xml2js.Builder();
      const xml = builder.buildObject(result);

      fs.writeFile(XML_PATH, xml, (err) => {
        if (err) return res.status(500).send("Error al escribir XML");
        res.send("Persona agregada correctamente");
      });
    });
  });
});

app.get("/personas", (req, res) => {
  fs.readFile(XML_PATH, (err, data) => {
    if (err) return res.status(500).send("Error al leer XML");

    xml2js.parseString(data, (err, result) => {
      if (err) return res.status(500).send("Error al parsear XML");

      const personas = result.personas?.persona || [];
      const lista = personas.map((p) => ({
        nombre: p.nombre?.[0] || "",
        edad: p.edad?.[0] || "",
      }));

      res.json(lista);
    });
  });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
