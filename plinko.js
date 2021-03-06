class Plinko{
    constructor(x,y,r){
        var options = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        World.add(world, this.body);
        
    }
    display(){
        push()
        var pos = this.body.position;
        translate(pos.x, pos.y);
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.r, this.r);
        pop()
    }
  }