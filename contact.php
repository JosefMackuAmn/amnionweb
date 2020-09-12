<?php
    include('includes/functions.php');
    includeWithVariables('includes/navigation.php', array('title' => 'Kontakt'));
?>
        <div class="contact__header__background header__background animBackgroundBack">&nbsp;</div>
        <div class="contact__header__background header__background animBackground">&nbsp;</div>
        <div class="contact__header__title header__title">Kontakt</div>
    </header>

    <!-- MAIN -->
    <main class="main">
        <section class="contact__form">
            <div class="contact__row">
                <form class="form" method='post' action="email.php" enctype="multipart/form-data" onsubmit="return onSubmitHandler()">
                    <div class="form__header"></div>
                    <div class="form__row">
                        <div class="form__column">
                            <label for="full-name">Celé jméno:</label>
                            <input type="text" name="full-name" id="full-name" placeholder="Jméno a Příjmení">
                        </div>
                        <div class="form__column">
                            <label for="email">E-mail:</label>
                            <input type="text" name="email" id="email" placeholder="vas@email.cz">
                        </div>
                    </div>
                    <div class="form__message">
                        <label for="message">Vaše zpráva:</label>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Vaše zpráva..."></textarea>
                    </div>
                    <input name="submit" type="submit" class="cta-submit" value="Odeslat">
                </form>
                <div class="contact__text">
                    <div class="contact__info">
                        <h6 class="heading-6">E-mail</h6>
                        <p class="paragraph-small">team@amnionweb.cz</p>
                    </div>
                    <div class="contact__separator"></div>
                    <div class="contact__info">
                        <h6 class="heading-6">Telefon</h6>
                        <p class="paragraph-small">735 044 114</p>                    
                    </div>
                    <div class="contact__separator"></div>
                    <div class="contact__info">
                        <h6 class="heading-6">IČO</h6>
                        <p class="paragraph-small">092 12 884</p>                 
                    </div>
                </div> 
            </div>                       
        </section>
    </main>
<?php
    include('./includes/footer.php')
?>        