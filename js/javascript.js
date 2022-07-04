
  
new Swiper('.header_outer .notice_box .swiper',{
    direction:'vertical',
    autoplay:true,
    delay:2000,
    loop:true,

    pagination: {
        el: '.swiper-pagination',
        clickable:true
      },
  })

  new Swiper('.visual_main_outer .swiper',{
    autoplay:true,
    delay:3000,
    loop:true,

    navigation: {
      prevEl: ".visual_main_outer .arrow_box .visual_slide_arrow_l",
      nextEl: ".visual_main_outer .arrow_box .visual_slide_arrow_r"
    }
  })


  new Swiper('.sns_banner_outer .swiper',{
    direction:'vertical',
    autoplay:true,
    delay:2000,
    loop:true,

    navigation: {
      prevEl: ".sns_banner_outer .btn_sns_arrows .up_arrow",
      nextEl: ".sns_banner_outer .btn_sns_arrows .dw_arrow"
    }
  })

  new Swiper('.commingsoon_right .swiper',{
    direction:'vertical',
    autoplay:true,
    delay:3000,
    loop:true,

    navigation: {
      prevEl: ".commingsoon_right .btn_comming_arrows .up_arrow",
      nextEl: ".commingsoon_right .btn_comming_arrows .dw_arrow"
    }
  })

  new Swiper('.theme02 .swiper',{
    slidesPerView: 2,
    direction:'vertical',
    autoplay:true,
    delay:3000,
    loop:true,

    navigation: {
      prevEl: ".btn_theme_arrows02 .btn_theme_arrow.up_arrow",
      nextEl: ".btn_theme_arrows02 .btn_theme_arrow.dw_arrow"
    }
  })
  

  new Swiper('.theme01 .swiper',{
    slidesPerView: 2,
    direction:'vertical',
    autoplay:true,
    delay:3000,
    loop:true,

    navigation: {
      prevEl: ".btn_theme_arrows01 .btn_theme_arrow.up_arrow",
      nextEl: ".btn_theme_arrows01 .btn_theme_arrow.dw_arrow"
    }
  })