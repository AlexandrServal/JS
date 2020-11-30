function длина_Круга(радиус){
    var pi=Math.PI
    return 2*pi*радиус;
}
var радиус=20;
document.getElementById("rez").innerHTML=`Расчетная длина окружности срадиусом 
${радиус} соотвецтвует `+Math.round(длина_Круга(радиус));
