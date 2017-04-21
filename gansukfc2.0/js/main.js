
$(function(){
	    	var c=0;
		//点击弹出事件
		var w = $("body").height();
		$(".fixed").click(function() {
//			alert(1)
				$(".hiddenpage").show("fast");
				$("#mask").css({
					"display": "block",
					"width": "w"
				});
			})
			//选择事件

		$('.ul1 li').click(function() {
			var index=$(this).index();
			$('.ul1 li').removeClass("active");
			$(this).toggleClass('active');	
			$(".showimg").attr("src","img/"+index+".png");
			if($(this).text()==15+"元"){
				$(".money").html(1245+"积分");
			}else if($(this).text()==30+"元"){
				$(".money").html(2490+"积分");
			}else if($(this).text()==50+"元"){
				$(".money").html(4150+"积分");
			}
			
		
		})

		//关闭选择页面事件
		$("#xx").click(function() {
			$(".hiddenpage").hide("fast");
			$("#mask").css("display", "none");
			$('.ul1 li').removeClass("active");
		})
		//数量控制
		//减减
		$("#less").click(function(){
			c--;
			$("#inner").html(c);
			if($("#inner").html()<=1){
				$("#inner").html(1);
				c=0;
			}
		})
		//加加
		$("#add").click(function(){
			c++;
				$("#inner").html(c);
		})
		
		
		//	tab切换
		$("#ul2 li").click(function(){
			
			var index=$(this).index();
//			alert(index)
			$(".slider").animate({
						left:$(this).index()*$(this).width(),
					});
			 for(var i=0;i<$(".bottom div").length;i++){
             	$(".bottom div")[i].style.display="none";
             	
            
            }
			    $(".bottom div")[index].style.display="block";
           	    $(".bottom div")[index].className="show";
                
		})
	    })