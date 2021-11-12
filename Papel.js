class Papel{
  constructor(x,y,width,height){
    var options = {
			"density" : 1.2
		 }
     this.x=x;
		this.y=y;
		this.r=50;
		this.width = width
    this.height = height
    this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
		this.image = loadImage("papel.png");
    World.add(world, this.body);
	}


	
	display(){
			var pos=this.body.position;		
			push();
			translate(pos.x, pos.y);
			imageMode(CENTER);
     fill("white") 
			ellipse(0,0, this.r);
			image(this.image, 0, 0, 100, 80)
      pop();
	}
 



  



}