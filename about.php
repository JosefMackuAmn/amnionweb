<?php
    include('includes/functions.php');
    includeWithVariables('includes/navigation.php', array('title' => 'O nás'));
?>
            <div class="about__header__background header__background animBackgroundBack">&nbsp;</div>
            <div class="about__header__background header__background animBackground">&nbsp;</div>
            <div class="about__header__title header__title">AmnioN TEAM</div>
        </header>

        <!-- MAIN -->
        <main class="main">

            <!-- PEOPLE -->
            <section class="about__people">
                <container class="about__people__container">
                    <div class="person-card">
                        <div class="person-card__photo" style="background-image: url('./images/patrik-640.jpg'); background-size: 160%; background-position: 33% 33%;"></div>
                        <h3 class="person-card__name">Patrik Daniel</h3>
                        <p class="person-card__specification">Kodér,</p>
                        <p class="person-card__specification">designer</p>
                    </div>
                    <div class="person-card">
                        <div class="person-card__photo" style="background-image: url('./images/jirka-640.jpg'); background-size: cover; background-position-y: 15%;"></div>
                        <h3 class="person-card__name">Jiří Fligl</h3>
                        <p class="person-card__specification">Designer,</p>
                        <p class="person-card__specification">marketing, SEO</p>
                    </div>
                    <div class="person-card">
                        <div class="person-card__photo" style="background-image: url('./images/josef-640.jpg'); background-size: cover; background-position-y: 47%;"></div>
                        <h3 class="person-card__name">Josef Macků</h3>
                        <p class="person-card__specification">Programátor,</p>
                        <p class="person-card__specification">manager</p>
                    </div>
                    <div class="person-card">
                        <div class="person-card__photo" style="background-image: url('./images/ondrej-640.jpg'); background-size: cover;"></div>
                        <h3 class="person-card__name">Ondřej Vitula</h3>
                        <p class="person-card__specification">Programátor,</p>
                        <p class="person-card__specification">kodér</p>
                    </div>
                    <div class="person-card">
                        <div class="person-card__photo" style="background-image: url('./images/kryštof.jpg'); background-size: 160%; background-position: 68% 100%;"></div>
                        <h3 class="person-card__name">Kryštof Zabadal</h3>
                        <p class="person-card__specification">Grafik,</p>
                        <p class="person-card__specification">designer</p>
                    </div>
                </container>
                <a href="kontakt">
                    <div class="cta-btn">
                        <div class="cta-btn--background"></div>    
                        <span class="cta-btn--text">Napište nám</span>
                    </div>
                </a>
            </section>

            <!-- AMNION -->
            <section class="about__amnion">
                <div class="about__amnion__content">
                    <img class="about__amnion__img"
                        src="./images/amnionTeam-1440.jpg"
                        srcset="./images/amnionTeam-640.jpg 640w,
                                ./images/amnionTeam-960.jpg 960w,
                                ./images/amnionTeam-1200.jpg 1200w,
                                ./images/amnionTeam-1440.jpg 1440w,
                                ./images/amnionTeam-1600.jpg 1600w"
                        sizes="(min-width: 1px) 100vw"
                        alt="Amnion TEAM">&nbsp;</img>
                    <p class="paragraph-small">
                        Naším cílem je <strong>přivést na místní trh ty nejmodernější technologie</strong> tvorby webových stránek a webaplikací od "jednostránkových" aplikací (SPAs) vytvořených v Reactu až po komplexní backednová APIs. <strong>Věříme ve zdejší podnikatele</strong>, kterým chceme ulehčit cestu za svým životním cílem a k úspěchu jejich projektu. Sami jsme podnikatelské duše a <strong>sledovat vzestup projektu, jehož můžeme být součástí, je pro nás ohromný pocit.</strong><br /><br />
                        V blízké budoucnosti přidáváme do repertoáru našich dovedností i tvorbu mobilních aplikací a <strong>mnoho dalšího, čeho se sami už nemůžeme dočkat</strong> 😃.
                    </p>
                    <div class="cta-text"><a href="sluzby">Více o službách -></a></div>
                </div>
            </section>

            <!-- TECHNOLOGIES -->
            <section class="about__tech">
            
                <h2 class="heading-2">TECHNOLOGIE</h2>
                <div class="about__tech__content">
                    <div class="about__tech__content__slot">
                        <img src="./images/figma.png" alt="figma" class="about__tech__content__slot__figma">
                    </div>
                    <div class="about__tech__content__slot">
                        <img src="./images/node.png" alt="nodejs" class="about__tech__content__slot__node">
                    </div>
                    <div class="about__tech__content__slot">
                        <img src="./images/react.png" alt="react" class="about__tech__content__slot__react">
                    </div>
                    <div class="about__tech__content__slot">
                        <img src="./images/git-logo.svg.png" alt="github" class="about__tech__content__slot__git">
                    </div>
                    <div class="about__tech__content__slot">
                        <img src="./images/socket-io.png" alt="socket.io" class="about__tech__content__slot__socket">
                    </div>
                    <div class="about__tech__content__slot">
                        <img src="./images/MongoDB-Logo.png" alt="mongoDB" class="about__tech__content__slot__mongo">
                    </div>
                    <div class="about__tech__content__slot">
                        <img src="./images/gsap.svg" alt="GreenSock" class="about__tech__content__slot__gs">
                    </div>
                    <div class="about__tech__content__slot">
                        <img src="./images/mysql-7.svg" alt="MySQL" class="about__tech__content__slot__mysql">
                    </div>
                    <div class="about__tech__content__slot">
                        <img src="./images/sass.svg" alt="Sass" class="about__tech__content__slot__sass">
                    </div>
                    <div class="about__tech__content__slot">
                        <img src="./images/jquery.png" alt="jQuery" class="about__tech__content__slot__jquery">
                    </div>
                    <div class="about__tech__content__slot">
                        <img src="./images/php.png" alt="php" class="about__tech__content__slot__php">
                    </div>
                    <div class="about__tech__content__slot">
                        <img src="./images/ga-logo.jpg" alt="Google Analytics" class="about__tech__content__slot__ga">
                    </div>
                    <div class="about__tech__content__slot">
                        <img src="./images/tensorflow.png" alt="TensorFlow" class="about__tech__content__slot__tf">
                    </div>
                    <div class="about__tech__content__slot">
                        <img src="./images/expo.png" alt="Expo" class="about__tech__content__slot__expo">
                    </div>
                </div>

            </section>

            <?php includeWithVariables('includes/contact.php', array('margintop' => 'true')); ?>

        </main>

<?php
    include('./includes/footer.php')
?>        