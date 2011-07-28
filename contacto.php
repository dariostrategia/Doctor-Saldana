<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
<title>Dr. Saldaña</title>
<link href="saldana.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="js/jquery.js"></script>
<style type="text/css">
.inn {
	float: left;
}
.inn img.a {
	position: absolute;
	z-index: 10;
}
 
.inn img.b {
	position: absolute;
}
face {
	float: left;
}
.face img.a {
	position: absolute;
	z-index: 10;
}
 
.face img.b {
	position: absolute;
}
.twit {
	float: left;
}
.twit img.a {
	position: absolute;
	z-index: 10;
}
 
.twit img.b {
	position: absolute;
}
</style>

<script type='text/javascript'>
$(document).ready(function(){
$("img.a").hover(
function() {
$(this).stop().animate({"opacity": "0"}, "medium");
},
function() {
$(this).stop().animate({"opacity": "1"}, "medium");
});
 
});
</script>

</head>

<script src="js/libs/modernizr-1.7.min.js"></script>
<body>
  <div class="bgndcntnr"><div id="contenedor" class="container">
	<div class="logo"><img src="img/logo.png" width="243" height="98"></div>
<div class="nav"><ul>
    		<?php include 'elementos-de-la-pagina/navegacion.php'; ?>
        </ul></div>
    <div class="descripcion">Localiza el consultorio del Experto en Encías, para que sepas donde se encuentra la cura de tus problemas de encías.
</div>    
    <div class="mapa_contacto"><a href="http://maps.google.com.mx/?ll=29.087602,-110.978951&spn=0.012695,0.030899&z=16" target="_new"><img src="img/mapa_contacto.png" width="859" height="465" border="0" title="Mapa de el consultorio"></a></div>
    <div class="columna1"><h2>Consultorio</h2>
      Luis Donaldo Colosio #389 
      <br>
      Col. Villa Satélite
      <br>
      CP. 83200
Hermosillo, Sonora, México </div>
    <div class="columna2"><h2>Teléfono</h2>
      01(662) 216-18-23 <br>
  01(662) 218-18-23 </div>
  <div class="columna3"><h2>E-mail</h2>
Citas@expertoenencias.com</div>
<div class="formulario"><form action="" method="get">
  <label for="nombre">Nombre</label>
  <input name="nombre" type="text" id="nombre" size="60" placeholder="Nombre">
  <label for="edad">Edad</label>
  <input name="edad" type="text" id="edad" size="31" placeholder="Edad">
  <br><br>
  <label for="sexo">Sexo</label>
  <select name="sexo" id="sexo">
    <option value="Hombre">Hombre</option>
    <option value="Mujer">Mujer</option>
  </select>
  &nbsp;
  <label for="telefono">Teléfono</label>
  <input name="telefono" type="text" id="telefono" size="30" placeholder="Teléfono">
  <label for="email">E-mail</label>
  <input name="email" type="text" id="email" size="33" placeholder="E-mail">
  <br><br>
  <label id="comments" for="comentario">Comentario</label>
  <textarea name="comentario" cols="120" rows="10" id="comentario" placeholder="Comentario"></textarea>
  <input type="submit" name="button" id="button" value="Enviar">
</form></div>
	<div class="redes">Síguenos <br>
    en:
    	<br>
<div class="inn"><img src="img/redes_in2.jpg" width="41" height="33" class="a"><img src="img/redes_in.jpg" width="41" height="33" class="b"></div><br><br>
<div class="face"><img src="img/redes_face2.jpg" width="41" height="33" class="a"><img src="img/redes_face.jpg" width="41" height="33" class="b"></div><br><br>
<div class="twit"><a href="http://twitter.com" target="_new"><img src="img/redes_twit2.jpg" width="41" height="27" border="0" class="a"></a><img src="img/redes_twit.jpg" width="41" height="27" class="b"></div></div>
</div>
<?php include 'elementos-de-la-pagina/telefono.php';?>
</div> 	<?php include 'elementos-de-la-pagina/telefono.php'; ?></body>
</html>
