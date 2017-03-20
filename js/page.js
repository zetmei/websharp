////////////////////////////// foundation總開關
$(function(){ 	
 //使用頁面有:newslist.html頁面
 $(document).foundation();

});
////////////////////////////// 首頁
$(function(){	
	//年度新品,產品hover伸展100%
	var _width = $win.width();
	if(_width>=1089){

			//年度新品滑動
			$(".PH01").mouseover(function(){
					//摸到的第幾個
		            var hovering=$(this).index();  
					$(".PH01").eq(hovering).siblings().fadeOut(0);
			});
			$(".PH01").mouseleave(function(){
					var hovering=$(this).index();  
					$(".PH01").eq(hovering).siblings().delay(0).fadeIn(300);
			});

			$(".PH02").mouseover(function(){
					//摸到的第幾個
		            var hovering=$(this).index();  
					$(".PH02").eq(hovering).siblings().fadeOut(0);
			});
			$(".PH02").mouseleave(function(){
					var hovering=$(this).index();  
					$(".PH02").eq(hovering).siblings().delay(0).fadeIn(300);
			});

	};

	 //最新情報,換圖list
      $(".news_box_L a").eq(0).fadeIn(0).siblings().fadeOut(0);
      $('.news_box_R a').mouseover(
             function(){  
                  var NOW=$(this).index();   
                  $(".news_box_L a").eq(NOW).fadeIn(0).siblings().fadeOut(0);
             }
      );
      $(".news_box_R a").mouseleave(function(){
      		$(".news_box_L a").eq(0).fadeIn(0).siblings().fadeOut(0);
	  });

	  //年度新品,color換圖list(因為技術不佳只好分開寫)
      $(".product_boxA .mobile_a").eq(0).fadeIn(0).siblings('.mobile_a').fadeOut(0);
      $(".product_boxB .mobile_a").eq(0).fadeIn(0).siblings('.mobile_a').fadeOut(0);
      $(".product_boxC .mobile_a").eq(0).fadeIn(0).siblings('.mobile_a').fadeOut(0);
      $(".product_boxD .mobile_a").eq(0).fadeIn(0).siblings('.mobile_a').fadeOut(0);

	  $('.product_boxA .color_box span').mouseover(
	             function(){  
	                  var NOW=$(this).index();   
	                  $(".product_boxA .mobile_a").eq(NOW).fadeIn(0).siblings('.mobile_a').fadeOut(0);
	             }
	  );
	  	  $('.product_boxB .color_box span').mouseover(
	             function(){  
	                  var NOW=$(this).index();   
	                  $(".product_boxB .mobile_a").eq(NOW).fadeIn(0).siblings('.mobile_a').fadeOut(0);
	             }
	  );
	  	  	  $('.product_boxC .color_box span').mouseover(
	             function(){  
	                  var NOW=$(this).index();   
	                  $(".product_boxC .mobile_a").eq(NOW).fadeIn(0).siblings('.mobile_a').fadeOut(0);
	             }
	  );
	  	  $('.product_boxD .color_box span').mouseover(
	             function(){  
	                  var NOW=$(this).index();   
	                  $(".product_boxD .mobile_a").eq(NOW).fadeIn(0).siblings('.mobile_a').fadeOut(0);
	             }
	  );
   //    $(".color_box span").mouseleave(function(){
   //    		$(".mobile_a").eq(0).fadeIn(0).siblings('.mobile_a').fadeOut(0);
	  // });
});
////////////////////////////// 產品內頁
$(function(){	
	//側導覽列打開(家用)
            $('#sidenav_ul01 li').click(
                 function(){      
                 	 //摸到的第幾個
                     var NOW1=$(this).index();  
                      //自己的打開
                      $("#sidenav_ul01 li .sidenav_ul_in").eq(NOW1).slideToggle(300);
                      //自己樣式toggle
                      $("#sidenav_ul01>li").eq(NOW1).toggleClass('active');
                      //其他人收起來
                      $("#sidenav_ul01 li .sidenav_ul_in").eq(NOW1).parent().siblings().find('.sidenav_ul_in').slideUp(300);
                      // 其他人樣式拿掉
                      $("#sidenav_ul01 li .sidenav_ul_in").eq(NOW1).siblings().find('.sidenav_ul_in').removeClass('active');
                 }
             );
    //側導覽列打開(商用)
             $('#sidenav_ul02 li').click(
                 function(){      
                 	 //摸到的第幾個
                     var NOW1=$(this).index();  
                      //自己的打開
                      $("#sidenav_ul02 li .sidenav_ul_in").eq(NOW1).slideToggle(300);
                      //自己樣式toggle
                      $("#sidenav_ul02>li").eq(NOW1).toggleClass('active');
                      //其他人收起來
                      $("#sidenav_ul02 li .sidenav_ul_in").eq(NOW1).parent().siblings().find('.sidenav_ul_in').slideUp(300);
                      //其他人樣式拿掉
                      $("#sidenav_ul02 li .sidenav_ul_in").eq(NOW1).siblings().find('.sidenav_ul_in').removeClass('active');
                 }
             );


});
////////////////////////////// 客戶服務
$(function(){	
	 //公司據點,換圖list
      // $(".branch_R .img_wrap").eq(0).fadeIn(0).siblings().fadeOut(0);
      $('.branch_L ul li').click(
             function(){  
                  var NOW=$(this).index();   
                  $(".branch_R .img_wrap").eq(NOW).fadeIn(0).siblings().fadeOut(0);
                  
                  //樣式穿脫
                  $('.branch_L ul li').eq(NOW).addClass('active');//其他人收起來
                  $('.branch_L ul li').eq(NOW).siblings().removeClass('active');
             }
      );
      //服務據點,換圖list
      // $(".wrap_map iframe").eq(0).fadeIn(0).siblings().fadeOut(0);
      // $(".wrap_map div").eq(0).fadeIn(0).siblings().fadeOut(0);
      $(".info_L div").eq(0).fadeIn(0).siblings().fadeOut(0);
      $('.info_R ul li').click(
             function(){  
                  var NOW=$(this).index(); 
                  //換地圖  
                  $(".wrap_map div").eq(NOW).fadeIn(0).siblings().fadeOut(0);
                  //換資訊
                  $(".info_L div").eq(NOW).fadeIn(0).siblings().fadeOut(0);
                  



                  //樣式穿脫
                  $('.info_R ul li').eq(NOW).addClass('active');//其他人收起來
                  $('.info_R ul li').eq(NOW).siblings().removeClass('active');
             }
      );


});
//////////////////////////////客服-網路經銷商
$(function(){
      //單頁頁面分頁
      $('.page_ul li').click(
                 function(){      
                   //摸到的第幾個
                     var NOW1=$(this).index();  
                      //自己的打開
                      $(".page_ul li").eq(NOW1).addClass('active');//其他人收起來
                      $(".page_ul li").eq(NOW1).siblings().removeClass('active');
                 }
      );


//ready結束
});
  ////////////////////////////// 產品支援-軟體更新
$(function(){ 
      //軟體更新,每一個被點到都執行
      $('.software_btn').each(function(){

                $(this).click(
                   function(){     
                   //自己的打開 
                    $(this).parent().siblings('.software_div').slideToggle(500);
                    //自己的加樣式
                    $(this).find('.icon').toggleClass('active');
                    //鄰居的很難關

                  }
               );

      });

});
///////////////////////////////產品清單頁 排序按鈕
$(function(){ 
    //排序按鈕
             $('.ranking li').click(
                 function(){     
                     var NOW1=$(this).index();  
                      //自己樣式toggle
                      $('.ranking li').eq(NOW1).addClass('active');
                      //其他人樣式拿掉
                      $('.ranking li').eq(NOW1).siblings().removeClass('active');
                       
                 }
             );
  
//結束
});
///////////////////////////////產品清單頁 比較換色
$(function(){ 
    //排序按鈕
             $('#check01_tab').click(
                 function(){      
                      //自己樣式toggle
                      $('.compare_scroll table tr:nth-child(3) td').toggleClass('check01');
                       
                 }
             );
             $('#check02_tab').click(
                 function(){      
                      //自己樣式toggle
                      $('.compare_scroll table tr:nth-child(5) td').toggleClass('check02');
                       
                 }
             );
  
//結束
});

///////////////////////////////產品線 顏色按鈕切換圖&標題
$(function(){ 
  

    $('#color_tab_img').children('img').eq(0).fadeIn(0).siblings().fadeOut(0);
    $('#color_tab_h3').children('h4').eq(0).fadeIn(0).siblings().fadeOut(0);
    $('#color_sqaure li').click(
      function(){  
        var NOW=$(this).index();  
        $('#color_tab_img').children('img').eq(NOW).fadeIn(500).siblings().fadeOut(0);
        $('#color_tab_h3').children('h4').eq(NOW).fadeIn(500).siblings().fadeOut(0);
    
              
          }
      );


 //結束
});