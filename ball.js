class Ball {
    constructor(x, y, radius){
        var options = {
            'restitution':0.8,
            'density':1.0,
            'friction':1.0,
        }
 
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    } 
 
    display(){
        var pos = this.body.position;

        fill("yellow");
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius);
    } 
}