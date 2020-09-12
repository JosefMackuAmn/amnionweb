<?php
    include('includes/functions.php');
    include('includes/_db.php');
    includeWithVariables('includes/navigation.php', array('title' => 'Blog'));

    $post_id = false;
    if (isset($_GET['post_id'])) {
        $post_id = preg_replace('#[^0-9]#', '', $_GET['post_id']);
    }

    // RENDER LIST OF POSTS IF $post_id IS NOT SET
    if (!$post_id) {
        $query = "SELECT * FROM posts";
        $result = mysqli_query($conn, $query);

        ?>
            </header>

            <!-- MAIN -->
            <main class="blog">
                <h1 class="heading-2">BLOG</h1>
                <section class="blog__posts">
                <?php
                    if (!$result) {
                        echo "<p>Žádné příspěvky</p>";
                    } else {
                        while ($row = mysqli_fetch_assoc($result)) {
                            ?>
                            
                    <div class="post">
                        <img src="<?php echo $row['post_image'] ?>" alt="<?php echo $row['post_title'] ?>" class="post__img">
                        <div class="post__content">
                            <h3 class="post__heading"><?php echo $row['post_title'] ?></h3>
                            <h4 class="post__subheading"><?php echo $row['post_subtitle'] ?></h4>
                            <p class="post__perex"><?php echo $row['post_perex'] ?></p>
                            <div class="cta-text"><a href="blog?post_id=<?php echo $row['post_id'] ?>">Přečíst -></a></div>
                        </div>
                    </div>
                            
                            <?php
                        }
                    }

                    mysqli_close($conn);
                ?>
                </section>            
            </main>
        <?php

    } elseif ($post_id) {
        $query = "SELECT * FROM posts WHERE post_id=$post_id";
        $result = mysqli_query($conn, $query);

        ?>
            </header>
            <script>
                console.log('<?php echo $post_id ?>');
            </script>

            <!-- MAIN -->
            <main class="blog">
                <h1 class="heading-2">POST</h1>
                <section class="blog__posts">

                <?php
                    if (!$result) {
                        echo "<p>Žádné příspěvky</p>";
                    } else {
                        while ($row = mysqli_fetch_assoc($result)) {
                        ?>
                            
                    <div class="post">
                        <img src="<?php echo $row['post_image'] ?>" alt="<?php echo $row['post_title'] ?>" class="post__img">
                        <div class="post__content">
                            <h3 class="post__heading"><?php echo $row['post_title'] ?></h3>
                            <h4 class="post__subheading"><?php echo $row['post_subtitle'] ?></h4>
                            <p class="post__perex"><?php echo $row['post_perex'] ?></p>
                            <div class="cta-text"><a href="/blog/<?php echo $row['post_id'] ?>">Přečíst -></a></div>
                        </div>
                    </div>
                            
                        <?php
                        }
                    }

                mysqli_close($conn);
                ?>
                </section>            
            </main>
        <?php
    }
?>

<?php
    include('./includes/footer.php')
?>        