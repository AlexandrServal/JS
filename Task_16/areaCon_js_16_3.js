function areaCon(){//Площадь Конуса
    //Материнская функция
var pi=Math.PI, radius=5, LateralLengrh=7;
function areaCicle(pi,radius){// Вложенная функция
    return Math.round(pi*radius*radius);
}
function areaLateral(pi,radius,LateralLengrh){// Вложенная функция
    return Math.round(pi*radius*LateralLengrh);
}
return areaCicle(pi,radius)+areaLateral(pi,radius,LateralLengrh);  
}
document.getElementById("Conus").innerHTML=" Площадь конуса составляет "+areaCon();
