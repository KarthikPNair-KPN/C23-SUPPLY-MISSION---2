class Box {
    constructor(x,y,width,height){
        var options = {
            'friction':50,
            'restitution':0,
            'density':0.1
        };
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        

        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        pos.x=this.body.position.x
        pos.y=this.body.position.y
        fill("red");
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height);
    }
}