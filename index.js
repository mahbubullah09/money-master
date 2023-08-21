function getValue(id) {
    fieldId = document.getElementById(id);
    fieldValue = fieldId.value;
    fieldId.value = '';
    valueNumber = parseFloat(fieldValue);

    return valueNumber;

}

function setText(id, value) {

    const textID = document.getElementById(id);
    const valueFormatted = value.toFixed(2);
    textID.innerText = valueFormatted;

}

function setTextWthString(text, id, value) {

    const textID = document.getElementById(id);
    const valueFormatted = value.toFixed(2);
    textID.innerText = text + valueFormatted;

}




function calculation() {

    const income = getValue('incomeField');
    const food = getValue('foodField');
    const rent = getValue('rentField');
    const cloth = getValue('clothField');

    if(isNaN(income) == true ||  isNaN(food) == true || isNaN(rent) == true || isNaN(cloth) == true ){
        alert('Provide a number');
        return;
    }


    const totalExpenses = food + rent + cloth;

    const balance = income - totalExpenses;

    setText('balance', balance);
    setText('expenses', totalExpenses);





}


const saveButtonId = document.getElementById('save-btn');
    saveButtonId.addEventListener('click', function () {

        const balanceString=document.getElementById('balance').innerText;
        const balance= parseFloat(balanceString);

        const save = getValue('saveField');
        if(isNaN(save) == true  ){
            alert('Provide a number');
            return;
        }

        const savingAmount = ((balance * save) / 100);

        const remainingBalance = balance - savingAmount;


        setTextWthString('Saving Amount: ', 'savings', savingAmount);
        setTextWthString('Remaining Balance: ', 'remainingBalance', remainingBalance);




})
