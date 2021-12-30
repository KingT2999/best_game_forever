function Camera(){
	this.x = 0;
	this.y = 0;

	this.follow = function(Ox, Oy){
		this.x = Ox - canv.width / 2;
		this.y = Oy - canv.height / 2;
	};
}