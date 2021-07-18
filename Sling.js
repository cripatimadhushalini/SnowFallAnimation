class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 5
        }

        this.pointB = pointB
        this.sling = loadImage("Images/snowMan.png");
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }


    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null
    }
}