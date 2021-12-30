function Player(){
	this.x = 1000;
	this.y = 100;

	this.speed = 10;

	this.move_left = false;
	this.move_right = false;
	this.move_up = false;
	this.move_down = false;

	this.r = Math.floor(Math.random() * 255) + 1;
	this.direct_r = 1;
	this.g = Math.floor(Math.random() * 255) + 1;
	this.direct_g = 1;
	this.b = Math.floor(Math.random() * 255) + 1;
	this.direct_b = 1;

	this.key_check = function(){
		document.addEventListener('keydown', (event) => {
		const keyCode = event.code;

		if (keyCode === 'KeyA') {
			this.move_left = true;
		}
		if (keyCode === 'KeyD') {
			this.move_right = true;
		}
		if (keyCode === 'KeyW') {
			this.move_up = true;
		}
		if (keyCode === 'KeyS') {
			this.move_down = true;
		}
		}, false);

		document.addEventListener('keyup', (event) => {
		const keyCode = event.code;

		if (keyCode === 'KeyA') {
			this.move_left = false;
		}
		if (keyCode === 'KeyD') {
			this.move_right = false;
		}
		if (keyCode === 'KeyW') {
			this.move_up = false;
		}
		if (keyCode === 'KeyS') {
			this.move_down = false;
		}
		}, false);
	};

	this.move = function(){
		if (this.move_left){this.x-=this.speed};
		if (this.move_right){this.x+=this.speed};
		if (this.move_up){this.y-=this.speed};
		if (this.move_down){this.y+=this.speed};
	};

	this.color = function(){
		if (0 >= this.r || this.r >= 255){this.direct_r = -this.direct_r};
		if (0 >= this.g || this.g >= 255){this.direct_g = -this.direct_g};
		if (0 >= this.b || this.b >= 255){this.direct_b = -this.direct_b};

		this.r += this.direct_r * this.speed;
		this.g += this.direct_g * this.speed;
		this.b += this.direct_b * this.speed;
	};
};