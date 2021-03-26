const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World
const Constraint=Matter.Constraint
var score=0;

function setup() {
  createCanvas(800,400);

  
  engine=Engine.create()
  world=engine.world

  ground=new Ground(400,380,800,20)
  stand1=new Ground(300,290,200,10)
  stand2=new Ground(600,190,125,10)
  box1=new Box(220,260,25,30)
  box2=new Box(245,260,25,30)
  box3=new Box(270,260,25,30)
  box4=new Box(295,260,25,30)
  box5=new Box(320,260,25,30)
  box6=new Box(345,260,25,30)
  box7=new Box(370,260,25,30)

  box8=new Box(235,230,25,30)
  box9=new Box(260,230,25,30)
  box10=new Box(285,230,25,30)
  box11=new Box(310,230,25,30)
  box12=new Box(335,230,25,30)
  box13=new Box(360,230,25,30)

  box14=new Box(260,200,25,30)
  box15=new Box(285,200,25,30)
  box16=new Box(310,200,25,30)
  box17=new Box(335,200,25,30)

  box18=new Box(300,170,25,30)

  box19=new Box(580,185,25,30)
  box20=new Box(595,185,25,30)
  box21=new Box(610,185,25,30)

  box22=new Box(580,140,25,30)
  box23=new Box(605,140,25,30)

  box24=new Box(590,100,25,30)
  
  polygon=new Polygon()
  slingshot=new Slingshot(polygon.body,{x:100,y:200})
} 

function draw() {
  background('lightgreen');  
Engine.update(engine)
text("SCORE : "+score,700,30)

ground.display()
 stand1.display()
 stand2.display()
 fill('blue')
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
fill('yellow')
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
fill('red')
box14.display()
box15.display()
box16.display()
box17.display()
fill('purple')
box18.display()
fill('pink')
box19.display()
box20.display()
box21.display()
fill('green')
box22.display()
box23.display()
fill('orange')
box24.display()

polygon.display()
slingshot.display()

box1.score()
box2.score()
box3.score()
box4.score()
box5.score()
box6.score()
box7.score()
box8.score()
box9.score()
box10.score()
box11.score()
box12.score()
box13.score()
box14.score()
box15.score()
box16.score()
box17.score()
box18.score()
box19.score()
box20.score()
box21.score()
box22.score()
box23.score()
box24.score()



fill('black')
 text(mouseX+','+mouseY,50,50)
}

function mouseDragged()
{

Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})

}

function mouseReleased()
{

slingshot.fly()

}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(polygon.body, {x:100, y:200})
		slingshot.attach(polygon.body)
	}
}
