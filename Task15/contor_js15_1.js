var contor=0, mesaj="";//Подсчет нажатий на картинку
function contorClick(){
contor++
if(contor==1){
    mesaj="Этого не достатосно вы нажали только один раз"
}
else if(contor>=2 && contor<=10){
    mesaj="Вы нажали " + contor + " раз... Можно больше"
}
else{
    mesaj="Вы имели терпение, чтобы нажать "+contor+" раз "
}
document.getElementById("rez").innerHTML=mesaj;
}
    
