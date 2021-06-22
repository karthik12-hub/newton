class Bob{
    constructor(x,y,width,height){
        var options={
            //'density':1,
           // 'frictionAir':0.01,
             isStatic:false
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.positon
        push()
      translate(this.body.position.x,this.body.position.y)
      ellipseMode(CENTER)
      fill("pink")
      ellipse(0,0,this.width,this.height)
      pop()
    }
}