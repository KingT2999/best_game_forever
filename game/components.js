// ENGINE COMPONENTS

// coordinates
class Vector2 {
	constructor(x, y) {
		this.x = (x === undefined) ? 0 : x;
		this.y = (y === undefined) ? 0 : y;
	}

	set(x, y) {
		this.x = x || 0;
		this.y = y || 0;
	}

	clone() {
		return new Vector2(this.x, this.y)
	}

	add(vector) {
		return new Vector2(this.x + vector.x, this.y + vector.y);
	}

	subtract(vector) {
		return new Vector2(this.x - vector.x, this.y - vector.y);
	}

	scale(scalar) {
		return new Vector2(this.x * scalar, this.y * scalar);
	}

	angle() {
		return Math.atan2(this.y, this.x);
	}

	rotate(alpha) {
		var cos = Math.cos(alpha);
		var sin = Math.sin(alpha);
		var vector = new Vector2();
		vector.x = this.x * cos - this.y * sin;
		vector.y = this.x * sin + this.y * cos;
		return vector;
	}
}


// Empty Game Object
class GameObj extends Vector2 {
	constructor(x, y, width, height){
		super(x, y);

		this.width = width;
		this.height = height;
	}
}