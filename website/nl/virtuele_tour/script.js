const myTitle = document.getElementById("myTitle")
const myImage = document.getElementById("myImage")
const myInput = document.getElementById("myInput")


const directionButtons = {
    "noordVleugel": document.getElementById("knopNoordVleugel"),
    "oostVleugel": document.getElementById("knopOostVleugel"),
    "terug": document.getElementById("knopTerug"),
    "westVleugel": document.getElementById("knopWestVleugel"),
    "vooruit": document.getElementById("knopVooruit"),
    "links": document.getElementById("knopLinks"),
    "rechts": document.getElementById("knopRechts")
}

let current_index = 0;

let lokaties = [

    {
        "title": "binnenplaats",
        "image": "tourImg/binnenplaats.jpg",
        "directions": {
            "noordVleugel": 1,
            "oostVleugel": 7,
            "westVleugel": 4
        }
    },
    {
        "title": "noord, republiek aan zee",
        "image": "tourImg/hoofdgalerij.jpg",
        "directions": {
            "rechts": 3,
            "links": 2,
            "terug": 0
            
        }
    },
    {
        "title": "noord, republiek aan zee",
        "image": "tourImg/koningsSloep.jpg",
        "directions": {
            "rechts": 1
        }
    },
    {
        "title": "noord, VOC schip",
        "image": "tourImg/grootSchip.jpg",
        "directions": {
            "links": 1
        }
    },
    {
        "title": "west, verhaal van de walvis",
        "image": "tourImg/verhaalVanDeWalvis.jpg",
        "directions": {
            "vooruit": 5,
            "terug": 0
        }
    },
    {
        "title": "west, verhaal van de walvis",
        "image": "tourImg/walvis.jfif",
        "directions": {
            "vooruit": 6,
            "terug": 4
        }
    },
    {
        "title": "west, verhaal van de walvis",
        "image": "tourImg/walvis2.jpg",
        "directions": {
            "terug": 5
        }
    },
    {
        "title": "oost, kartografie",
        "image": "tourImg/kartografie.jpg",
        "directions": {
            "vooruit": 8,
            "terug": 0
        }
    },
    {
        "title": "oost, kartografie",
        "image": "tourImg/kartografie2.jpg",
        "directions": {
            "vooruit": 9,
            "terug": 7
        }
    },
    {
        "title": "oost, kartografie",
        "image": "tourImg/kartografie3.jfif",
        "directions": {
            "terug": 8
        }
    },
];


function show(index) {
    myTitle.innerHTML = lokaties[index].title;
    myImage.src = lokaties[index].image;
    current_index = index;
    updateDirections();
}

function updateDirections() {
    let possible = lokaties[current_index].directions;
    let possible_keys = Object.keys(possible);
    let button_keys = Object.keys(directionButtons);
    for (const key of button_keys) {
        directionButtons[key].style.visibility = "hidden";
    }
    for (const key of possible_keys) {
        directionButtons[key].style.visibility = "visible";
    }
}

function goDirection(richting) {
    console.log(lokaties[current_index].directions)
    let punt_index = lokaties[current_index].directions[richting];
    show(punt_index)

}
show(0);