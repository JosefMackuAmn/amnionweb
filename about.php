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
                    <div class="about__tech__technology">
                        <img src="./images/node.png" alt="Node.js icon" class="about__tech__image">
                        <p class="paragraph-big paragraph-big-dark">Pro všechny větší projekty využíváme <strong>Node.js</strong>. Jedná se o prominentí backendovou technologii moderního web-developingu, poskytující volnost a flexibilitu při tvorbě server-side části aplikace.</p>
                    </div>
                    <div class="about__tech__technology">
                        <img src="./images/react.png" alt="React icon" class="about__tech__image">
                        <p class="paragraph-big paragraph-big-dark">Součástí <strong>MERN stacku</strong>, tedy kombinace technologií MongoDB, Express, React a Node.js, je již zmíněný <strong>React</strong> - frontendová knihovna ulehčující tvorbu komponentů a interaktivního UI. S jeho pomocí tvoříme SPAs (Single Page Applications) poskytující nejlepší monžou user experience.</p>
                    </div>
                    <div class="about__tech__technology">
                        <img src="./images/php.png" alt="PHP icon" class="about__tech__image">
                        <p class="paragraph-big paragraph-big-dark">Nejmenší prezentační weby si bohatě vystačí se zažitou <strong>PHP</strong> technologií, na níž funguje asi 80% veškerých webových stránek. Podobně jako Node.js se jedná o na serveru běžící kód, s nímž lze jednoduše zabezpečit citlivá data v <strong>MySQL</strong> databázi a “servírovat” potřebné údaje návštěvníkům webu.</p>
                    </div>
                </div>

            </section>

            <?php includeWithVariables('includes/contact.php', array('margintop' => 'true')); ?>

        </main>

<?php
    include('./includes/footer.php')
?>        