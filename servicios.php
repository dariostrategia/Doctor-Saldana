<!doctype html>
<!--[if lt IE 7 ]> <html class="no-js ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]>    <html class="no-js ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]>    <html class="no-js ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <title>Dr. Saldaña | Servicios</title>
  <meta name="description" content="">
  <meta name="author" content="">

  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!--<link rel="shortcut icon" href="/favicon.ico">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">-->

  <link rel="stylesheet" href="saldana.css">
  <script src="js/libs/modernizr-1.7.min.js"></script>
  <script src="js/jquery-1.2.1.pack.js" charset="utf-8"></script>
  <!-- scripts concatenated and minified via ant build script-->
  <script src="js/plugins.js"></script>
  <script src="js/jquery.scrollTo-1.4.2-min.js" charset="utf-8"></script>
  <script src="js/jquery.localscroll-1.2.7-min.js" charset="utf-8"></script>
  <script src="js/jquery.serialScroll-1.2.2-min.js" charset="utf-8"></script>
  <script src="js/script.js"></script>
  <script src="js/codaslider.js" type="text/javascript" charset="utf-8"></script>
  
  <!-- end scripts-->

  <!--[if lt IE 7 ]>
    <script src="js/libs/dd_belatedpng.js"></script>
    <script>DD_belatedPNG.fix("img, .png_bg");</script>
  <![endif]-->
</head>

<body>

  <div id="contenedor" class="container">
    <header>
			<?php include 'elementos-de-la-pagina/header.php';?>
    </header>
    <div id="main" role="main">
      <div id="main-inner">
        <div class="sonrisasaldana"></div><!-- .sonrisasaldana -->
        <div class="servicios-up">
        <div class="sectionimg"></div><!-- .sectionimg -->
        <div id="slider">  
          <ul class="navigation">
            <li class="servicioboton gingivitis"><a href="#gingivitis" alt="Gingivitis">Gingivitis</a></li>
            <li class="servicioboton periodontitis"><a href="#periodontitis" alt="Periodontitis">Periodontitis</a></li>
            <li class="servicioboton implantes"><a href="#implantes" alt="Implantes">Implantes</a></li>
            <li class="servicioboton recontorneo"><a href="#recontorneo" alt="Recontorneo">Recontorneo</a></li>
            <li class="servicioboton recesion"><a href="#recesion" alt="Recesión">Recesión</a></li>
          </ul>

          <div class="scroll">
            <div class="scrollContainer">
              <?php include 'servicios/gingivitis.php'; ?>
              <?php include 'servicios/periodontitis.php'; ?>
              <?php include 'servicios/implantes.php'; ?>
              <?php include 'servicios/recontorneo.php'; ?>
              <?php include 'servicios/recesion.php'; ?>
            </div>
          </div>
        </div>
			</div><!-- #main-inner -->
    </div>
    <footer>
			
    </footer>
  </div> <!-- eo #container -->
	<?php include 'elementos-de-la-pagina/telefono.php'; ?>


</body>
</html>