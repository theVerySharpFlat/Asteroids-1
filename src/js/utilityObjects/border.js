function Border(){
	this.accel = createVector(0,0);
	this.velocity = createVector(0,0);
	this.pos = createVector(-1*GAMEWIDTH/2,
	-1*GAMEHEIGHT/2);
	this.screenPos = createVector(this.pos.x,this.pos.y);
	

	this.draw = function(){
		push();
		translate(this.screenPos.x,this.screenPos.y);
		noFill();
		stroke(255);
		rect(0,0, GAMEWIDTH,GAMEHEIGHT);
		pop();
		
		
	}
	this.update = function(){
		this.screenPos.x += gameVector.x;
		this.screenPos.y += gameVector.y;
		this.velocity.add(this.accel);
    	this.pos.add(this.velocity);
	}
	this.render = function(){
		this.update();
		this.draw();
	}
}