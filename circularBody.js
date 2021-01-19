class circularBody{
    constructor(x,y,radius,tint = "white"){
        var options = {
            isStatic : false , 
            restitution : 1.2 ,
            friction : 0 ,
            density : 1
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius ;
        this.tint = tint ;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position ;
        var angle = this.body.angle ;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.tint);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius);
        pop();
    }
}