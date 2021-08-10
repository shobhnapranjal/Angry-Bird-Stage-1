const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var log1,log2,log3,log4;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,height-15,2000,20)

    box1 = new Box(700,580,70,70);
    box2 = new Box(950,580,70,70);
    log1=new Log(830,560,20,330,PI/2);

    box3 = new Box(700,540,70,70);
    box4 = new Box(950,540,70,70);
    log2=new Log(830,520,20,330,PI/2);
    
    box5=new Box(830,500,70,70);

    log3= new Log(800,500,20,180,PI/7);
    log4= new Log(900,500,20,180,-PI/7);

    pig1= new Pig(830,580,50,50);
    pig2= new Pig(830,540,50,50);
    
    bird= new Bird(100,100,50,50);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    log1.display();

    box3.display();
    box4.display();
    log2.display();

    box5.display();

    log3.display();
    log4.display();
    pig1.display();
    pig2.display();

    bird.display();



}