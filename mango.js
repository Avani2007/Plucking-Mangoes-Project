class Mango{

        constructor(x,y){
            var options={
                isStatic:'true',
                restitution:'0',
                friction:'1',
                density:'1.2'
            }
    
            this.body= Bodies.circle(x,y,40,options)
            this.x=x
            this.y=y
            this.radius=40
            this.image = loadImage("Plucking Mangoes/mango.png")
            World.add(world,this.body)
        }
    
        display(){
          
            imageMode(CENTER)
            image(this.image,this.body.position.x,this.body.position.y,40,40)
           
          }
    
    
    }