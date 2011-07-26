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
  <script src="js/jquery-1.2.1.pack.js" type="text/javascript" charset="utf-8"></script>
  <!-- scripts concatenated and minified via ant build script-->
  <script src="js/plugins.js"></script>
  <script src="js/script.js"></script>
  <script src="js/jquery-easing.1.2.pack.js" type="text/javascript" charset="utf-8"></script>
  <script src="js/jquery-easing-compatibility.1.2.pack.js" type="text/javascript" charset="utf-8"></script>
  <script src="js/coda-slider.1.1.1.js" type="text/javascript" charset="utf-8"></script>
  <script type="text/javascript">
		jQuery(window).bind("load", function() {
			jQuery("div#slider1").codaSlider()
			// jQuery("div#slider2").codaSlider()
			// etc, etc. Beware of cross-linking difficulties if using multiple sliders on one page.
		});
	</script>
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
					<div class="sectionimg">
					</div><!-- .sectionimg -->
					<ul>
						<li class="servicioboton gingivitis   "><a href="#1" alt"Gingivitis    "> Gingivitis    </a></li>
						<li class="servicioboton periodontitis"><a href="#2" alt"Periodontitis "> Periodontitis </a></li>
						<li class="servicioboton implantes    "><a href="#3" alt"Implantes     "> Implantes     </a></li>
						<li class="servicioboton recontorneo  "><a href="#4" alt"Recontorneo   "> Recontorneo   </a></li>
						<li class="servicioboton recesion     "><a href="#5" alt"Recesión      "> Recesión      </a></li>
					</ul>
				</div>
				<div class="servicios-down">
				  <?php include 'servicios/noscript.php'; ?>
          <div class="slider-wrap">
          	<div id="slider1" class="csw">
          		<div class="panelContainer">

          			<div class="panel" title="Panel 1">
          				<div class="wrapper"><?php include 'servicios/gingivitis.php';?>
          				</div>
          			</div>
          			<div class="panel" title="Panel 2">
          				<div class="wrapper"><?php include 'servicios/periodontitis.php';?>
          				</div>
          			</div>		
          			<div class="panel" title="Panel 3">
          				<div class="wrapper"><?php include 'servicios/implantes.php';?>
          				</div>
          			</div>
          			<div class="panel" title="Panel 4">
          				<div class="wrapper"><?php include 'servicios/recontorneo.php';?>
          				</div>
          			</div>
          			<div class="panel" title="Panel 5">
          				<div class="wrapper"><?php include 'servicios/recesion.php'; ?>
          				</div>
          			</div>

          		</div><!-- .panelContainer -->
          	</div><!-- #slider1 -->
          </div><!-- .slider-wrap -->
				</div>	
			</div><!-- #main-inner -->
    </div>
    <footer>
			
    </footer>
  </div> <!-- eo #container -->
	<?php include 'elementos-de-la-pagina/telefono.php'; ?>


</body>
</html>