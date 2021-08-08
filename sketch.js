

var dog, happyDog; 
var database; 
var food, foodStock;


//Create variables here

function preload()
{
  happyDog = loadImage("images/dogImg.png")
  dog = loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
  database = firebase.database();

	createCanvas(500, 500);

  //Creating Sprites
  dog = createSprite(250,250,10,10);
  

  //Reading the DataBase
  foodStock = database.ref(food);
  foodStock.on("value",readStock);
  
}


function draw() { 
  
  //Giving Background Colour
  background(46, 139, 8);

  if(keyWentDown(UP_ARROW)){
    writeStock(food);
    dog.addImage(happyDog)
    dog.scale = 0.5 ;
  }

  drawSprites();
  //add styles here

}

 //Function to read vlaue from Database
function readStock(data){
  food = data.val(); //transferring data from database to position

}

//Function to write value to database
function writeStock(x){
  if(x <= 0){
    x = 0 ;
  }
  else{
    x = x - 1 ;
  }

  database.ref('/').update({
    Food:x
})

}


