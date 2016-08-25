//create constructor
function Enemy(type, hitPoint){
    this.type = type;
    this.hitPoint = hitPoint;
    this.defense = hitPoint*3;
}

//array to hold generated enemies
var enemies=[]

//function to take a number and run generator n number of times
function createEnemy(numberOfEnemies){
    for(var i = 0; i<numberOfEnemies; i++) {
        var type = typeOfEnemy();
        console.log(type) ;
        var enemy = new Enemy(type, hitPoint(type));
        enemies.push(enemy);
        console.log(enemies[i]);
    }
     
}


//create random type generator
function typeOfEnemy(){
    var randomNum = Math.random() * 100;
    if((randomNum >= 0) && (randomNum < 33)) {
        var enemyType="Ancient Dragon";
    } else if ((randomNum >= 33) && (randomNum < 66)) {
        var enemyType = "Prowler";
    } else {
        var enemyType="Mighty Grunt"
    }
    return enemyType
}

//create hitpoint generator

function hitPoint(type) {
    if (type == "Ancient Dragon"){
        var hitPoints = Math.random() * (100 - 80) + 80; 
    } else if (type ==="Prowler") {
        var hitPoints = Math.random() * (79-50) + 50;
    } else {
        var hitPoints = Math.random() * (49-20) + 20;
    }
    
    var defense = hitPoints * 3
    return hitPoints
}