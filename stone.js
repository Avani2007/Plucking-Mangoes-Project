class Stone{

    constructor(x,y){
        var options={
            isStatic:'false',
            restitution:'0',
            friction:'1',
            density:'1.2'
        }

        this.stone= Bodies.circle(x,y,40,options)
        this.x=x
        this.y=y
        this.radius=40
        this.image = loadImage("Plucking Mangoes/stone.png")
        World.add(world,this.stone)
    }

    display(){
      
       // ellipseMode(RADIUS);
        //ellipse(0, 0, 20, 20);
        imageMode(CENTER)
        image(this.image,this.stone.position.x,this.stone.position.y,40,40)
       
      }


}