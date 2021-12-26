var nodemailer = require("nodemailer");
var express = require("express");
var app = express();
var path = require("path");
const { request } = require("http");

app.use(express.json());
app.use(express.urlencoded( { extended: false } ));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
  });

  app.get('/css/style.css', function(req, res) {
    res.sendFile(path.join(__dirname, '../css/style.css'));
  });

  app.get('/css/popup.css', function(req, res) {
    res.sendFile(path.join(__dirname, '../css/popup.css'));
  });

  app.get('/css/carousel.css', function(req, res) {
    res.sendFile(path.join(__dirname, '../css/carousel.css'));
  });

  app.get('/js/imagesloaded.pkgd.min.js', function(req, res) {
    res.sendFile(path.join(__dirname, '../js/imagesloaded.pkgd.min.js'));
  });

  app.get('/js/index.js', function(req, res) {
    res.sendFile(path.join(__dirname, '../js/index.js'));
  });

  app.get('/js/isotope.pkgd.min.js', function(req, res) {
    res.sendFile(path.join(__dirname, '../js/isotope.pkgd.min.js'));
  });

  app.get('/js/jquery.appear.min.js', function(req, res) {
    res.sendFile(path.join(__dirname, '../js/jquery.appear.min.js'));
  });

  app.get('/js/jquery.countTo.min.js', function(req, res) {
    res.sendFile(path.join(__dirname, '../js/jquery.countTo.min.js'));
  });

  app.get('/js/jquery.easing.min.js', function(req, res) {
    res.sendFile(path.join(__dirname, '../js/jquery.easing.min.js'));
  });

  app.get('/js/jquery.magnific-popup.min.js', function(req, res) {
    res.sendFile(path.join(__dirname, '../js/jquery.magnific-popup.min.js'));
  });

  app.get('/js/jquery.min.js', function(req, res) {
    res.sendFile(path.join(__dirname, '../js/jquery.min.js'));
  });

  app.get('/js/owl.carousel.min.js', function(req, res) {
    res.sendFile(path.join(__dirname, '../js/owl.carousel.min.js'));
  });

  app.get('/js/parallaxie.min.js', function(req, res) {
    res.sendFile(path.join(__dirname, '../js/parallaxie.min.js'));
  });

  app.get('/js/switcher.min.js', function(req, res) {
    res.sendFile(path.join(__dirname, '../js/switcher.min.js'));
  });
  
  app.get('/js/typed.min.js', function(req, res) {
    res.sendFile(path.join(__dirname, '../js/typed.min.js'));
  });

  app.get('/img/back2.jpg', function(req, res) {
    res.sendFile(path.join(__dirname, '../img/back2.jpg'));
  });

  app.get('/img/milany-vaca.jpg', function(req, res) {
    res.sendFile(path.join(__dirname, '../img/milany-vaca.jpg'));
  });

  app.get('/img/proyecto.jpg', function(req, res) {
    res.sendFile(path.join(__dirname, '../img/proyecto.jpg'));
  });

app.post("/send-email", (request, response) => {
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        secure: true,
        port: 465,
        auth: {
            user: 'youremail@gmail.com',
            pass: 'your_secret_password'
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    var textBody = `De: ${request.body.name} <br>Asunto: ${request.body.asunto} <br>Correo: ${request.body.email} <br>Mensaje: ${request.body.message}`;
	var htmlBody = `<h2>Mensaje enviado desde el portafolio</h2><p>De: ${request.body.name} <br>Asunto: ${request.body.asunto} <br>Correo: <a href="mailto:${request.body.email}">${request.body.email}</a></p><p><br>Mensaje: ${request.body.message}</p>`;

    var mailOptions = {
        from: "your_email",
        to: "your_email",
        subject: `${request.body.asunto}`,
        text: textBody,
		html: htmlBody
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            response.status(500).send(error.message);
        } else {
            console.log ("Mensaje enviado correctamente!");
            response.status(200).jsonp(request.body);
        }
    });

});

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
})
