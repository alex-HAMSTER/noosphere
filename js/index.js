/* alert("ok") */
/* var name_id = document.getElementById('name_id');
setInterval(
    function(){
        if(name_id.value == 0){
            alert('name is clear')
        }else{
            alert('your name ' + name_id.value)
        }
    },4000
);
 */
/* const name_id = document.getElementById('name_id');
const btn_reg = document.getElementById('btn_reg');
const errorMessage = document.getElementById('errorMessage')
const input_class = document.querySelectorAll('input_class')

btn_reg.addEventListener('click', function(){
    const nameValue = input_class.value;
    if(nameValue == ''){
        errorMessage.textContent = 'Заповніть це поле';
    }else{
        errorMessage.textContent = '';
    }
}) */
const inputElements = document.querySelectorAll('.input_class');
const errorMessages = document.querySelectorAll('.errorMessage');
const btnReg = document.getElementById('btn_reg');

btnReg.addEventListener('click', function () {
    
    errorMessages.forEach(function (errorMessage) {
        errorMessage.textContent = '';
    });// Сброс ошибок перед проверкой

    // Проверка каждого поля
    inputElements.forEach(function (inputElement, index) {
        const inputValue = inputElement.value.trim();
        if (inputValue === '') {
            errorMessages[index].textContent = 'Заповніть це поле';
        }
    });
});
