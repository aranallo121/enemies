var x = document.getElementById("generatebutton");
x.addEventListener("mousedown", show);
x.addEventListener("mouseup", createEnemy);


//create constructor
function Enemy(type, hitPoint) {
    this.type = type;
    this.hitPoint = hitPoint;
    this.defense = hitPoint * 3;
}

//array to hold generated enemies
var enemies = [];

//arrays to hold sorted enemies from function sortEnemieByType
var dragons = [];
var prowlers = [];
var grunts = [];


//function to take a number and run generator n number of times
function createEnemy() {
    var numberOfEnemies = Math.random() * 100;
    var enemiesRounded = Math.floor(numberOfEnemies);
    for (var i = 0; i < enemiesRounded; i++) {
        var type = typeOfEnemy();
        console.log(type);
        var enemy = new Enemy(type, hitPoint(type));
        enemies.push(enemy);
        console.log(enemies[i]);
    }
    sortEnemiesByType(enemies);
    document.getElementById("getReady").innerHTML = "<h2>Get Ready for Battle!</h2>";
}

//create random type generator
function typeOfEnemy() {
    var randomNum = Math.random() * 100;
    if ((randomNum >= 0) && (randomNum < 33)) {
        var enemyType = "Ancient Dragon";
    }
    else if ((randomNum >= 33) && (randomNum < 66)) {
        var enemyType = "Prowler";
    }
    else {
        var enemyType = "Mighty Grunt"
    }
    return enemyType
}

//create hitpoint generator
function hitPoint(type) {
    if (type == "Ancient Dragon") {
        var hitPoints = Math.random() * (100 - 79) + 79;
    }
    else if (type === "Prowler") {
        var hitPoints = Math.random() * (79 - 49) + 49;
    }
    else {
        var hitPoints = Math.random() * (49 - 19) + 19;
    }
    var defense = hitPoints * 3
    return hitPoints
}

//now to sort our array "enemies" into three arrays by type
function sortEnemiesByType(array) {
    for (var i = 0; i < enemies.length; i++) {
        if (enemies[i].type == "Ancient Dragon") {
            dragons.push(enemies[i]);
            var numberDragons = dragons.length;
            document.getElementById("dragonBox").innerHTML = numberDragons;
        } else if (enemies[i].type == "Prowler") {
            prowlers.push(enemies[i]);
            var numberProwlers = prowlers.length;
            document.getElementById("prowlerBox").innerHTML = numberProwlers;
        }
        else if (enemies[i].type == "Mighty Grunt") {
            grunts.push(enemies[i]);
            var numberGrunts = grunts.length;
            document.getElementById("gruntBox").innerHTML = numberGrunts;
        }
    }
}

//finally a function to show some divs
function show() {
    document.getElementById("monsterProwler").style.display = "block";
    document.getElementById("monsterGrunt").style.display = "block";
    document.getElementById("monsterDragon").style.display = "block";
}

//lets make a function to create a temp variable that can be added to each enemy

function enemyStats(){
    for(var i=0; i<enemies.length; i++){
        var enemyNumber = i+1;
        var enemytype = enemies[i].type;
        var points = Math.floor(enemies[i].hitPoint);
        var defenses = Math.floor(enemies[i].defense);
        console.log(enemyNumber + enemytype + points+ defenses);
    }
}
