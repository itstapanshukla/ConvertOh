var sqmeter = 1000000;
var sqkilometer = 1;
var sqmile = 0.386102;
var hect = 100;
var acre = 247.105381;
// Currency Variables //
var INR = 1;
var USD = 68.65;
var YEN = 0.62;
var AUD = 50.94;
var EUR = 79.85;
var GBP = 88.39;
var CHF = 69.03;
// Volume Variables //
var litre = 3.7854;
var pint = 8;
var quart = 2;
var gallon = 1;
var barrel = 0.03174;
// Length Variables //

// Global variables //
var a,b,inp;
// ---------------------------AREA----------------------------------- //
//////// Input ////////
function clickingSqMeter() {
    document.getElementById('IPbtnArea').innerHTML="Sq. Meter";
    a = sqmeter;
}

function clickingSqKilometer() {
    document.getElementById('IPbtnArea').innerHTML="Sq. Kilometer";
    a = sqkilometer;
}
function clickingSqMile() {
    document.getElementById('IPbtnArea').innerHTML="Sq. Mile";
    a = sqmile;
}
function clickingHect() {
    document.getElementById('IPbtnArea').innerHTML="Hectare";
    a = hect;
}
function clickingAcre(){
    document.getElementById('IPbtnArea').innerHTML="Acre";
    a = acre;
}

///////// Output ///////
function clickingSqMeter2() {
    
    document.getElementById('OPbtnArea').innerHTML="Sq. Meter";  
    b = sqmeter;
}

function clickingSqKilometer2() {
    
    document.getElementById('OPbtnArea').innerHTML="Sq. Kilometer";
    b = sqkilometer;
}

function clickingSqMile2() {
    document.getElementById('OPbtnArea').innerHTML="Sq. Mile";
    b = sqmile;
}

function clickingHect2(){
    document.getElementById('OPbtnArea').innerHTML="Hectare";
    b = hect;
}

function clickingAcre2(){
    document.getElementById('OPbtnArea').innerHTML="Acre";
    b = acre;
}

function convertArea() {
    inp = document.getElementById('IPBarArea').value;
    var result = (inp*b)/a;
    document.getElementById('OPBarArea').value = result;
}

// ----------------------------------------CURRENCY---------------------------------------- // 
// INPUT //

function clickingINR() {
    document.getElementById('IPbtnCurrency').innerHTML="INR";
    a = INR;
}

function clickingUSD() {
    document.getElementById('IPbtnCurrency').innerHTML="USD";
    a = USD;
}

function clickingGBP() {
    
    document.getElementById('IPbtnCurrency').innerHTML="GBP";
    a = GBP;
}

function clickingYEN() {
    document.getElementById('IPbtnCurrency').innerHTML="Yen";
    a = YEN;
}

function clickingEUR() {
    a = EUR;
    document.getElementById('IPbtnCurrency').innerHTML="EUR";
}

function clickingAUD() {
    document.getElementById('IPbtnCurrency').innerHTML="AUD";
    a = AUD;
}
function clickingCHF(){
    document.getElementById('IPbtnCurrency').innerHTML="CHF";
    a = CHF;
}

///////// Output ///////
function clickingINR2() {
    
    document.getElementById('OPbtnCurrency').innerHTML="INR";
    b = INR;
}

function clickingUSD2() {
    
    document.getElementById('OPbtnCurrency').innerHTML="USD";
    b = USD;
}

function clickingGBP2() {
    
    document.getElementById('OPbtnCurrency').innerHTML="GBP";
    b = GBP;
}

function clickingYEN2() {
    document.getElementById('OPbtnCurrency').innerHTML="YEN";
    b = YEN;
}

function clickingEUR2() {
    b = EUR;
    document.getElementById('OPbtnCurrency').innerHTML="EUR";
}

function clickingAUD2(){
    document.getElementById('OPbtnCurrency').innerHTML="AUD";
    b = AUD;
}
function clickingCHF2(){
    document.getElementById('OPbtnCurrency').innerHTML="CHF";
    b = AUD;
}

function convertCurrency() {
    inp = document.getElementById('IPBarCurrency').value;
    var result = (inp * a)/b;
    document.getElementById('OPBarCurrency').value = result;
}

//---------------------Volume------------------------//

//////// Input ////////
function clickingLitre() {
    document.getElementById('IPbtnVolume').innerHTML="Litre";
    a = litre;
}

function clickingPint() {
    document.getElementById('IPbtnVolume').innerHTML="Pint";
    a = pint;
}
function clickingQuart() {
    document.getElementById('IPbtnVolume').innerHTML="Quart";
    a = quart;
}
function clickingGallon() {
    document.getElementById('IPbtnVolume').innerHTML="Gallon";
    a = gallon;
}
function clickingBarrel(){
    document.getElementById('IPbtnVolume').innerHTML="Barrel";
    a = barrel;
}

///////// Output ///////
function clickingLitre2() {   
    document.getElementById('OPbtnVolume').innerHTML="Litre";  
     b = litre;
}

function clickingPint2() {
    
    document.getElementById('OPbtnVolume').innerHTML="Pint";
    b = pint;
}

function clickingQuart2() {
    document.getElementById('OPbtnVolume').innerHTML="Quart";
    b = quart;
}

function clickingGallon2() {
    document.getElementById('OPbtnVolume').innerHTML="Gallon";
    b = galllon;
}

function clickingBarrel2() {
    document.getElementById('OPbtnVolume').innerHTML="Barrel";
    b = barrel;
}



///// Conversion /////

function convertVolume() {
    inp = document.getElementById('IPBarVolume').value;
    var result = (inp*b)/a;
    document.getElementById('OPBarVolume').value = result;
}


//--------------------------Length--------------------------------//

function clickingMeter() {
    document.getElementById('IPbtnLength').innerHTML="Meter";
    a = meter;
}

function clickingKilometer() {
    document.getElementById('IPbtnLength').innerHTML="Kilometer";
    a = kilometer;
}
function clickingYard() {
    document.getElementById('IPbtnLength').innerHTML="Yard";
    a = yard;
}
function clickingMile() {
    document.getElementById('IPbtnLength').innerHTML="Mile";
    a = mile;
}
function clickingFoot(){
    document.getElementById('IPbtnLength').innerHTML="Foot";
    a = foot;
}

///////// Output ///////
function clickingMeter2() {
    
    document.getElementById('OPbtnLength').innerHTML="Meter";   
    b = meter;
}
function clickingKilometer2() {
    
    document.getElementById('OPbtnLength').innerHTML="Kilometer";
    b = kilometer;
}
function clickingYard2() {
    document.getElementById('OPbtnLength').innerHTML="Yard";
    b = yard;
}
function clickingMile2(){
    document.getElementById('OPbtnLength').innerHTML="Mile";
    b = mile;
}
function clickingFoot2(){
    document.getElementById('OPbtnLength').innerHTML="Foot";
    b = foot;
}

///// Conversion /////

function convertLength() {
    inp = document.getElementById('IPBarLength').value;
    var result = (inp*b)/a;
    document.getElementById('OPBarLength').value = result;
}

$('[data-toggle="tooltip"]').tooltip();
