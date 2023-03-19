const controller = {};


controller.list = (req, res) => {
  req.getConnection((err,conn) => { 
    conn.query('select * from usuario', (err, usuarios) => {
      if (err) {
        next(err);
          res.json(err)
      }
      console.log(usuarios)
      res.render('usuarios', {
        data: usuarios
      });
    });
  });
};

controller.guardar = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query('insert into usuario set ?', [data], (err, usuario) => {
      res.redirect('/');
    });
   })
}

module.exports = controller;