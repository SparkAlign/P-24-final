class sand {
    constructor(x,y,r) {
      var options = {
          density:1,
          restituition:1.3,
          friction:5
      }
      this.body = Bodies.circle(x,y,r,options);
      this.x=x;
      this.y=y;
      this.r=r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x , pos.y);
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("black");
      fill("orange");
      ellipse(0,0,this.r,this.r);
      pop()

    }
  };