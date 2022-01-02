class Camera {
	constructor(){
		this.x = 0;
		this.y = 0;
	}

	follow(Ox, Oy){
		this.x = Ox - canv.width / 2;
		this.y = Oy - canv.height / 2;
	}
}

let camera = new Camera();