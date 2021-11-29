let listOfBoxes = ["greenBox", "redBox", "yellowBox", "blueBox"]

document.getElementById("playButton").addEventListener("click", function () {

    let chosenList = []
    let scoreList = []
    let score = 0
    let count = 1
    let time = 1800

    document.getElementById("playButton").setAttribute("disabled", "true")
    document.getElementById("playButton").style.display = "none"
    document.getElementById("score").innerHTML = "Score: -"

    setTimeout(function mainFunction() {

        if (chosenList.length > 0) {
            if (chosenList.length == count) {
                let randomNumber = Math.floor(Math.random() * 4)
                let box = listOfBoxes[randomNumber]
                samePart(box)

                count = 0

                setTimeout(function () {
                    for (let i = 0; i < chosenList.length; i++) {
                        if (chosenList[i] == scoreList[i]) {
                            document.getElementById("score").innerHTML = "Score: " + scoreList.length + " points."
                        } else {
                            document.getElementById("score").innerHTML = "Game over! Score: " + score + " points."
                            document.getElementById("playButton").style.display = "block"
                            document.getElementById("playButton").innerHTML = "Play again!"
                            document.getElementById("playButton").removeAttribute("disabled")
                            return;
                        }
                    }

                    score = scoreList.length
                    scoreList = [];
                    setTimeout(mainFunction, time)

                }, time * chosenList.length)


            } else {

                switch (chosenList[count]) {
                    case "greenBox":
                        document.getElementById(chosenList[count]).style.backgroundColor = "#43f275"
                        break
                    case "redBox":
                        document.getElementById(chosenList[count]).style.backgroundColor = "#ff6868"
                        break
                    case "yellowBox":
                        document.getElementById(chosenList[count]).style.backgroundColor = "#a9b22a"
                        break
                    case "blueBox":
                        document.getElementById(chosenList[count]).style.backgroundColor = "#7077ff"
                        break
                }

                setTimeout(function () {
                    document.getElementById("greenBox").style.backgroundColor = "green"
                    document.getElementById("redBox").style.backgroundColor = "red"
                    document.getElementById("yellowBox").style.backgroundColor = "yellow"
                    document.getElementById("blueBox").style.backgroundColor = "blue"
                }, 1000)

                count++;
                setTimeout(mainFunction, time)

            }

        } else {
            let randomNumber = Math.floor(Math.random() * 4)
            let box = listOfBoxes[randomNumber]
            samePart(box)

            setTimeout(mainFunction, time)
            
        }

    }, time)

    checked = (ev) => {
        let currentBox = ev.target.id
        scoreList.push(currentBox)
    }
    
    samePart = (box) => {
        
        switch (box) {
            case "greenBox":
                document.getElementById(box).style.backgroundColor = "#43f275"
                chosenList.push("greenBox")
                break
            case "redBox":
                document.getElementById(box).style.backgroundColor = "#ff6868"
                chosenList.push("redBox")
                break
            case "yellowBox":
                document.getElementById(box).style.backgroundColor = "#a9b22a"
                chosenList.push("yellowBox")
                break
            case "blueBox":
                document.getElementById(box).style.backgroundColor = "#7077ff"
                chosenList.push("blueBox")
                break
        }
    
        setTimeout(function () {
            document.getElementById("greenBox").style.backgroundColor = "green"
            document.getElementById("redBox").style.backgroundColor = "red"
            document.getElementById("yellowBox").style.backgroundColor = "yellow"
            document.getElementById("blueBox").style.backgroundColor = "blue"
        }, 1000)
    }
});

let pulse = () => {
    e = document.createElement('div')
    e.setAttribute('class', 'circle')
    document.body.appendChild(e),
    e.style.top = event.pageY + 'px',
    e.style.left = event.pageX + 'px'
    ,
    setTimeout(() => {
        document.body.removeChild(e)
    }, 600)
}
document.addEventListener('click', pulse)