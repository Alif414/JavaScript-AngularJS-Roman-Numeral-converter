var app = angular.module('myApp', []);

//Custom Filter Implementation
app.filter("arab2rom", function() {
    return function (num) {
        var arabNum = String(+num).split(""), //Takes the numbers and splits them into an array
            romDigits = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
                   "","I","II","III","IV","V","VI","VII","VIII","IX"], //Array of roman numerals
            romanNum = "", //Initialises the roman digits
            i = 2; //2 as at max 2 digits are taken in
        while (i--)
            romanNum = (romDigits[+arabNum.pop() + (i * 10)] || "") + romanNum;
        //Takes the last digit and removes it using pop then compares it to the roman numerals, then does it again if there are two digits

        return Array(+arabNum.join("") + 1).join("") + romanNum; //returns the numbers in a string of the roman numerals
    };
});

