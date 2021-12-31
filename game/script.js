let camera = new Camera();

let player = new Player(1000, 100, 100, 100);

player.key_check();




let bill = new Sprite(0, 0, 100, 100);
bill.img.src = "https://static.wikia.nocookie.net/disney/images/4/41/Profile_-_Bill_Cipher.png/revision/latest";


// Main Loop
setInterval(function(){
	camera.follow(player.x - 50, player.y);

	// clear screen
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canv.width, canv.height);


	ctx.lineWidth = 10;
	ctx.strokeStyle = "lime";
	ctx.strokeRect(0 - camera.x, 0 - camera.y, 1920, 1080);

	ctx.fillStyle = "white";
	ctx.font = "bold 48px sans-serif";
	ctx.fillText("WORLD MAP", 960 - camera.x, -50 - camera.y);


	// Draw Player
	ctx.drawImage(bill.img, player.x - camera.x, player.y - camera.y, bill.width, bill.height);
	ctx.fillStyle = `rgb(${player.r}, ${player.g}, ${player.b})`;
	ctx.fillRect(player.x - camera.x, player.y - camera.y + 100, player.width, player.height);

	player.move();
	player.color();

	
},
	1000 / 60 // 60 fps
);