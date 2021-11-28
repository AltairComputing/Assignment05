/* 
    Felix Zhang Rosado
    27 November 2021

    Notes:  Assignment 05
    JavaScript programming on the console

*/





// Temperature converter 
console.log("*****Temperature Converter*****");

let farenheit = 0;
let celsius = prompt ("What is the celsius temperature?");

function Celsius2Farenheit(celsius){

    farenheit = ( celsius * 9) / 5 + 32;
    // c = f-32 * 5/9;
    return farenheit.toFixed(2);
    
}

farenheit=Celsius2Farenheit(celsius)

console.log(`${celsius} degrees Celsius = ${farenheit} degrees Farenheit`);

celsius = 0;

farenheit = prompt ("What is the farenheit temperature?")
function Farenheit2Celsius(Celsius2Farenheit){

    //farenheit = ( celsius * 9) / 5 + 32;
    celsius = (farenheit-32) * 5/9;
    return celsius.toFixed(2);
}

celsius=Farenheit2Celsius(farenheit);
console.log(`${farenheit} degrees Farenheit = ${celsius} degrees Celsius`);


//B-------------------------BMI---------------------------------------------
console.log("*****BMI Calculator*****");

let bmi = 0;
let mass = 0;
let height =0;
bmi = mass / (height * height);

let lucasMassKg = 72;
let lucasHeightCm = 172;

let johnMassKg = 90;
let johnHeightCm = 190;

// calculation of the BMI using the metric system and converting centimeters to meters for the height
let lucasBMI = (lucasMassKg /lucasHeightCm ** 2) * 1E4;
let johnBMI  = (johnMassKg /johnHeightCm ** 2) * 1E4;
let lucasDisplay = lucasBMI.toFixed(2);
let johnDisplay = johnBMI.toFixed(2);


if (lucasBMI > johnBMI){
    // console.log(`Lucas' BMI ${lucasBMI} is higher than John's BMI ${johnBMI}`);
    console.log(`Lucas' BMI ${lucasDisplay} is higher than John's BMI ${johnDisplay}`);
}    
else if (johnBMI > lucasBMI){
    // console.log(`John's' BMI ${johnBMI} is higher than Lucas' BMI ${lucasBMI}`);
    console.log(`John's' BMI ${johnDisplay} is higher than Lucas' BMI ${lucasDisplay}`);

}
else if (johnBMI === lucasBMI){
    //console.log(`John's' BMI ${johnBMI} is the same as Lucas' BMI ${lucasBMI}`);
    console.log(`John's' BMI ${johnDisplay} is the same as Lucas' BMI ${lucasDisplay}`);
}

// Display their BMI classification
/*
Underweight = <18.5
Normal weight = 18.5–24.9
Overweight = 25–29.9
Obesity = BMI of 30 or greater
*/


function bmiClassification(BMI)
{
    if(BMI >= 30.00){return "Obese";}
            
    else if(BMI >= 25.00 && BMI <=29.99) {return "Overweight";}
    
    else if(BMI >= 18.50 && BMI <= 24.99) {return "Normal";}
    
    else if(BMI < 18.50){return "Underweight";}
  
}

let lucasClassification = bmiClassification(lucasDisplay);
let johnClassification =  bmiClassification(johnDisplay);

console.log(`Lucas' BMI classification is: ${lucasClassification}. John's BMI classification is ${johnClassification}.`);
// console.log("Lucas is " + lucasClassification);
// console.log("John is "  + johnClassification);

console.log("*****Calculating Sports Scores*****");

// Sports teams
// Trial 01
// Nets:    96, 108, 89
// Knicks:  88, 91, 110

const Nets01 = [96, 108, 89];
const Knicks01 = [88, 91, 110];

// console.log(`The first series of Nets versus Knicks: ${Nets01}, \n, ${Knicks01}` );

function arrayAverage( array )
{
    let sum = 0;
    let average = 0;

for(i = 0; i <array.length; i++)
    {
        sum += array[i];

    }

    return (sum / array.length).toFixed(2);
}

console.log(`The average score for the Nets is the average of ${Nets01} = ${arrayAverage(Nets01)}`);
console.log(`The average score for the Knicks is the average of ${Knicks01} = ${arrayAverage(Knicks01)}`);

// Question 02: compare the scores:

avgScoreNets = arrayAverage(Nets01);
avgScoreKnicks = arrayAverage(Knicks01);

if(avgScoreNets > avgScoreKnicks){

        console.log(`The Nets have the higher average score.`);

}else if(avgScoreNets< avgScoreKnicks){

        console.loge(`The Knicks have the higher average score.`);
} else if ( avgScoreNets === avgScoreKnicks){

        console.log(`The Nets and Knicks have the same average score.`);
}

// Question 03:  A minimum score of 100 is required to be included.
const Nets03    =   [ 97, 112, 101];  // 106.5 average
const Knicks03  =   [ 109, 95, 123];  // 116 average

function minimumScore(array)
{
    let sum = 0;  
    let count = 0;
    
    for(i = 0; i < array.length; i++)
    {
     
    
        // console.log(`===>The value at index ${i} is value: ${array[i]}`);
        if (array[i]<100){
            // console.log(`We are skipping this value: ${array[i]}`);
        } else
        {
            // console.log(`=====>OVER 99: The value at index ${i} is value: ${array[i]}`);
            sum = sum + array[i];
            count = count + 1;
            // console.log(`===========>OVER 99: The value of the sum = ${sum} The count is =${count} `);
        }
        
    }
        minimumAverage = (sum / count).toFixed(2) ;

        // console.log(`**********The minimum average********** = ${minimumAverage}`);  
        
        return minimumAverage;
}


avgScoreNets = minimumScore(Nets03);
avgScoreKnicks = minimumScore(Knicks03);

console.log(`The average score for the Nets is the average of ${Nets03} = ${avgScoreNets}`);
console.log(`The average score for the Knicks is the average of ${Knicks03} = ${avgScoreKnicks}`);

// Question 04: Test for Draw and mimimum score over 100

function compareArrays(team01, array01, team02, array02)
{
    if (array01.length != array02.length){

        console.log("ERROR 01: The scores cannot be compared because the arrays are not the same size.");
    }else{
        for(i = 0; i < array01.length; i++)
        {
            if(array01[i]>array02[i] && array01[i] >99){
                console.log(`The ${team01} win game ${i + 1} over the ${team02}`);
            }else if(array01[i]<array02[i] && array02[i] >99){
                console.log(`The ${team02} win game ${i + 1 } over the ${team01}`);
            } else if(array01[i] == array02[i]){
                console.log(`Match Game: No one wins the trophy!`);
            }
                
        }
   
    }
}



compareArrays(`Nets`, Nets03, `Knicks`, Knicks03);



// User prompt
console.log("*****User Entry-Handling*****"); 

let userEntry = prompt("Enter a number:");

console.log(`You entered ${userEntry}`);

if(!Number(userEntry)){
    console.log(`Please enter a NUMBER`);
} else if (Number(userEntry) === 10){
    console.log(`The number 10 is matched!`);
} else if (Number(userEntry) ===8){
    console.log(`The number 8 is also matched!`);
}else{
    console.log(`The number ${userEntry} was not matched.`);
}
