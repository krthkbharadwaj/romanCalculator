/**
 * Module which takes three positive roman numerals as input and creates the equation
 */
exports.equation = function (first, second, third) {

    var arr = [];
    if (first == "" || second == "" || third == "") {
        return "Please enter all the fields";
    }

   if(third != "+" && third != "-" && third != "/" && third != "*"){       
        return "Please enter valid operator";
   }
    /**
     * convert_numeric is function to convert the input roman numerals to numerics
     */
    var f = convert_numeric(first);
    var s = convert_numeric(second);

    if(isNaN(f) || isNaN(s) || first.includes('-') || second.includes('-')){
        return "Please enter valid operands";
    }

    arr.push(f); arr.push(s); 
    
    /**
     * parArr is the parent array which contains the key values pairs 
     * Keys are the numerics and values are Roman numerals - Used at the end to convert back to roman numerals 
     */
    var parArr = [];
    parArr[f] = first;
    parArr[s] = second;
    //parArr[t] = third;

    var n = arr.length;
    var result = eval(parseInt(f)+third+parseInt(s));
    console.log(result);
    //return result;
    if(result !=0){
        var res = romanize(result);
        if(res=='error'){
            return "Roman conversion error";
        }else{
            return res;
        }
    }else{
        var res = 0;
    }
    return res;  
};

/**
 * Below variables and functions are used for conversion of roman numerals to numerics and vice versa
 */
var rarr = new Array("M",
    "CM", "D", "CD", "CCC", "CC", "C", "XC", "L", "XL", "XXX", "XX", "X", "IX", "V", "IV", "III", "II", "I");

var narr = new Array(1000, 900, 500, 400, 300, 200, 100, 90, 50, 40, 30, 20, 10, 9, 5, 4, 3, 2, 1);

var warr = new Array("CMCM",
    "CMD",
    "CMCD", "CMC", "DD", "DCD", "CDCD", "CDC", "CCCC", "XCXC",
    "XCL", "XCXL", "XCX", "LL", "LXL", "XLXL", "XLX", "XXXX", "IXIX",
    "IXV", "IXIV", "IXI", "IVIV", "IVI", "IIII");

/**
 * Roman numerals to numerics conversion
 */
function convert_numeric(rom) {
    var roman = rom.replace(/ /g, "");
    roman = roman.toUpperCase();
    roman = roman.replace(/[^IVXLCDM]/g, "");

    if (roman.length == 0) { return; }
    var position = 0; var result = 0; var pp = -1;
    while (position < roman.length) {
        var p = getnextletter(roman, position);
        if (pp != 0) {
            if (narr[pp] < narr[p]) {
                return;
            }
        }
        if (p < 0)
            return "";
        position += rarr[p].length; result += narr[p]; pp = p;
    }
    return result;
}

function getnextletter(roman, position) {
    for (i = 0; i < warr.length; i++) {
        if (roman.indexOf(warr[i], position) == position) {
            return;
        }
    }
    for (i = 0; i < rarr.length; i++) {
        if (roman.indexOf(rarr[i], position) == position)
            return i;
    }
    return;
}

function romanize (num) {
    if (!+num)
        return "error";
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}