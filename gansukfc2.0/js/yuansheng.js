var lis = document.querySelectorAll("#ul1 li");
var slider = document.querySelector("#slider");
var timer = null;
for(var i = 0; i < lis.length; i++) {
	lis[i].index = i;
	lis[i].onmouseenter = function() {
		var start = slider.offsetLeft;
		var end = this.index * slider.offsetWidth;
		var change = end - start;
		var startT = 0;
		var endT = 20;
		//开启新的计时器之前  清掉之前的计时器
		clearInterval(timer);
		timer = setInterval(function() {
			startT++;
			if(startT >= endT) {
				clearInterval(timer);
			}
			slider.style.left = Tween.Linear(startT, start, change, endT) + "px";
		}, 30);
	}
}