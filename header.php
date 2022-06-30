<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="<?php echo get_template_directory_uri() ?>/_assets/public/script.js" defer></script>
    
    <?php wp_head(); ?>

</head>
<body <?php body_class('body'); ?>>

    <section class="max-w-1200 mx-auto h-full pb-24 lg:pb-0">
      <header class="flex flex-row justify-between lg:h-full lg:static shadow-header lg:shadow-none fixed h-24 w-full z-10 bg-white ">
        <div class="lg:hidden" id="main">
          <span class="text-3xl cursor-pointer" id="openBtn"
            >&#9776;</span
          >
        </div>
        <div class="py-2 lg:py-4 px-2 bg-darkBlue rounded-b-md w-full mx-5 mb-5 lg:mb-0 lg:w-auto">
          <img
            src="https://lirp.cdn-website.com/26a6bb9c/dms3rep/multi/opt/SCR+business+logo-216w.png"
            alt="logo"
            class="mx-auto"
          />
        </div>
        <div class="hidden lg:flex lg:flex-col items-center justify-center mt-3">
           <div class="flex">
            <a href="https://facebook.com/SCRinc247" target="_blank">
              <img
                class="text-white bg-[#3a5998] rounded-full mr-1 w-8 h-8"
                src="<?php echo get_stylesheet_directory_uri() ?>/_assets/public/images/facebook.svg"
            /></a>
            <a
              href="https://www.google.com/maps/place/SCR,+Inc./@32.7254335,-96.3152719,15z/data=!4m2!3m1!1s0x0:0x6c22ac57702340db?sa=X&ved=2ahUKEwjR0pyWvafzAhWN_7sIHQQXA0kQ_BJ6BAhIEAU"
              target="_blank"
            >
              <img
                class="text-white bg-[#477cdf] rounded-full p-1 w-8 h-8"
                src="<?php echo get_stylesheet_directory_uri() ?>/_assets/public/images/google-business.svg"
              />
            </a>
           </div>
         
          <p class="font-semibold text-base my-2 font-lato hidden lg:block">
            Roofing,Siding,Gutters,Windows and Fencing
          </p>
        </div>
        <a href="tel:972-839-6834">
          <svg
          class="w-8 h-8 fill-darkBlue lg:hidden mt-7 mr-7"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
          ></path>
        </svg>
        </a>
        <div class="hidden lg:flex mr-5">
          <a
            class="text-white bg-[#005f9c] w-200 h-60 flex items-center no-underline rounded mt-4 cursor-pointer hover:bg-[#0069ad] text-xl"  href="tel:972-839-6834"
          >
           <svg
              class="w-8 h-8 fill-white ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
              ></path>
            </svg>
            <span class="py-2 px-2 no-underline font-lato text-inherit">
              972-839-6834
            </span>
          </a>
        </div>
      </header>
      <div id="overlay" class="fixed hidden w-full h-full top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] z-40 cursor-pointer"></div>
      <div id="mySidenav" class="sidenav">
       <div class="flex items-center justify-center">
        <a href="javascript:void(0)" id="closeBtn" class="closebtn mt-1 ml-4" 
        >&times;</a
      >
       <div class="pt-5 flex">
        <a href="https://facebook.com/SCRinc247" target="_blank">
          <img
            class="text-white bg-[#3a5998] rounded-full mr-1 w-8 h-8"
            src="<?php echo get_stylesheet_directory_uri() ?>/_assets/public/images/facebook.svg"
        /></a>
        <a
          href="https://www.google.com/maps/place/SCR,+Inc./@32.7254335,-96.3152719,15z/data=!4m2!3m1!1s0x0:0x6c22ac57702340db?sa=X&ved=2ahUKEwjR0pyWvafzAhWN_7sIHQQXA0kQ_BJ6BAhIEAU"
          target="_blank"
        >
          <img
            class="text-white bg-[#477cdf] rounded-full p-1 w-8 h-8"
            src="<?php echo get_stylesheet_directory_uri() ?>/_assets/public/images/google-business.svg"
          />
        </a>
       </div>
    
       </div>

       <?php 
        wp_nav_menu (
          array (
              'theme_location' => 'starter_primary_menu',
              'depth' => 1,
              'container' => 'nav',
              'container_class' => "mobile-meny",
              'fallback_cb' => false
          )
       ); 
      ?>
      
      </div>
    
      <?php 
        wp_nav_menu (
          array (
              'theme_location' => 'starter_primary_menu',
              'depth' => 1,
              'container' => 'nav',
              'container_class' => "desktop-meny",
              'fallback_cb' => false
          )
       ); 
      ?>
     
    </section>