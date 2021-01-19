class Chain {
    constructor(bodyA , bodyB , xOffset){
        var Bpos = bodyB.position ;
        this.xOffset = xOffset ;
        var options = {
            stiffness : 1 ,
            bodyA : bodyA ,
            //bodyB : bodyB
            pointB : {x: Bpos.x + xOffset, y : Bpos.y}
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pos1 = this.chain.bodyA.position ;
        var pos2 = this.chain.pointB ;
        //var pos3 = this.chain.bodyB.position ;
        strokeWeight(4);
        stroke(51);
        line(pos1.x,pos1.y,pos2.x,pos2.y);
    }
}