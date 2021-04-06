class Log{
    constructor(x, y, w, h, angle){
        var options = {
            restitution: 0.8,
            friction: 1,
            density: 1        
        }
        this.body = bodies.rectangle(x, y, w, h, options);
        world.add(World, this.body);

        this.width = w;
        this.height = h;

        Matter.Body.setAngle(this.body, angle);

        world.add(World, this.body);
    }

    display(){
        var Pos = this.body.position;
        var Angle = this.body.angle;

        push()
        translate(Pos.x, Pos.y)
        rotate(Angle)
        
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill("brown");

        rect(0, 0, this.width, this.height);
        pop();
    }
};