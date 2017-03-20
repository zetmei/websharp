//宣告window的東西不要放fonction裡面
var $win = $(window);
  //RWD套件(off-canvus)


////////////////////////////// foundation js 套件
$(function(){

  $(document).foundation();

 });

////////////////////////////// 搜尋bar 
$(function(){
  //搜尋bar  
  $('.m_search_btn').click(
                 function(){               
                      $(".m_search_bar").fadeIn(300);
                      $(".cancel_box").fadeIn(300);}
  );
      //點擊cancel區域時收起來
      $('.cancel_box').click(
                     function(){               
                          $(".m_search_bar").fadeOut(0);
                          $(".cancel_box").fadeOut(0);}
      );
      //捲動時都收起來
      $(window).scroll(function(){
                     $(".m_search_bar").fadeOut(0);
                      $(".cancel_box").fadeOut(0);
      });

//////////////////////////////電腦版次選單
  //電腦版次選單出現
	$("#tab03").mouseover(function(){
			$("#tab03_float_nav").slideDown(300);
      $("#tab03 span").fadeIn(300);
	});

	//次選單消失-離開自己消失
	$("#tab03_float_nav").mouseleave(function(){
			$(this).slideUp(300);
      $("#tab03 span").fadeOut(0);
	});
	//次選單消失-摸到兄弟消失
	$("#tab01,#tab02,#tab04,#tab05,#tab06").mouseover(function(){
			$("#tab03_float_nav").slideUp(300);
      $("#tab03 span").fadeOut(0);
	});
	//次選單消失-視窗捲動消失
  $(window).scroll(function(){                
      $("#tab03_float_nav").slideUp(300);
      $("#tab03 span").fadeOut(0);
  });
  
});
//////////////////////////////手機選單
$(function(){
  //手機選單
  $('.m_list').click(
              function(){    
                  var NOW1=$(this).index(); 
                  // alert('123');
                   $('.nav_one').stop().slideDown(300);
                   $('.nav_one').siblings().fadeOut(0);
                   $('.m_list span').stop().slideDown(0);
              }  
    );
    $('.m_list span').click(
              function(){  
                   // alert('123');  
                   $('.nav_one').stop().slideUp(300);
                   $('.nav_two').stop().slideUp(300);
                   $('.nav_three_01').stop().slideUp(300);
                   $('.nav_three_02').stop().slideUp(300);
                   $('.m_list span').stop().slideUp(0);
                   return false;
                   // event.preventDefault();
              }  
    );
    //主選單(第一層)
    $('.nav_one .open_me').click(
              function(){
                  $('.nav_one').stop().slideUp(0);
                  $('.nav_two').stop().slideDown(300);
              }  
    );
        //上一頁
          $('.nav_two .go_back').click(
              function(){
                  $('.nav_two').stop().slideUp(0);
                  $('.nav_one').stop().slideDown(300);
              }  
          );
    //家用商用選單(第二層)
    $('.nav_two .open_home').click(
              function(){
                  $('.nav_three_01').stop().slideDown(800);
                  $('.nav_two').stop().slideUp(0);
              }  
    );
    $('.nav_two .open_commercial').click(
              function(){
                  $('.nav_three_02').stop().slideDown(400);
                  $('.nav_two').stop().slideUp(0);
              }  
    );
          //上一頁
          $('.nav_three_01 .go_back').click(
              function(){
                  $('.nav_three_01').stop().slideUp(0);
                  $('.nav_two').stop().slideDown(300);
              }  
          );
           //上一頁
          $('.nav_three_02 .go_back').click(
              function(){
                  $('.nav_three_02').stop().slideUp(0);
                  $('.nav_two').stop().slideDown(300);
              }  
          );

    //型號區推開
    $('.nav_three_01 li').click(
                 function(){      
                   //摸到的第幾個
                     var NOW1=$(this).index()-1;  
                      //自己的打開
                      $(".nav_three_01 li .nav_model").eq(NOW1).slideToggle(300);//其他人收起來
                      $(".nav_three_01 li .nav_model").eq(NOW1).parent().siblings().find('.nav_model').slideUp(300);
                 }
      );
      $('.nav_three_02 li').click(
                 function(){      
                   //摸到的第幾個
                     var NOW1=$(this).index()-1;  
                      //自己的打開
                      $(".nav_three_02 li .nav_model").eq(NOW1).slideToggle(300);//其他人收起來
                      $(".nav_three_02 li .nav_model").eq(NOW1).parent().siblings().find('.nav_model').slideUp(300);
                 }
        );



//ready結束
});

//////////////////////////////footer(手機)打開
$(function(){
  //footer(手機)打開
    var _width = $win.width();
    if(_width<=1089){
            $('.footer_block').click(
                 function(){      
                 	 //摸到的第幾個
                     var NOW1=$(this).index()-1;  
                      //自己的打開
                      $(".footer_block .footer_hidden").eq(NOW1).slideToggle(300);
                      //自己樣式toggle
                      $(".footer_block").eq(NOW1).find('.footer_nav_title').toggleClass('footer_nav_title_active');
                      //其他人收起來
                      $(".footer_block .footer_hidden").eq(NOW1).parent().siblings().find('.footer_hidden').slideUp(300);
                      //其他人樣式拿掉
                      $(".footer_block").eq(NOW1).siblings().find('.footer_nav_title').removeClass('footer_nav_title_active');
                 }
             );

    };
});

/////////////////////////////////////做網頁時網頁共用物/////////////////////////////////////////
$(function(){
	//取消連結虛線
    $("a").focus(function(){
         $(this).blur();
     }); 
    $("button").focus(function(){
         $(this).blur();
     }); 
    // $("select").focus(function(){
    //      $(this).blur();
    //  }); 

	//判定IE8
    $(function(){
	     var WHAT = navigator.userAgent;
	     if(WHAT.match(/(MSIE 5.0|MSIE 6.0|MSIE 7.0|MSIE 8.0)/)){
	      // alert("123")
	     window.location="update.html";
     }
    });



//結束
});

////////////////////////////////////////////////至頂按鈕topBtn
$(function(){
  
  //至頂按鈕topBtn
      var winTop = $(window).scrollTop();

      $('.top_btn').on('click', goToTop);  
      function goToTop(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
          scrollTop: 0
        }, 1000,'easeOutExpo');
      }

      //top_btn跑出消失
         var _width = $win.width();
             winTop = $(window).scrollTop();
             // bannerTop = $('.mainvision').offset().top;

        //大於高度多少跑出來
        $(window).scroll(
               function(){
                    winTop = $(window).scrollTop();
                    if(winTop > 517){
                        $('.top_btn').addClass('appear');
                    }
                    else{
                      $('.top_btn').removeClass('appear');
                    }    
                }
        );
        //跑到頁尾黏住
         $(window).scroll(
               function(){
                    winTop = $(window).scrollTop();
                    footerTop = $('.footer').offset().top;
                    // footer01Height = $('.footer').height(); 
                    // footer02Height = $('.footer_bar').height();
                    

                    //我也還不知道為什麼是-600，以後再查查看
                    if(winTop > footerTop-600){
                      // alert(footerTop);
                        $('.top_btn').addClass('topbtn_fix');
                    }
                    else{
                      $('.top_btn').removeClass('topbtn_fix');
                    }    
                }
        );
//結束
});
////////////////////////////////////////////////關於我們錨點
$(function(){
  
         $('#tab_area3').click(function(){

                        // alert('123');
                        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
                        $body.animate({
                          scrollTop: $('#area3').offset().top-80
                        }, 10);
                     
         });


//結束
});
////////////////////////////////////////////////手機版產品搜尋
$(function(){  
    $(".search_close").hide();
    // $(".search_more").hide();
    
    $('.search_open').each(function(){
                
                $(this).click(
                   function(){     
                    $(this).fadeOut(0);
                    $(this).siblings('.search_close').fadeIn(0);
                    $(this).siblings('.search_more').slideDown(300);
                  }
               );
    });
    $('.search_close').each(function(){
                $(this).click(
                   function(){   
                    $(this).fadeOut(0);
                    $(this).siblings('.search_open').fadeIn(0);
                    $(this).siblings('.search_more').slideUp(300);
                  }
               );

      });


//結束
});
////////////////////////////////////////////////視窗resize、翻轉
// $(window).on("resize orientationchange",function(){

//             var _width = $win.width();         
               
//             if(_width>=1089){
//                 $(".search_open").hide();
//                $(".search_close").hide();
//                $(".search_more").show();
//             }else{
//               $(".search_open").show();
//                $(".search_close").hide();
//                $(".search_more").hide();
//             };  
      

//  }).resize();