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

        <?php includeWithVariables('includes/contact.php', array('margintop' => 'true')); ?>
        
    </main>
<?php
    include('./includes/footer.php')
?>        