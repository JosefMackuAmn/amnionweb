<?php
    include('includes/functions.php');
    includeWithVariables('includes/navigation.php', array('title' => 'Portfolio'));
?>
            <div class="projects__header__background header__background animBackgroundBack">&nbsp;</div>
            <div class="projects__header__background header__background animBackground">&nbsp;</div>
            <div class="projects__header__title header__title">Portfolio</div>
        </header>
        
        <!-- MAIN -->
        <main class="projects__main">
            <!-- FANTASY MUZEUM & GALERIE -->
            <section class="project project--fantasy-muzeum-a-galerie">
                <h2 class="heading-project">Fantasy muzeum &&nbsp;galerie</h2>
                <container class="project__content">
                    <div class="project__img">
                        <img src="images/project_fantasymuzeum.png" alt="Fantasy muzeum & galerie" class="project__img">
                    </div>
                    <div class="project__content__text">
                        <p class="project__about">"Fantasy muzeum je muzeum a galerie vystavující fantasy díla s volnou inspirací díly Julese Verna a režiséra Karla Zemana."</p>
                        <div class="project__review">"Spolupráce s AmnioN týmem nás mile překvapila. Pánové jsou mladí, plní moderních nápadů, které dodají šmrnc každému webu. Komunikují rychle a vyřeší za klienta vše potřebné. Web nám vznikl rychle a bez starostí. Tenhle tým budeme určitě doporučovat dál, a i my, v případě potřeby, se na AmnioN tým opět rádi obrátíme."</div>
                        <!-- Blog and interviews are comming soon! -->
                        <!-- <div class="cta-text"><a href="/blog/1">Celý rozhovor -></a></div> -->
                        <div class="project__outer-link project__outer-link--desktop"><a target="_blank" rel="noopener" href="https://www.fantasymuzeum.cz">www.fantasymuzeum.cz</a></div>
                    </div>
                    <div class="project__outer-link project__outer-link--mobile"><a target="_blank" rel="noopener" href="https://www.fantasymuzeum.cz">www.fantasymuzeum.cz</a></div>
                </container>
            </section>

            <?php includeWithVariables('includes/contact.php', array('margintop' => 'false')); ?>

        </main>
<?php
    include('./includes/footer.php')
?>             
