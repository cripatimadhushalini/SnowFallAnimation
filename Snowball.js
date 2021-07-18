class Snowball {
  constructor(x,y){
   var options={
    'restitution':0.8,
    'friction':1.0,
    'density':1.0
   }
   this.w = 10
   this.h = 10;
   this.image = loadImage("Images/Snow ball.png")
   this.body = Bodies.rectangle(x,y,50,50,options);
   World.add(world,this.body);
  }
  display(){
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      strokeWeight(4)
      stroke("blue");
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      imageMode(CENTER);
      image(this.image,0,0,this.w+50,this.h+50)
      pop();
  }
}