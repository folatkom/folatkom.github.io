var dishes=["screwdriver","margarita","whiskeysour","martini","bluelagoon","mojito","oldfashioned","choco"]
for(let i=0;i<dishes.length;i++){
	document.getElementById(dishes[i]).addEventListener("mouseover", function() {changeOpacity();});
	function changeOpacity(){
		$("#"+dishes[i]+">img").css("opacity",0.3);
		$("#"+dishes[i]+">.dish-desc").css("opacity",1);
	}
	document.getElementById(dishes[i]).addEventListener("mouseout",function() {getOpacityBack();});
	function getOpacityBack(){
		$("#"+dishes[i]+">img").css("opacity",1);
		$("#"+dishes[i]+">.dish-desc").css("opacity",0);
	}
}


