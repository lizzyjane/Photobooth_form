<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <title>Wijnhavenfestival - MEDLAB2</title>
  <link rel="icon" href="" type="image/x-icon"/>
  <link rel="stylesheet" type="text/css" href="style.css">
  <script src="js/main.min.js" type="text/javascript"></script>
</head>
<body>

  <section class="header">

  <div class="headerbar">
  </div>

    <div class="wrap">
      <div class="col-lg-12">
     <!--
        <div class="relieve__logo">
          <img class="relieve__imglogo" src="img/relieve_logo.png" alt="relieve_logo">
        </div>
      -->
    </div>
  </div>
</section>


    <div id="wrapper">
        <div class="container">
            <div class="slider">
                <div class="form-container">

                    <div class="form form-1" data-id="1">
                        <div class="form-title col-lg-12">
                           <div class="banner">
                               <img class="bannerimg" src="img/banner.png" alt="banner">
                               <h1 class="bannertext">Hoeveel personen?</h1>
                           </div>
                        </div>
                        <div class="form-content">
                            <ul class="list">

                            <div class="pirateperson" id="pirateperson1">
                                <img class="pirate" id="pirate1" src="img/piratepatch1.png" alt="pirate" data-id="1">
                                <li class="person" id="person1" data-id="1">1</li>
                            </div>

                            <div class="pirateperson" id="pirateperson2">
                                <img class="pirate" id="pirate2" src="img/piratepatch2.png" alt="pirate" data-id="2">
                                <li class="person" id="person2" data-id="2">2</li>
                            </div>

                            <div class="pirateperson" id="pirateperson3">
                                <img class="pirate" id="pirate3" src="img/piratepatch3.png" alt="pirate" data-id="3">
                                <li class="person" id="person3" data-id="3">3</li>
                            </div>

                            <div class="pirateperson" id="pirateperson4">
                                <img class="pirate" id="pirate4" src="img/piratepatch4.png" alt="pirate" data-id="4">
                                <li class="person" id="person4" data-id="4">4</li>
                            </div>

                            <div class="pirateperson" id="pirateperson5">
                                <img class="pirate" id="pirate5" src="img/piratepatch5.png" alt="pirate" data-id="5">
                                <li class="person" id="person5" data-id="5">5</li>
                            </div>
                            </ul>
                        </div>
                        <div class="arrow-right arrow-right-1">
                            <img class="arrow-right_img" src="img/arrow_right.png" alt="right_arrow">
                        </div>
                    </div>

                    <div class="form form-2" data-id="2">


                        <div class="banner">
                            <img class="bannerimg" src="img/banner.png" alt="banner">
                            <h1 class="bannertext">Welke achtergrond?</h1>
                        </div>

                        <div class="form-content">
                            <div id="" class="bg-list">
                                <ul class="list">
                                <div class="center-bg">
                                    <li class="background" data-id="1" id="background1">
                                        <img class="background" src="img/backgrounds/foto1.png">
                                    </li>

                                    <li class="background" data-id="2" id="background2">
                                        <img class="background" src="img/backgrounds/foto2.png">
                                    </li>

                                    <li class="background" data-id="3" id="background3">
                                        <img class="background" src="img/backgrounds/foto3.png">
                                    </li>

                                    <li class="background" data-id="4" id="background4">
                                        <img class="background" src="img/backgrounds/foto4.png">
                                    </li>

                                    <li class="background" data-id="5" id="background5">
                                        <img class="background" src="img/backgrounds/foto5.png">
                                    </li>

                                    <li class="background" data-id="6" id="background6">
                                        <img class="background" src="img/backgrounds/foto6.png">
                                    </li>

                                    <li class="background" data-id="7" id="background7">
                                        <img class="background" src="img/backgrounds/foto7.png">
                                    </li>

                                    <li class="background" data-id="8" id="background8">
                                        <img class="background" src="img/backgrounds/foto8.png">
                                    </li>

                                    <li class="background" data-id="9" id="background9">
                                        <img class="background" src="img/backgrounds/foto9.png">
                                    </li>

                                    <li class="background" data-id="10" id="background10">
                                        <img class="background" src="img/backgrounds/foto10.png">
                                    </li>

                                    <li class="background" data-id="11" id="background11">
                                        <img class="background" src="img/backgrounds/foto11.png">
                                    </li>

                                    <li class="background" data-id="12" id="background12">
                                        <img class="background" src="img/backgrounds/foto12.png">
                                    </li>

                                    <li class="background" data-id="13" id="background13">
                                        <img class="background" src="img/backgrounds/foto13.png">
                                    </li>

                                    <li class="background" data-id="14" id="background14">
                                        <img class="background" src="img/backgrounds/foto14.png">
                                    </li>

                                    <li class="background" data-id="15" id="background15">
                                        <img class="background" src="img/backgrounds/foto15.png">
                                    </li>
                                </div>
                                </ul>
                            </div>
                        </div>
                        <div class="arrow-left arrow-left-1">
                             <img class="arrow-left_img" src="img/arrow_left.png" alt="left_arrow">
                        </div>

                        <div class="arrow-right arrow-right-2">
                             <img class="arrow-right_img" src="img/arrow_right.png" alt="right_arrow">
                        </div>
                    </div>
                    <div class="form form-3" data-id="3">

                        <div class="banner">
                            <img class="bannerimg" src="img/banner.png" alt="banner">
                            <h1 class="bannertext">Uw gegevens</h1>
                        </div>

                        <div class="form-content">
                            <form method="POST" action="post.php">
                                <input class="persons" id="input-field-persons" type="hidden" name="persons" required>
                                <input class="pictures" type="hidden" id="input-field-backgrounds" name="pictures" required>
                                <h1 class="required" >Naam</h1>
                                <input class="name input" type="text" name="name" required>
                                <h1 class="required" >E-mail</h1>
                                <input class="email input" type="email" name="email" required>

                        </div>
                        <div class="arrow-left arrow-left-2">
                            <img class="arrow-left_img" src="img/arrow_left.png" alt="left_arrow">
                        </div>

                        <div class="form-content">
                            <input type="submit" name="submit" value="VERSTUUR" />
                            </form>
                        </div>
                    </div>
                    <div class="form form-4" data-id="4">
                        <div class="banner">
                            <img class="bannerimg" src="img/banner.png" alt="banner">
                            <h1 class="bannertext">Bedankt!</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <img class="parrot" src="img/parrot.png" alt="parrot">
    <div class="footerbar">
    </div>

<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
<script src="js/main.js"></script>
</body>
</html>