	let imgNum = 1;
	let timer;
for (let i=1; i<=3; i++){
	$("#tile-"+i).hover(function() {
	$(".tile").addClass("hover");
	$("#tile-"+i).removeClass("hover");
	function slider(){
	$("#tile-"+i).attr("src","img\\img-"+i+imgNum+".png");
	imgNum++;
	if (imgNum == 3){
			imgNum = 0;
		}	
	}
	timer = setInterval(slider,1200)
	},function() {
		$(".tile").removeClass("hover");
		clearInterval(timer);
		imgNum = 1;
		$("#tile-"+i).attr("src","img\\img-"+i+0+".png");
	});	
}

