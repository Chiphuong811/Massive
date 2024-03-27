//header animate
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

/* $('.nav-pills-config li').click(function(){
    $('.nav-pills-config a').remove('active');
    $(this).addClass('active');
}); */

//progress bar
/* https://codepen.io/Khloe1425/pen/JjJaNeg?fbclid=IwAR0D1uCLg0ws2VpLlNPViMzaH8UxQE5HKckQuY9jzVWTYKQTRw2oLi12GAM */

//magnific-popup,slick
$(document).ready(function () {
    /* $('#toggle').click(function() {
        $('#massiveMarkup').slideToggle();
    }); */
    $('.image-popup-fit-width').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            verticalFit: false
        }
    });
    $('.open-popup1').magnificPopup({
        items: [
            {
                src: './img/08.jpg',
                title: 'Freshness'
            },
            {
                src: './img/08a.jpg',
                title: 'Massive'
            },
            {
                src: './img/08b.jpg',
                title: 'Bootstrap'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image' // this is a default type
    });
    $('.open-popup2').magnificPopup({
        items: [
            {
                src: './img/07.jpg',
                title: 'Freshness Photo'
            },
            {
                src: './img/07a.jpg',
                title: 'Awesome Lightbox'
            },
            {
                src: './img/07b.jpg',
                title: 'Massive UI Components'
            },
            {
                src: './img/07c.jpg',
                title: 'Amazing Theme'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image'
    });
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    $('.show-tab1').slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        vertical: true,
    });
    $('.show-tab2').slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
    });
});

//mixitup

//slick carousel
/* $(document).ready(function () {
    $('.show-tab1').slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        vertical: true,
    });
    $('.show-tab2').slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
    });
});
 */
//owl carousel
$('.comnent_carousel').owlCarousel({
    loop: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 2,
            margin: 15
        },
        784: {
            items: 3,
            autoplay: false,
            dots: false,
            loop: false,
            mouseDrag: false
        },
        1200: {
            items: 1,
        },
    }
});
$('.logo-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    /* item: 6, */
    responsive: {
        0: {
            autoplaySpeed: 1000,
            autoplayTimeout: 2500,
            dots: true,
            items: 1,
        },
        480: {
            autoplaySpeed: 1000,
            autoplayTimeout: 2500,
            dots: true,
            items: 2,
        },
        784: {
            autoplaySpeed: 1000,
            autoplayTimeout: 2500,
            dots: true,
            items: 3,
        },
        1215: {
            mouseDrag: false,
            autoplay: false,
            items: 6,
            dots: false,
            loop: false,
            nav: false
        }
    }
});

//count to
$('.timer').countTo();
