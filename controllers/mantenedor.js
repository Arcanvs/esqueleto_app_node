// Buscar Todo
exports.findAll = function(req, res){
  console.log('GET Nombres');
  var consulta = 'SELECT * FROM prueba';
  db.query(consulta, function(error, results){
    if(error) throw error;
    res.status(200).send(results);
  });
};
// Añade 1
exports.add = function(req, res, next){
  console.log('POST Nombres');
  var consulta = 'INSERT INTO prueba (`nombre`, `apellido`) VALUES ("'+req.query.nombre+'","'+req.query.apellido+'")';
  db.query(consulta, function(error, success){
    if(error) throw error;
    res.status(200).send(success);
  });
}
// Actualiza 1
exports.update = function(req, res, next){
  console.log('PUT Nombres');
  var consulta = 'UPDATE prueba SET `nombre` = "'+req.query.nombre+'", `apellido`="'+req.query.apellido+'" WHERE `idnombre` ="'+req.query.idnombre+'"';
  db.query(consulta, function(error, success){
    if(error) throw error;
    res.status(200).send(success);
  });
}
// Borra 1
exports.delete = function(req, res, next){
  console.log('DELETE Nombres');
  var consulta = 'DELETE FROM prueba WHERE `idnombre` = "'+req.query.idnombre+'"';
  db.query(consulta, function(error, success){
    if(error) throw error;
    res.status(200).send(success);
  });
}
