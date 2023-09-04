const calc = document.querySelectorAll('.button'); 
const disp = document.querySelector('.display');

const calculate = (btnval) => {
    console.log(btnval); 
    if(btnval === '=' && disp.value === ''){
        return;
    }
    if (btnval === '='){
        try{
            disp.value = eval(disp.value);
        }
        catch(err){
            disp.value = 'Could not calculate';
        };
    };
    if(btnval !== '='){
    disp.value += btnval;
    };
     if(btnval === 'C'){
        disp.value = '';
     }; 
}

calc.forEach(box => {
    box.addEventListener('click', (e) =>{
        calculate(e.target.value);
    });  
});
