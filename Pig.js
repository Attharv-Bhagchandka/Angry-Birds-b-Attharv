class Pig{
    constructor(x,y,){
        var options = {
            restitution: 0.8,
            friction: 0.3,
            density: 1           
        }
        this.body = bodies.rectangle(x,y, 50, 50, options);
        world.add(World, this.body);

        this.width = 50;
        this.height = 50;

        world.add(World, this.body);
    }

    display(){
        var Pos = this.body.position;
        var Angle = this.body.angle;

        push();
        translate(Pos.x, Pos.y);
        rotate(Angle);
        rectMode(CENTER);

        strokeWeight(4);
        stroke("orange");
        fill("Red");
        rect(0, 0, this.width, this.height);

        pop();
    }
};