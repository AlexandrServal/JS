function areaCircle(radius){//Площадь круга
    return Math.round(pi*radius*radius);//Математическая функция площади круга
}
var radius=7;var pi=Math.PI;// Глобальная переменная
document.getElementById("radiuse1").innerHTML="Площаль круга с радиусом "+radius+" составляет"+areaCircle(radius);
document.getElementById("local1").innerHTML="Давайте посмотрим на переменную "+pi;