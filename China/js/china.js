
		//第二页线左1
function fn2(){
	$(".xian1").animate({
	"width": "145px",
	"height": "1px"
}, 1000, function() {
	$(".dian1").css("display", "block");
	//线2
	$(".xian2").animate({
		"width": "1px",
		"height": "420px"
	}, 1000, function() {
		$(".dian2").css("display", "block");
		//线3
		$(".xian3").animate({
			"width": "66px",
			"height": "1px"
		}, 600, function() {
			$(".dian3").css("display", "block");
			//线4
			$(".xian4").animate({
				"width": "1px",
				"height": "90px"
			}, 1000, function() {
				$(".dian4").css("display", "block");

			});
		});
	});
});

		//线5
		$(".xian5").animate({
			"width": "136px",
			"height": "1px"
		}, 1000, function() {
			$(".dian5").css("display", "block");
			//线6
			$(".xian6").animate({
				"width": "1px",
				"height": "340px"
			}, 1000, function() {
				$(".dian6").css("display", "block");

			});

		});
		//线7
		$(".xian7").animate({
			"width": "127px",
			"height": "1px"
		}, 1000, function() {
			$(".dian7").css("display", "block");
			//线8
			$(".xian8").animate({
				"width": "1px",
				"height": "40px"
			}, 1000, function() {
				$(".dian6").css("display", "block");
			})
		});
		}
function fn3(){
	

		//第三页线9
		$(".xian9").animate({
				"width": "1px",
				"height": "10vh"
			}, 1000, function() {
				$(".dian8").css("display", "block");
			});
		//第三页点击放大
		var isClick = true;
		$(".bgimg1").on("click", function() {
			if (isClick) {
				$(".bgimg1").css({
					"width": "100vw",
					"height": "80vh",
					"top": "10%",
					"left": "0"
				});
			} else {
				$(".bgimg1").css({
					"width": "94vw",
					"height": "70vh",
					"top": "15%",
					"left": "3%"
				});
			}
			isClick = !isClick;

		})	
}			
function fn4(){
//第四页线左10
$(".xian10").animate({
	"width": "170px",
	"height": "1px"
}, 2000, function() {
	$(".dian9").css("display", "block");
	//线11
	$(".xian11").animate({
		"width": "1px",
		"height": "48px"
	}, 1000, function() {
		$(".dian10").css("display", "block");
		//线12
		$(".xian12").animate({
			"width": "74px",
			"height": "1px"
		}, 1000, function() {
			$(".dian11").css("display", "block");

		});
	});
});
//线左13
$(".xian13").animate({
	"width": "1px",
	"height": "110px"
}, 2000, function() {
	$(".dian12").css("display", "block");
	//线14
	$(".xian14").animate({
		"width": "70px",
		"height": "1px"
	}, 1000, function() {
		$(".dian13").css("display", "block");
		//线15
		$(".xian15").animate({
			"width": "1px",
			"height": "30px"
		}, 1000, function() {
			$(".dian14").css("display", "block");

		});
	});
});
//线16
$(".xian16").animate({
	"width": "168px",
	"height": "1px"
}, 1000, function() {
	$(".dian15").css("display", "block");
	//线17
	$(".xian17").animate({
		"width": "1px",
		"height": "375px"
	}, 1000, function() {
		$(".dian16").css("display", "block");
	})
});
}
function fn5(){
		//第五页线18
		$(".xian18").animate({
				"width": "1px",
				"height": "10%"
			}, 1000, function() {
				$(".dian17").css("display", "block");
			});
		//第五页点击放大
		var isclick = true;
		$("#bgimg2").on("click", function() {
			if (isclick) {
				$("#bgimg2").css({
					"width": "100vw",
					"height": "80vh",
					"top": "10%",
					"left": "0"
				});
			} else {
				$("#bgimg2").css({
					"width": "94vw",
					"height": "70vh",
					"top": "15%",
					"left": "3%"
				});
			}
			isclick = !isclick;

		})
}

	//第七页
