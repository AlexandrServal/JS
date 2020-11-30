function длинна_Строки(srt){//Создание функции длинна строки
    var result=0;
    result=srt.length;
    return result
}
var sourse=document.getElementById("sourse").innerHTML;
document.getElementById("rez").innerHTML="Расчетная длинна строки" +длинна_Строки(sourse);
