class Rain{
    constructor(x,y){
        var options={
			
			restitution :0.001,
            friction :0.1
           
			}
		this.x=x;
		this.y=y;
		this.r=7;
		
		this.body=Bodies.circle(this.x, this.y, this.r, options)
       // this.body.angle=2;
        
		World.add(world, this.body);
	}

	display()
	{
		var rainPos=this.body.position;	
		push();
        
            
            
           
                //translate(rainPos.x, rainPos.y);
                // rectMode(CENTER);
               // rotate(this.body.angle)
                fill(0,70,90);
                
                ellipseMode(RADIUS);
                ellipse( rainPos.x,rainPos.y,this.r*0.7, this.r*1)
            
		pop()

     
	  } 
	  update(){
		if(this.body.position.y>height){
			Matter.Body.setPosition(this.body,{x:random(0,1000),y:0})
		}
	} 
 }
 
