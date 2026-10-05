
///////////////// 1 //////////////// 




function checkAge(age) {
  if (age < 0 || age > 120) {
    throw new Error(`Некорректный возраст: ${age}. Возраст должен быть от 0 до 120.`);
  }
  return age;
}

try {
  checkAge(150);
  console.log("Возраст корректный");
} catch (error) {
  console.log("Ошибка:", error.message);
}


///////////////// 2 //////////////////// 


function loadData(){
    const rand = Math.random() 

    if (rand < 0.4){
        throw new Error('ошибка');
    }

}

let seccessCount = 0;
let errorCount = 0;

for (let i = 0; i<10 ; i+=1){
    try {
        loadData()
        seccessCount+=1;

    } catch(error){
        console.log(error.message)
        errorCount+=1;
    }

}

console.log(seccessCount)
console.log(errorCount)

/////////////////// 3 ///////////////////

function withdraw(balanse, amount) {
    if (amount < 0){
        const err = new Error("Сумма не может быть отрецательной")
    
        err.code = "NEGATIVE_AMOUNT";
        throw err;
    }
}