class stone
{ constructor(x,y,radius)
    { var options = { //isStatic:true,
       // restitution:0.3,
        //friction:0.5,
        density:0.99
        
     
       } 
       this.image=loadImage("stone.png");
    
  
  
  
    this.body=Bodies.circle(x,y,radius,options);
    this.radius=radius;
    
     World.add(world, this.body); }
  
    display(){ var pose =this.body.position;
            
  
  
      push();
  
      translate(pose.x, pose.y) ;
      rotate(this.body.angle)
      imageMode(CENTER);
      ellipseMode(CENTER);
      
    
  
 
 
  
  fill("purple");
  
  
  
  image(this.image,0, 0,this.radius*2,this.radius*2);

  pop();
    }
}