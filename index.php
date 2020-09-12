<?php
    include('includes/functions.php');
    includeWithVariables('includes/navigation.php', array('title' => 'Domů'));
?>
        <div class="index__header__background header__background animBackgroundBack">&nbsp;</div>
        <div class="index__header__background header__background animBackground">&nbsp;</div>
        <!-- HEADER PREFACE DESKTOP -->
        <div class="index__header__title header__preface header__preface--desktop">
            <h1 class="heading-1 fadeFromLeft delay">Představíme vás světu<div class="fadeFromLeft delayLong"></div></h1>
            <p class="paragraph-big fadeFromLeft delay">Zajistíme vám kvalitní webovou prezentaci vašeho nápadu a představíme vás světu v tom nejlepším světle. Nadchneme vaše zákazníky, aby si vybrali právě vaše řešení. Svět se neustále vyvíjí a my Vám pomůžeme udržet s ním tempo!</p>
        </div>
    </header>
    

    <!-- MAIN -->
    <main class="main">

        <!-- HEADER PREFACE MOBILE -->
        <div class="index__header__title header__preface header__preface--mobile">
            <h1 class="heading-1 fadeFromLeft">Představíme vás světu<div class="fadeFromLeft delay"></div></h1>
            <p class="paragraph-big fadeFromLeft">Zajistíme vám kvalitní webovou prezentaci vašeho nápadu a představíme vás světu v tom nejlepším světle. Nadchneme vaše zákazníky, aby si vybrali právě vaše řešení. Svět se neustále vyvíjí a my Vám pomůžeme udržet s ním tempo!</p>
        </div>
        
        <!-- ABOUT -->
        <section class="index__about">
            <div class="index__about__box">
                <div class="index__about--left fadeFromLeft">
                    <h2 class="heading-2">Kdo jsme?</h2>
                    <p class="paragraph-big">
                        Jsme parta vývojářů a designerů, vyznáme se v nejnovějších technologiích a neustále sledujeme aktuální trendy.
                    </p>
                </div>
                <div class="index__about--right fadeFromRight">
                    <h2 class="heading-2">Co děláme?</h2>
                    <p class="paragraph-big">
                       Tvoříme webové prezentace nejen pro startupy, ale i pro zaběhlé projekty, které chtějí vyzdvihnout svůj web na nový level.
                    </p>
                </div>
            </div>         
        </section>

        <!-- PROJECTS -->
        <section class="index__about-us">
            <a href="o-nas">
                <div class="cta-btn">
                    <div class="cta-btn--background"></div>    
                    <span class="cta-btn--text">Zjistěte více o nás</span>
                </div>
            </a>
        </section>
        
        <!-- FEATURES -->
        <section class="index__features">
            <h2 class="heading-2">V ČEM VYNIKÁME?</h2>
            <div class="feature-box fadeFromLeft u-hoverTranslateUp">
                <div class="feature-box--text">
                    <h3 class="heading-3">Zakládáme si na komunikaci s klientem</h3>
                    <p class="paragraph-small">Chceme přesně vědět, co od nás čekáte, jakou máte představu a co je cílem vašeho podnikání. Vše přetransformujeme do návrhu, který s vámi prokonzultujeme a doporučíme kroky ke zvýšení konverzního poměru. </p>
                </div>
                <div class="feature-box--img" style="background-image: url('./images/communication-640.jpg'); background-size: cover;"></div>
            </div>
            <div class="feature-box fadeFromRight u-hoverTranslateUp">
                <div class="feature-box--text">
                    <h3 class="heading-3">Vytvoříme (téměř) cokoli</h3>
                    <p class="paragraph-small">Dáme vše do toho, aby váš web splňoval vaše představy. Tvoříme nejen prezentace, ale i e-shopy a menší web aplikace.</p>
                </div>
                <div class="feature-box--img" style="background-image: url('./images/sketchbook-640.jpg'); background-size: cover;"></div>
            </div>
            <div class="feature-box fadeFromLeft u-hoverTranslateUp">
                <div class="feature-box--text">
                    <h3 class="heading-3">Máme na vás čas i po dokončení zakázky</h3>
                    <p class="paragraph-small">Po zveřejnění webu nabízíme také jeho správu a pravidelnou aktualizaci. A kdykoli se na nás můžete obrátit s nápadem na jeho rozšíření.</p>
                </div>
                <div class="feature-box--img" style="background-image: url('./images/watches-640.jpg'); background-size: cover; transform: scaleX(-1);"></div>
            </div>
            <div class="feature-box fadeFromRight u-hoverTranslateUp">
                <div class="feature-box--text">
                    <h3 class="heading-3">Vytváříme perzonalizované rozhraní</h3>
                    <p class="paragraph-small">Návštěvníci vašeho webu se budou na vašich stránkách cítit příjemně a to pozitivně ovlivní konverzní poměr.</p>
                </div>
                <div class="feature-box--img" style="background-image: url('./images/figma-640.jpg'); background-size: 120%;"></div>
            </div>          
            <div class="cta-text"><a href="sluzby">Projít služby -></a></div>
        </section>

    </main>

<?php
    include('./includes/footer.php')
?>        