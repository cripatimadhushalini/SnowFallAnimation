class Snowman {
    constructor(x,y,w,h){
     var options={
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
     }
     this.w = w
     this.h = h
     this.image = loadImage("Images/SnowMan.png")
     this.body = Bodies.rectangle(x,y,w,h,options);
     World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.w+50,this.h+50)
        pop();
    }
  }