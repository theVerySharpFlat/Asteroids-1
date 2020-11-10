function Laser(pos,angle){
	this.accel = createVector(0,0);
	this.velocity = createVector(Math.sin(angle),Math.cos(angle));
	this.pos = createVector(pos.x,pos.y);
	this.screenPos = createVector(this.pos.x,this.pos.y);
	this.bulletSpeed = 5;
	this.draw = function(){
		push();
		translate(this.screenPos.x,this.screenPos.y);
		stroke(255);
		strokeWeight(4);
		point(0,0);	
		pop();
	}
	this.update = function(){
		this.screenPos.x += gameVector.x;
		this.screenPos.y += gameVector.y;
		this.velocity.add(this.accel);
		this.pos.add(this.velocity);
	}
	this.render = function(){
		this.draw();
		this.update();
	}
}