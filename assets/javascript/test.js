var districts = [112, 98, 119, 126, 129, 44, 118, 125, 101, 27]
// function theDistricts(districts){
//     var total = 0
//     for(var x = 0; x <= districts.length - 1; x++){
//         total += districts[x]
//         var bar = "<div id='stretchyBar " + (x + 1) + "' value=" + districts[x] + " style='height: 20px; width: 5px;> another div </div>"
//         document.getElementById('putMeIn').innerHTML = document.getElementById('putMeIn').innerHTML + "<p style='font-size: 12px; font-weight: bold'> District " + (x + 1) + ": " + districts[x] + " Pledges </p>" + bar
//         stretchThatBar(districts[x], "stretchyBar" + (x + 1))
//     };
//     return total;
//     }
function populateDistricts(districts){
    var total = 0;
    for(var x  = 0; x <= districts.length - 1; x++){
        total += districts[x];
    }
    return total
}

function populatePledges(districts){
    var stuff = document.querySelectorAll(".pledgeAmount");
    for(var x = 0; x < districts.length; x++){
        stuff[x].innerHTML = districts[x] + " Pledges"
    }
}

function increment(amount){
    var number = document.getElementById('result').innerHTML
    if(number < amount){
        number++
        document.getElementById('result').innerHTML = number;
    }
}
function stretchyBars(districts){
    window.setTimeout
    var bars = document.querySelectorAll('.barre');
    for(var x = 0; x < districts.length; x++){
        var bar = bars[x];
        bar.style.width = "" + districts[x] + "px"
    }
}

var amount = populateDistricts(districts)
document.onload = setInterval(function(){increment(amount)}, 0.5)
document.onload = populatePledges(districts)

document.onload = window.setTimeout(function (){
    stretchyBars(districts)
}, 100)

// Populate District HTML w/ StretchyBar
// function populateDistricts(districts){
//     var total = 0;
//     for(var x  = 0; x <= districts.length - 1; x++){
//         total += districts[x];
//         var mainParagraph = "<p style='font-size: 12px; font-weight: bold'> District " + (x + 1) + ": "
//         var middleParagraph = "<div id='stretchyBar " + (x + 1) + "' value=" + districts[x] + " style='height: 20px; width: 5px;> another div </div> "
//         var endParagraph = districts[x] + " Pledges </p>"
//         console.log(mainParagraph, middleParagraph, endParagraph)
//         document.getElementById('putMeIn').innerHTML = document.getElementById('putMeIn').innerHTML + mainParagraph, middleParagraph, endParagraph
//     }
//     return total
// }

