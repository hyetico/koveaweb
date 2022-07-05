let hideBtn = document.querySelector('.side_top_btn')

 window.addEventListener('scroll',()=>{
  let scrollTop = document.documentElement.scrollTop || window.scrollY

      if(scrollTop>500){
          gsap.to(hideBtn, 0.5, { 
            opacity: 1
          })
          }else {
            gsap.to(hideBtn, 0.5, { 
              opacity: 0
            })
          }
      })


    // topBtn.addEventListener('click',()=>{
    //   //gsap.to(요소, 시간, {애니메이션옵션(객체)})
    // gsap.to(window, 0.5, { 
    //   scrollTo:0
    // })
    // })

      


//헤더 검색창
    const searchVar = document.querySelector('.search_var')

    searchVar.addEventListener('focus',()=>{
    searchVar.style.width='85%'
    searchVar.setAttribute('placeholder',' 검색어를 입력하세요.')
    })

    searchVar.addEventListener('blur',()=>{
      searchVar.style.width=''
      searchVar.setAttribute('placeholder','')
    })


    //logo 텍스트 애니메이션
    const logoText = document.querySelector('.header_center_outer .logo .logo_txt')
    let text = document.querySelector('.header_center_outer .logo .logo_txt').innerText
    let split = text.split('').join("</span><span>")
    split = "<span>"+ split + "</span>"
    logoText.innerHTML=split

    let spans = document.querySelectorAll('.header_center_outer .logo .logo_txt span')
    
      // window.addEventListener('scroll',()=>{
      //   const headerOuter = document.querySelector('.header_outer')
      //   let scrollTop = document.documentElement.scrollTop || window.scrollY

      //  if(scrollTop){
      //    spans.forEach((span, index)=>{
      //      setInterval(()=>{
      //        span.classList.add('show')
      //      },50 * index)
      //    })
      //   }

      //   })

          spans.forEach((span, index)=>{
            setTimeout(()=>{
              span.classList.add('show')
            },100 * index)
          })


      

          const menuBtn = document.querySelector('.search_nav')
          const menu = document.querySelector('.search_outer .menu_sub_search')

          const lnbBtn = document.querySelector('.lnb_nav')
          const lnbsub = document.querySelector('.lnb_outer .sub_lnb_outer')
          let isClick = false

          menuBtn.addEventListener('click',()=>{
            if(isClick==false){
              gsap.to(menu, 0.2, { 
                top: '60px',
                display:'block'
              },200)
              isClick = true
             
            }else{
              gsap.to(menu, 0.2, { 
                top: '-500px',
              },200)
              isClick = false
            }
          })

          lnbBtn.addEventListener('click',()=>{

            if(isClick==false){
          
              gsap.to(lnbsub, 0.2, { 
                top: '60px',
              },200)
              isClick = true

            }else{
              
              gsap.to(lnbsub, 0.2, { 
                top: '-300px',
              },200)
              isClick = false
            }
          })


          const tabList = document.querySelectorAll('.season_menu_tabbtn > li');
          const contents = document.querySelectorAll('.season_tab_conts .seatab_cont')
          let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)
          
          for(var i = 0; i < tabList.length; i++){
            tabList[i].querySelector('.tabbtn').addEventListener('click', function(e){
              e.preventDefault();
              for(var j = 0; j < tabList.length; j++){
                // 나머지 버튼 클래스 제거
                tabList[j].classList.remove('on');
          
                // 나머지 컨텐츠 display:none 처리
                contents[j].style.display = 'none';
              }
          
              // 버튼 관련 이벤트
              this.parentNode.classList.add('on');
          
              // 버튼 클릭시 컨텐츠 전환
              activeCont = this.getAttribute('href');
              document.querySelector(activeCont).style.display = 'block';
            });
          }






  // Swiper
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
    delay:3500,
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