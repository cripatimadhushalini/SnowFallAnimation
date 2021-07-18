class Girl{
    constructor(x,y,w,h){
        var options={
        'density':1,
        'friction':0.5
    }
      this.w=w;
      this.h=h;
      this.image = loadImage("Images/Winter Girl 3.png");
      this.body = Bodies.rectangle(x,y,w,h,options);
      World.add(world,this.body);
    }

    display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    imageMode(CENTER)
    image(this.image,0,0,this.w,this.h);
    pop();
  }
}