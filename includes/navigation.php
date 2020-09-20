<!DOCTYPE html>
<html lang="cs">
<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script defer src="https://www.googletagmanager.com/gtag/js?id=UA-170649735-1" type="text/javascript"></script>
    <script defer type="text/javascript">
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-170649735-1');
    </script>

    <meta charset="UTF-8">
    <meta property="og:image" content="https://amnionweb.cz/images/notebook-1920.jpg" />
    <meta property="og:title" content="AmnioN web | <?php echo $title ?>" />
    <meta property="og:image:width" content="1920" />
    <meta property="og:image:height" content="1440" />
    <meta property="og:image:secure_url" content="https://amnionweb.cz/images/notebook-1920.jpg" />
    <meta property="og:type" content="website" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Představíme Váš projekt světu. Tvoříme moderní weby na míru pro české startupy a podniky.">
    <meta name="keywords" content="tvorba, web">
    <meta name="author" content="AmnioN web">
    <title>AmnioN web | <?php echo $title ?></title>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" media="print" onload="this.media='all'">
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" href="images/amnion-favicon.png">
    <link rel="preconnect" as="script" href="https://connect.facebook.net">
    <link rel="preconnect" as="script" href="https://www.facebook.com">
    <link rel="preconnect" as="script" href="https://www.google-analytics.com">
</head>
    <body>
        <!-- Load Facebook SDK for JavaScript -->
      <script type="text/javascript" defer>
        function ready(callbackFunc) {
            if (document.readyState !== 'loading') {
                // Document is already ready, call the callback directly
                callbackFunc();
            } else if (document.addEventListener) {
                // All modern browsers to register DOMContentLoaded
                document.addEventListener('DOMContentLoaded', callbackFunc);
            } else {
                // Old IE browsers
                document.attachEvent('onreadystatechange', function() {
                if (document.readyState === 'complete') {
                    callbackFunc();
                }
                });
            }
        }
        ready(() => {
            setTimeout(() => {
                window.fbAsyncInit = function() {
                FB.init({
                    xfbml            : true,
                    version          : 'v7.0'
                });
                };

                (function(d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s); js.id = id;
                    js.src = 'https://connect.facebook.net/cs_CZ/sdk/xfbml.customerchat.js';
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));                
            }, 1000);
        })</script>

      <!-- Your Chat Plugin code -->
      <div class="fb-customerchat" attribution=setup_tool page_id="108782017523781" greeting_dialog_display="hide" logged_in_greeting="Zdravíme! Nyní nás můžete kontaktovat i přes messenger." logged_out_greeting="Zdravíme! Nyní nás můžete kontaktovat i přes messenger."></div>

        <!-- HEADER -->
        <header class="header <?php if ($title === "Blog") echo "blog__header" ?>" id="header" style="<?php if ($title === "Offline" || $title === "Blog") echo "height: 20rem" ?>">
            <div class="menu">
                <ul class="menu__list" id="menu">
                    <li>
                        <img src="img/AmnionLogo-white.png" alt="AmnioN logo"></img>
                        <a href="/">AmnioN web</a>
                    </li>
                    <li><a href="/">Domů</a></li>
                    <li><a href="o-nas">O nás</a></li>
                    <li><a href="portfolio">Portfolio</a></li>
                    <li><a href="sluzby">Služby</a></li>
                    <!-- <li><a href="cenik">Ceník</a></li> -->
                    <li><a href="kontakt">Kontakt</a></li>
                    <!-- <li><a href="blog">Blog</a></li> -->
                </ul>
                <ul class="menu__list--mobile">
                    <li>
                        <img src="img/AmnionLogo-white.png" alt="AmnioN logo"></img>
                        <a href="/">AmnioN web</a>
                    </li>
                    <li class="menu__list--mobile--btn" id="ham-btn">
                        <div class="menu__list--mobile--hamburger"></div>
                    </li>
                </ul>
                <ul class="menu__list--mobile--menu" id="mob-menu">
                    <li><img src="img/AmnionLogo-white.png" alt="AmnioN logo"></img></li>
                    <li><a href="/">Domů</a></li>
                    <li><a href="o-nas">O nás</a></li>
                    <li><a href="portfolio">Portfolio</a></li>
                    <li><a href="sluzby">Služby</a></li>
                    <!-- <li><a href="cenik">Ceník</a></li> -->
                    <li><a href="kontakt">Kontakt</a></li>
                    <!-- <li><a href="blog">Blog</a></li> -->
                </ul>
            </div>
            <div id="fb-root"></div>
