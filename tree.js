class Tree{

    constructor(){
        var options={
            isStatic:'true',
            restitution:'0',
            friction:'1',
            density:'1.2'
        }

        this.tree= Bodies.rectangle(600,450,400,550,options)
        this.x=600
        this.y=450
        this.width=400
        this.height=550
        this.image = loadImage("Plucking Mangoes/tree.png")
        World.add(world,this.tree)
    }

    display(){
      
       // ellipseMode(RADIUS);
        //ellipse(0, 0, 20, 20);
        imageMode(CENTER)
        image(this.image,this.tree.position.x,this.tree.position.y,400,550)
       
      }


}