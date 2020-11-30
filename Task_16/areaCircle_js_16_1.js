function areaCircle(radius){//Площадь круга
    var pi=Math.PI;// Локальная переменная
    return Math.round(pi*radius*radius);//Математическая функция площади круга
}
var radius=7;// Глобальная переменная
document.getElementById("rez").innerHTML="Площаль круга с радиусом "+radius+" составляет"+areaCircle(radius);
