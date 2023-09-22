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

const form_login = document.getElementById('form_login')
const form_reg = document.getElementById('form_reg')
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

const password_repeat = document.getElementById('password_repeat');
const only_reg = document.querySelectorAll('.only_reg');
const check_box = document.getElementById('check_box_login');
const forgot_password = document.getElementById('forgot_password');
const continue_google = document.getElementById('continue_google');

form_login.addEventListener('click', function() {
    only_reg.forEach(function(i){
        i.style.cssText = 'display:none;'
    })
    check_box.style.cssText = 'display: block;'
    btn_reg.style.cssText = 'margin-top: 27px;'
    forgot_password.style.cssText = 'display: flex;'
    continue_google.style.cssText = 'margin-top: 20px'
})

form_reg.addEventListener('click', function(){
    only_reg.forEach(function(i){
        i.style.cssText = 'display:block;'
    })
    check_box.style.cssText = 'display: none;'
    btn_reg.style.cssText = 'margin-top: 37px;'
    forgot_password.style.cssText = 'display: none;'
})