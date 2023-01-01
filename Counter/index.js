// Set Initial Count
let count=0;

// Select Values and Button
const val = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function(btn){
    btn.addEventListener('click',function(e){
    const styles = e.currentTarget.classList;
    if(styles.contains("decrease")){
        count--;
    }
     if(styles.contains("increase")){
        count++;
    }
    if(styles.contains("reset")){
        count=0;
    }
    if(count>0){
        value.style.color = 'green';
    }
    if(count==0){
        value.style.color = 'black';
    }
    if(count<0){
        value.style.color= 'red';
    }
    val.textContent = count;
    });
});