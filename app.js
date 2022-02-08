/**Selecting items */
const form = document.getElementById('form');
const text = document.getElementById('vowels');
const present = document.getElementById('present');
const num = document.getElementById('number');

/**Event Listener */
form.addEventListener('submit', vowelCounter);

/**Functions */
function vowelCounter(e) {
    e.preventDefault()

    let vowels = ["a", "e", "i", "o", "u"];
    let counter = 0;
    let arr = [];

    (function() {
        for(i = 0; i < text.value.length; i++){
            if(text.value.toLowerCase().search(`${vowels[i]}`, "ig") > -1){
                arr.push(vowels[i])
                counter++;
            }
        }
    })()

    getNumbers(vowels)
    present.innerHTML = counter + ` [${arr}]`;
    
    document.querySelectorAll('h3').forEach(function(items){
        items.style.display = "block";
    })
}

function getNumbers(vowels){
    let numValue = 0;
    let sentence = text.value.split(' ');
    
    let refined = sentence.join("").split('');
    for(i = 0; i < refined.length; i++){
        if(
            refined[i].toLowerCase() == "a" || refined[i].toLowerCase() == "e" ||
            refined[i].toLowerCase() == "i" || refined[i].toLowerCase() == "o" || refined[i].toLowerCase() == "u"){
                numValue++
            }
    }

    num.innerHTML = numValue;
}
