class Man {
    constructor(x,y) {
      var options = {
          isStatic: true,
          restitution:0.001,
          friction:2
      }
      this.image=loadImage("walking_1.png")
      this.body = Bodies.circle(x,y,120,options);
     // this.width = width;
     // this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
     // fill("brown");
      image(this.image,pos.x, pos.y,400,300);
    }
  };
