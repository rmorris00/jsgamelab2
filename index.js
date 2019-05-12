let user = "";
let grant = "grant";
let userHealth = "";
let grantHealth = "";

function startCombat(user, grant) {

    function getDamage() {

        userHealth -= Math.floor(Math.random() * 5) + 1;
        grantHealth -= Math.floor(Math.random() * 5) + 1;

    }



    let userHealth = 40;
    let grantHealth = 10;
    let grantRespawn = 2;

    while (userHealth >= 1 && grantHealth >= 1 && grantRespawn > 0) {

        if (userHealth >= 1 && grantHealth >= 1 && grantRespawn > 0) {
            let attackOrQuit = prompt("attack or quit");
            if (attackOrQuit === "attack") {
                getDamage();

                console.log(`${user} has ${userHealth} health left`);
                console.log(`${grant} has ${grantHealth} health left`);

            } else if (attackOrQuit === "quit") { break; }

            if (grantHealth <= 0 && grantRespawn > 0 && userHealth >= 1) {
                let attackOrQuit = prompt("attack or quit");
                if (attackOrQuit === "attack") {



                    console.log("you have won this battle, but Grant respawned");
                    grantHealth += 10;
                    grantRespawn--;
                } else if (attackOrQuit === "quit") { break; }

            } else if (grantHealth <= 0 && grantRespawn <= 0 && userHealth >= 1) {
                console.log("congrats, you won");
                break;
            }
            if (userHealth <= 0 && grantHealth >= 1 && grantRespawn > 0) {
                console.log("sorry, you lost");
                break;

            }

        }

        while (userHealth >= 1 && grantHealth >= 1 && grantRespawn === 0) {


            if (userHealth >= 1 && grantHealth >= 1 && grantRespawn === 0) {
                let attackOrQuit = prompt("attack or quit")
                if (attackOrQuit === "attack") {

                    getDamage();

                    console.log(`${user} has ${userHealth} health left`);
                    console.log(`${grant} has ${grantHealth} health left`);
                }
                if (attackOrQuit === "quit") { return; }
            }



            if (grantHealth <= 0 && grantRespawn <= 0 && userHealth >= 1) {
                console.log("congrats, you won");

            } else if (userHealth <= 0 && grantHealth >= 1 && grantRespawn > 0) {
                console.log("sorry, you lost");


            }
        }

    }

}

function startGame() {
    let game = prompt("do you want to play a game")
    if (game === "yes" || "Yes") {
        let user = prompt("what is your name")
        startCombat(user, grant);

    }

}





startGame();