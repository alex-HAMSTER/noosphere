/* alert("ok") */
var name_id = document.getElementById('name_id');
setInterval(
    function(){
        if(name_id.value == 0){
            alert('name is clear')
        }else{
            alert('your name ' + name_id.value)
        }
    },4000
);



/* после нажатия на кнопку подтвердить,
происходила проверка на значения внутри нейм_айди
и если там пусто создавался блок красным шрифтом (поле пустое) */

/* setInterval(
    function(){
        alert(name_id.value)
    },4000
) */