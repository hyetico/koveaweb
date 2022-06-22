$(function(){

  //  $('.visual_slide').slick({
  //   arrows:false,
  //   autoplay:true,
  //   slidesToScroll: 1,
  //   autoplayspeed:1000,
  //   vertical : false,
  //   dots:false,
  //  })


   $('.visual_slide').slick({
      // dots: true,
      infinite: true,
      speed: 300,
       slidesToShow: 1,
       centerMode: true,
       variableWidth: true,
       arrows:false,
       autoplay:true,
   })

   
   $('.visual_slide_allows i:first-child').on('click',function(){
    $('.visual_slide').slick('slickPrev')
  });
  $('.visual_slide_allows i:last-child').on('click',function(){
      $('.visual_slide').slick('slickNext')
  });



   $('.notice_slide').slick({
     dots: true,
     infinite: true,
     speed: 300,
     slidesToShow: 1,
     centerMode: true,
    //  variableWidth: true,
     arrows:false,
     autoplay:true,
     verticalSwiping: true,
     vertical: true,
 })

  $("#bgndVideo").YTPlayer();
   

    //스크롤탑 탑 박스
    $('.scroll_top_box').click(function(){
      let targetSection=$(this)
      let point=targetSection.offset().top
      $('html,body').stop().animate({scrollTop:point},1000)
    });

    //모바일 햄버튼
    let btn= $('.h_btn')
    let openBtn = $('.hambtn .open_btn')
    let closeBtn=$('.hambtn .close_btn')
    let menu = $('.mobile_menu')
    openBtn.click(function(){
        menu.animate({top:80},1000)
        let target=$(this)
        let i=target.index()
        $(this).addClass('on')
        $(this).removeClass('on')
        $(this).next(i).addClass('on')
      })

      closeBtn.click(function(){
        menu.animate({top:-1000},1500)
        let target=$(this)
        let i=target.index()
        $(this).removeClass('on')
        $(this).prev(i).addClass('on')
      })


      //태블릿
      let tmenu = $('.tablet_menu')
      openBtn.click(function(){
          tmenu.animate({left:0},1000)
          let target=$(this)
          let i=target.index()
          $(this).addClass('on')
          $(this).removeClass('on')
          $(this).next(i).addClass('on')
        })
  
        closeBtn.click(function(){
          tmenu.animate({left:-1000},1500)
          let target=$(this)
          let i=target.index()
          $(this).removeClass('on')
          $(this).prev(i).addClass('on')
        })


      //서브메뉴
      $(".w_lnb ul li,.lnb ul li").click(function(){
          $(this).find("ul.sub").stop().slideToggle(500);
      });


      //노트팝업
      //.note_pupup
      let openbtn=$('.note_btn a')
      let pupup=$('.note_pupup')
      let closebtn=$('.pupup_close')
      openbtn.click(function(){
        pupup.fadeIn('slow')
      })
      closebtn.click(function(){
        pupup.fadeOut('slow')
      })


    //모바일 태블릿검색창팝업
    let searchopen=$('.search_mbtn')
    let searchclose=$('.search_btn a')
    let searchvar = $('.search_box')

    searchopen.click(function(){
      searchvar.animate({top:0},1000)
    })

    searchclose.click(function(){
      searchvar.animate({top:-100},1000)
    })


    // m_cards_outer
    //카드탭부분

    let tab = $('.card_tab li')
    let sheet =$('.card_sheet >div')
  
      tab.click(function(){
      let target=$(this)
      let i=target.index()
  
      tab.removeClass('on')
      tab.eq(i).addClass('on')
  
      sheet.removeClass('on')
      sheet.eq(i).addClass('on')
    })

    
    //예약창팝업
    //reserve_pupup

   $('.btn>.reserve_pup_btn').click(function(){
      $('.reserve_pupup').fadeIn('slow')
    })
    $('.date_close').click(function(){
      $('.reserve_pupup').fadeOut('slow')
    }) 

   //wproduct_hide_box 쇼박스
    $('.w_product_btn.ring .right_btn').click(function(){
      $('.wproduct_hide_box').eq(0).show(1000)
      let target=$(this)
      let i=target.index()
      $(this).addClass('on'); 
      $(this).removeClass('on')
      $(this).next(i).addClass('on')
   })
   
    $('.w_product_btn.ring .left_btn').click(function(){
      $('.wproduct_hide_box').eq(0).hide(1000)
      let target=$(this)
      let i=target.index()
      $(this).addClass('on'); 
      $(this).removeClass('on')
      $(this).prev(i).addClass('on')
    })

    $('.w_product_btn.bracelet .right_btn').click(function(){
      $('.wproduct_hide_box').eq(1).show(1000)
      let target=$(this)
      let i=target.index()
      $(this).addClass('on'); 
      $(this).removeClass('on')
      $(this).next(i).addClass('on')
   })
   
    $('.w_product_btn.bracelet .left_btn').click(function(){
      $('.wproduct_hide_box').eq(1).hide(1000)
      let target=$(this)
      let i=target.index()
      $(this).addClass('on'); 
      $(this).removeClass('on')
      $(this).prev(i).addClass('on')
    })

    $('.w_product_btn.pendant .right_btn').click(function(){
      $('.wproduct_hide_box').eq(2).show(1000)
      let target=$(this)
      let i=target.index()
      $(this).addClass('on'); 
      $(this).removeClass('on')
      $(this).next(i).addClass('on')
   })
   
    $('.w_product_btn.pendant .left_btn').click(function(){
      $('.wproduct_hide_box').eq(2).hide(1000)
      let target=$(this)
      let i=target.index()
      $(this).addClass('on'); 
      $(this).removeClass('on')
      $(this).prev(i).addClass('on')
    })



    //m_magazine_outer 탭

    let magazinetab = $('.magazine_tab> ul> li')
    let magazinesheet =$('.magazine_sheet >div')
  
      magazinetab.click(function(){
      let target=$(this)
      let i=target.index()

      magazinetab.removeClass('on')
      magazinetab.eq(i).addClass('on')

      magazinesheet.removeClass('on')
      magazinesheet.eq(i).addClass('on')
    })


    // swiper
    let swiper = new Swiper('.swiper-container', {
  
    loop: true,
    centeredSlides: true,
    slidesPerView: '3',
    speed : 500,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 50,
      depth: 100,
      slideShadows: false,
      // modifier:1,
      // stretch: 50
    },
    
    pagination: {   //페이징 사용자 설정
      el: ".pagination_bullet",   //페이징 태그 클래스 설정 
      type : 'bullets',
      clickable: true,
      // Bullet Numbering 설정
      // renderBullet: function (index, className) {
      //   return '<span class="' + className + '">' + (index + 1) + "</span>";
      // },
    }
  
  });

    let book = $('.mbook01')
    let mpop=$('.mbook_pupup')
    let cBtn=$('.mpupup_closebtn')

    book.click(function(){
      mpop.fadeIn('slow')
      })

      cBtn.click(function(){
        mpop.fadeOut('slow')
      })


      //footer_top_btn 스크롤탑
    $('.footer_top_btn').click(function(e){
      e.preventDefault();
      $('html,body').stop().animate({scrollTop:0},1000)
    })


})//fucntion end