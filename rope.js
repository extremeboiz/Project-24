class Rope{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bird.body,
            bodyB: log6.body,
            stiffness: 0.04,
            length: 10
    }
    this.rope = Constraint.create(options);
   
}
display(){
    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.bodyB.position;
    strokeWeight(3);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
}

}
