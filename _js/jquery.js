// JavaScript Document


$(function(){
    
    
	
	////////////////////     LNB     ////////////////////
	
	/*   LNB 로드   */
	//$("#lnb").load('../_inc/lnb.html');
	
    
    
    $(document).on("click",".menu ul li a",function(){
			
			var self = this;
			
			
			
			//현재 선택된 메뉴의 하위메뉴 의 열림,닫힘 상태를 변수에 담는다.
			var openLength = $(this).closest("ul").find("li ul[style*='block']").length;
			var open = $(this).closest("ul").find("li ul[style*='block']");
			var displayCondition = $(this).next().css("display");
				
			//클릭한 버튼에 하위 메뉴가 있고 slide 이벤트가 완료가 되었다면 (더블 클릭 방지)
			if($(this).next().is("ul") == true){
				
				if( openLength > 0 && displayCondition=="none"){  // 클릭한 메뉴의 하위메뉴는 닫혀있고 다른 메뉴가 열려있을때
                    //console.log("a");
					open.slideUp(500,'easeInOutExpo',function(){
						$("#lnb a[class^='on']").removeClass("on");
						$(self).addClass("on");	
						$(self).parents("ul").siblings("a").addClass("on");
						$(self).next().slideDown(500,'easeInOutExpo');
						
					});
					return false;
						
				}else if( openLength > 0 && displayCondition=="block"){  // 클릭한 메뉴의 하위메뉴가 열려있을때
                    //console.log("b");
					open.slideUp(500,'easeInOutExpo',function(){
						open.prev().removeClass("on");
					});
					return false; 
							
				}else if( openLength == 0 && displayCondition=="none" ){  // 아무런 메뉴도 열리지 않았을때
                    //console.log("c");
					$("#lnb a[class^='on']").removeClass("on");
					$(self).addClass("on");	
					$(self).parents("ul").siblings("a").addClass("on");
					$(self).next().slideDown(500,'easeInOutExpo');
					return false;	
				}
				
			}else{
				
				open.slideUp(500,'easeInOutExpo');
				$("#lnb a[class^='on']").removeClass("on");
				$(self).addClass("on");	
				$(self).parents("ul").siblings("a").addClass("on");
			
			}
		}); //메뉴 버튼 클릭 이벤트 END	
    
	
	////////////////////     라디오 그룹     ////////////////////
	
	
	$(document).on("click",".radio-group .item",function(){
        $(this).closest(".radio-group").find(".item").removeClass("on");
		$(this).addClass("on");
        
	});
    
    ////////////////////     테이블소팅     ////////////////////
	
	
	$(document).on("click",".table-group .item",function(){
        $(this).closest(".table-group").find(".item").removeClass("on");
		$(this).addClass("on");
        if($(this).hasClass("up")){
            $(this).removeClass("up");
            $(this).addClass("down");
        }else{
            $(this).removeClass("down");
            $(this).addClass("up");
        }
        
	});
	
	
	
	////////////////////     modal     ////////////////////    
    
    $(document).on("click",".btn-modal,.btn-popup",function(){
        var target = $(this).attr("data-target");
        modalPopup(target)
        
	});
    
    
    function modalPopup(tg){
        
        var target = $("."+tg);
        target.show();
    }
    
    $(document).on("click",".btn-close",function(){
		
        $(this).closest("#modal-wrap").hide();
	});
    
    $(document).on("click",".popup-close",function(){
		
        $(this).closest(".popup-wrap").hide();
	});
    
    
    ////////////////////     expand     ////////////////////    
    
    $(document).on("click",".btn-expand",function(){
        var target = $(this).attr("data-target");
        expandSlide(target)
        
	});
    
    
    function expandSlide(tg){
        
        var target = $("."+tg);
        target.slideDown(500,"easeInOutExpo");
    }
    
    $(document).on("click",".expand-close",function(){
		
        $(this).closest("#expand-slide").slideUp(500,"easeInOutExpo");
	});
	
	
	////////////////////     acodion     //////////////////// 
	
	$(document).on("click",".btn-plus",function(){
		if($(this).hasClass("on")){
			$(this).closest("tr").removeClass("on");
            $(this).removeClass("on");
            $(this).closest("tr").next("tr").find("#expand-slide").slideUp(500,"easeInOutExpo");
		}else{
			$(this).closest("tr").addClass("on");
            $(this).addClass("on");
            $(this).closest("tr").next("tr").find("#expand-slide").slideDown(500,"easeInOutExpo");
		}
        
	});
    
    
    ////////////////////     top-search-wrap     ////////////////////
    
    $(document).on("click",".top-search-wrap .expand",function(){
        if($(this).closest(".wrap").hasClass("on")){
            $(this).closest(".wrap").removeClass("on");
            $(this).closest(".wrap").find(".expand-wrap").slideUp(500,"easeInOutExpo");
        }else{
            $(this).closest(".wrap").addClass("on");
            $(this).closest(".wrap").find(".expand-wrap").slideDown(500,"easeInOutExpo");
        }
        
    });
    
    $(document).on("click",".top-search-wrap .month-btn-wrap button",function(){
        
        $(this).closest(".month-btn-wrap").find("button").removeClass("on");
        $(this).addClass("on")
        
    });
    
    ////////////////////     TREE     ////////////////////
    
    
    $(document).on("click","#tree ul li button",function(e){
    
        if($(this).closest("li").hasClass("on")){
            $(this).closest("li").removeClass("on");
            $(this).closest("li").find(">ul").slideUp(500,"easeInOutExpo");
        }else{
            $(this).closest("li").addClass("on");
            $(this).closest("li").find(">ul").slideDown(500,"easeInOutExpo");
        }
        
    });
    
    $(document).on("click","#tree ul li a",function(e){
    
        if($(this).hasClass("on")){
            $(this).removeClass("on");
        }else{
            $(this).closest("#tree").find("a").removeClass("on");
            $(this).addClass("on");
        }
        
        
        e.preventDefault();
        
    });
    
    
    ////////////////////     TAB     ////////////////////
    
    
    $(document).on("click",".inter-tab li",function(){
    
        var idx= $(this).index();
        
        $(this).closest(".modal-con").find(".tab-con").hide();
        $(this).closest(".modal-con").find(".tab-con").eq(idx).show();
        
        $(this).closest(".tab1-wrap").find("li").removeClass("on");
        $(this).addClass("on");
        
    });
});








