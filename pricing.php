<?php
    include('includes/functions.php');
    includeWithVariables('includes/navigation.php', array('title' => 'Ceník'));
?>
        <div class="pricing__header__background header__background animBackgroundBack">&nbsp;</div>
        <div class="pricing__header__background header__background animBackground">&nbsp;</div>
        <div class="pricing__header__title header__title">Ceník</div>
    </header>

    <!-- MAIN -->
    <main class="pricing__main">
        <section class="pricing__pricing">
            <div class="pricing-card">
                <div class="pricing-card__shadow pricingFromRight"></div>
                <div class="pricing-card__content pricingFromRight">
                    <h3 class="heading-3">Jak určujeme cenu</h3>
                    <p class="paragraph-small">Odvíjíme se od konkrétních požadavků projektu a náročnosti zpracování, například web pro místního kadeřníka vyjde levněji, než rozsáhlý e-shop.<br>
                    Je tedy důležité si spolu předem ujasnit, na čem všem ve výsledku pracujeme, co musí stránka obsahovat a jak má fungovat.</p>
                </div>
            </div>
            <div class="pricing-card">
                <div class="pricing-card__shadow pricingFromLeft"></div>
                <div class="pricing-card__content pricingFromLeft">
                    <h3 class="heading-3">Co je v ceně</h3>
                    <p class="paragraph-small">Základ našich webů tvoří nejen <strong>grafické zpracování, naprogramování funkčností (např. zmíněná registrace) a spuštění na serveru</strong> či cloudu, aby se k vám vaši zákazníci dostali.<br>
                        Dáváme si záležet i na <strong>individuálním přístupu</strong> ke konkrétnímu projektu a konkrétním návštěvníkům. <strong>Tvoříme originální produkt</strong>, na který uživatelé či návštěvníci nezapomenou.<br>
                        Informace o všech našich dalších službách najdete na stráce <a href="/sluzby">služby</a>.</p>
                </div>                
            </div>
            <div class="pricing-card">
                <div class="pricing-card__shadow pricingFromRight"></div>
                <div class="pricing-card__content pricingFromRight">
                    <h3 class="heading-3">S čím můžete počítat</h3>
                    <p class="paragraph-small">Čistá prezentace projektu, jako je třeba tento web, vyjde nejlevněji. V některých případech tak můžete mít vystaráno už od 15.000Kč.<br>
                    Náročnější weby s uživatelskou registrací či e-shopy pak u nás začínají na 20.000Kč.</p>
                </div>
            </div>
        </section>
    </main>
    
<?php
    include('./includes/footer.php')
?>        