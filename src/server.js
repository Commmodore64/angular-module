const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configura la conexión a MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Hola_123',
  database: 'test-formulario'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// Rutas CRUD para Maquinaria

app.post('/maquinaria', (req, res) => {
  const { mayor, menor, tipo_maquina, marca, modelo, year, serie, combustible, placas, qr, horas_trabajadas, mantenimientos, color } = req.body;
  const query = 'INSERT INTO maquinaria (mayor, menor, tipo_maquina, marca, modelo, year, serie, combustible, placas, qr, horas_trabajadas, mantenimientos, color) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [mayor, menor, tipo_maquina, marca, modelo, year, serie, combustible, placas, qr, horas_trabajadas, mantenimientos, color], (err, result) => {
    if (err) throw err;
    res.status(201).send({ id: result.insertId, mayor, menor, tipo_maquina, marca, modelo, year, serie, combustible, placas, qr, horas_trabajadas, mantenimientos, color });
  });
});

app.get('/maquinaria', (req, res) => {
  const query = 'SELECT * FROM maquinaria';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.status(200).send(results);
  });
});

app.put('/maquinaria/:id', (req, res) => {
  const { id } = req.params;
  const { mayor, menor, tipo_maquina, marca, modelo, year, serie, combustible, placas, qr, horas_trabajadas, mantenimientos, color } = req.body;
  const query = 'UPDATE maquinaria SET mayor = ?, menor = ?, tipo_maquina = ?, marca = ?, modelo = ?, year = ?, serie = ?, combustible = ?, placas = ?, qr = ?, horas_trabajadas = ?, mantenimientos = ?, color = ? WHERE id = ?';
  db.query(query, [mayor, menor, tipo_maquina, marca, modelo, year, serie, combustible, placas, qr, horas_trabajadas, mantenimientos, color, id], (err, result) => {
    if (err) throw err;
    res.status(200).send({ id, mayor, menor, tipo_maquina, marca, modelo, year, serie, combustible, placas, qr, horas_trabajadas, mantenimientos, color });
  });
});

app.delete('/maquinaria/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM maquinaria WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) throw err;
    res.status(204).send();
  });
});

// Repite las rutas CRUD para las demás tablas: equipo_menor, herramienta, material_construccion, insumos_consumibles

// CRUD para Equipo Menor
app.post('/equipo_menor', (req, res) => {
  const { tipo_herramienta, marca, modelo, year, serie, combustible, placas, qr, horas_trabajadas, mantenimientos, color } = req.body;
  const query = 'INSERT INTO equipo_menor (tipo_herramienta, marca, modelo, year, serie, combustible, placas, qr, horas_trabajadas, mantenimientos, color) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [tipo_herramienta, marca, modelo, year, serie, combustible, placas, qr, horas_trabajadas, mantenimientos, color], (err, result) => {
    if (err) throw err;
    res.status(201).send({ id: result.insertId, tipo_herramienta, marca, modelo, year, serie, combustible, placas, qr, horas_trabajadas, mantenimientos, color });
  });
});

app.get('/equipo_menor', (req, res) => {
  const query = 'SELECT * FROM equipo_menor';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.status(200).send(results);
  });
});

app.put('/equipo_menor/:id', (req, res) => {
  const { id } = req.params;
  const { tipo_herramienta, marca, modelo, year, serie, combustible, placas, qr, horas_trabajadas, mantenimientos, color } = req.body;
  const query = 'UPDATE equipo_menor SET tipo_herramienta = ?, marca = ?, modelo = ?, year = ?, serie = ?, combustible = ?, placas = ?, qr = ?, horas_trabajadas = ?, mantenimientos = ?, color = ? WHERE id = ?';
  db.query(query, [tipo_herramienta, marca, modelo, year, serie, combustible, placas, qr, horas_trabajadas, mantenimientos, color, id], (err, result) => {
    if (err) throw err;
    res.status(200).send({ id, tipo_herramienta, marca, modelo, year, serie, combustible, placas, qr, horas_trabajadas, mantenimientos, color });
  });
});

app.delete('/equipo_menor/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM equipo_menor WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) throw err;
    res.status(204).send();
  });
});

// CRUD para Herramienta
app.post('/herramienta', (req, res) => {
  const { descripcion, unidad, no_eco, qr } = req.body;
  const query = 'INSERT INTO herramienta (descripcion, unidad, no_eco, qr) VALUES (?, ?, ?, ?)';
  db.query(query, [descripcion, unidad, no_eco, qr], (err, result) => {
    if (err) throw err;
    res.status(201).send({ id: result.insertId, descripcion, unidad, no_eco, qr });
  });
});

app.get('/herramienta', (req, res) => {
  const query = 'SELECT * FROM herramienta';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.status(200).send(results);
  });
});

app.put('/herramienta/:id', (req, res) => {
  const { id } = req.params;
  const { descripcion, unidad, no_eco, qr } = req.body;
  const query = 'UPDATE herramienta SET descripcion = ?, unidad = ?, no_eco = ?, qr = ? WHERE id = ?';
  db.query(query, [descripcion, unidad, no_eco, qr, id], (err, result) => {
    if (err) throw err;
    res.status(200).send({ id, descripcion, unidad, no_eco, qr });
  });
});

app.delete('/herramienta/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM herramienta WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) throw err;
    res.status(204).send();
  });
});

// CRUD para Material Construcción
app.post('/material_construccion', (req, res) => {
  const { familia, linea, materiales, descripcion, unidad_medida, cantidad } = req.body;
  const query = 'INSERT INTO material_construccion (familia, linea, materiales, descripcion, unidad_medida, cantidad) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [familia, linea, materiales, descripcion, unidad_medida, cantidad], (err, result) => {
    if (err) throw err;
    res.status(201).send({ id: result.insertId, familia, linea, materiales, descripcion, unidad_medida, cantidad });
  });
});

app.get('/material_construccion', (req, res) => {
  const query = 'SELECT * FROM material_construccion';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.status(200).send(results);
  });
});

app.put('/material_construccion/:id', (req, res) => {
  const { id } = req.params;
  const { familia, linea, materiales, descripcion, unidad_medida, cantidad } = req.body;
  const query = 'UPDATE material_construccion SET familia = ?, linea = ?, materiales = ?, descripcion = ?, unidad_medida = ?, cantidad = ? WHERE id = ?';
  db.query(query, [familia, linea, materiales, descripcion, unidad_medida, cantidad, id], (err, result) => {
    if (err) throw err;
    res.status(200).send({ id, familia, linea, materiales, descripcion, unidad_medida, cantidad });
  });
});

app.delete('/material_construccion/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM material_construccion WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) throw err;
    res.status(204).send();
  });
});

// CRUD para Insumos Consumibles
app.post('/insumos_consumibles', (req, res) => {
  const { familia, linea, materiales, descripcion, unidad_medida, cantidad } = req.body;
  const query = 'INSERT INTO insumos_consumibles (familia, linea, materiales, descripcion, unidad_medida, cantidad) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [familia, linea, materiales, descripcion, unidad_medida, cantidad], (err, result) => {
    if (err) throw err;
    res.status(201).send({ id: result.insertId, familia, linea, materiales, descripcion, unidad_medida, cantidad });
  });
});

app.get('/insumos_consumibles', (req, res) => {
  const query = 'SELECT * FROM insumos_consumibles';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.status(200).send(results);
  });
});

app.put('/insumos_consumibles/:id', (req, res) => {
  const { id } = req.params;
  const { familia, linea, materiales, descripcion, unidad_medida, cantidad } = req.body;
  const query = 'UPDATE insumos_consumibles SET familia = ?, linea = ?, materiales = ?, descripcion = ?, unidad_medida = ?, cantidad = ? WHERE id = ?';
  db.query(query, [familia, linea, materiales, descripcion, unidad_medida, cantidad, id], (err, result) => {
    if (err) throw err;
    res.status(200).send({ id, familia, linea, materiales, descripcion, unidad_medida, cantidad });
  });
});

app.delete('/insumos_consumibles/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM insumos_consumibles WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) throw err;
    res.status(204).send();
  });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
