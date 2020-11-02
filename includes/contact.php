<!-- CONTACT FORM -->
<section class="contact" <?php if ($margintop === 'false') { echo 'style="margin-top: 0;"'; } ?>>
    <div class="contact__background">
        <img src="images/wave-white.svg" alt="White SVG wave" class="contact__background__img">
        <img src="images/wave-white.svg" alt="White SVG wave" class="contact__background__img">
    </div>
    <div class="contact__heading">
        <h2 class="heading-2">Spojte se s námi!</h2>
    </div>
    <form action="email.php" class="contact__form" method="POST" onsubmit="return onSubmitHandler()">
        <div class="contact__form__row">
            <div class="contact__form__row__heading">
                <label for="full-name">celé jméno</label>
                <h5 class="heading-5">KONTAKT</h5>
            </div>
            <input class="contact__form__input" type="text" id="full-name" name="full-name" placeholder="Jméno a Příjmení">
        </div>
        <div class="contact__form__row">
            <label class="contact__form__label contact__form__label--left" for="email">e-mail</label>
            <input class="contact__form__input" type="text" id="email" name="email" placeholder="Váš e-mail">
        </div>
        <div class="contact__form__row">
            <label class="contact__form__label contact__form__label--left" for="interest">váš zájem</label>
            <select class="contact__form__input" name="interest" id="interest">
                <option value="web_prezentation">Webová prezentace</option>
                <option value="web_application">Webová aplikace</option>
                <option value="eshop">E-shop</option>
                <option value="query">Něco jiného / chci se zeptat</option>
            </select>
        </div>
        <div class="contact__form__row">
            <label class="contact__form__label contact__form__label--right" for="message">zpráva</label>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Vaše zpráva..."></textarea>
        </div>
        <input name="submit" type="submit" class="cta-submit" value="Odeslat">
        <p class="contact__form__gdpr">Odesláním souhlasíte se <a target="_blank" href="gdpr">zpracováním osobních údajů</a>.</p>
    </form>
</section>