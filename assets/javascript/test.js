var districts = [112, 98, 119, 126, 129, 44, 118, 125, 101, 27]
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

