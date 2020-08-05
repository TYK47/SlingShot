class Chain{
    constructor(bodyA,pointB){
        var opition  = {
            bodyA: bodyA, pointB: pointB, length: 10, stiffness:0.5
        }
        this.chain = Matter.Constraint.create(opition)
        World.add(world,this.chain)
    }
    fly() {
        this.chain.bodyA = null
    }
    display() {
    if(this.chain.bodyA) {
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.pointB
        strokeWeight(4)
        line(pointA.x, pointA.y,pointB.x, pointB.y) }
    }
}