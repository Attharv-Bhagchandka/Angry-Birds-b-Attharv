class Ground{
    constructor(x,y,w,h){
        var options={
            isStatic: true
        }
        this.body = bodies.rectangle(x,y,w,h, options)
        this.width = w;
        this.height = h;

        world.add(World, this.body);
    }
    display(){
        fill("brown")
        var Pos = this.body.position;

        rectMode(CENTER);
        rect(Pos.x, Pos.y, this.width, this.height);
    }
}