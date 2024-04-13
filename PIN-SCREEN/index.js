const CORRECT_PIN = '1234';
let balance = 50;


const enterButton = document.getElementById('enter-button');
console.log('enterButton' , enterButton  );
enterButton?.addEventListener('click' , () => {
    console.log('You clicked the enter button!');


const input = document.getElementById('pin-input');
console.log('input', input);

     if (input instanceof HTMLInputElement) {
        const pin = input?.value;
        console.log('pin:',pin);

             if (pin === CORRECT_PIN) {
            
             const buttonContainer = document.getElementById('button-container');
             console.log('buttonContainer', buttonContainer);
             buttonContainer?.classList.remove('hidden');

             const systemMessage = document.getElementById('system-message');
             console.log('systemMessage', systemMessage);
             systemMessage?.classList.remove('hidden');

             const pinSection = document.getElementById('pin-section');
             console.log('pinSection', pinSection);
             pinSection?.classList.add('hidden');

             const subtitleText2 = document.getElementById('subtitle-text2');
             console.log('subtitleText2', subtitleText2);
             subtitleText2?.classList.remove('hidden');

             const subtitleText = document.getElementById('subtitle-text');
             console.log('subtitleText', subtitleText);
             subtitleText?.classList.add('hidden');
            
            }
            else {
                alert('Incorrect PIN entered!')
            }



    } else {

        console.error('Input is not HTMLInputElement');
    }
})


const cancelButton = document.getElementById('cancel-button');
console.log('cancelButton', cancelButton);
cancelButton?.addEventListener('click', ()=>{
    console.log('You clicked the cancel button!');
    

    const buttonContainer = document.getElementById('button-container');
             console.log('buttonContainer', buttonContainer);
             buttonContainer?.classList.add('hidden');

             const systemMessage = document.getElementById('system-message');
             console.log('systemMessage', systemMessage);
             systemMessage?.classList.add('hidden');

             const pinSection = document.getElementById('pin-section');
             console.log('pinSection', pinSection);
             pinSection?.classList.remove('hidden');

             const subtitleText2 = document.getElementById('subtitle-text2');
             console.log('subtitleText2', subtitleText2);
             subtitleText2?.classList.add('hidden');

             const subtitleText = document.getElementById('subtitle-text');
             console.log('subtitleText', subtitleText);
             subtitleText?.classList.remove('hidden');


})

const balanceButton = document.getElementById('balance-button');
console.log('balanceButton', balanceButton);
balanceButton?.addEventListener('click', ()=>{
    const systemMessage = document.getElementById('system-message');
    console.log('systemMessage', systemMessage);
    if(systemMessage){
    systemMessage.textContent= `AVAILABLE BALANCE: ${balance} EUR`
    }
    systemMessage?.classList.add('success');
    systemMessage?.classList.remove('info');
    systemMessage?.classList.remove('error');

})

const depositButton = document.getElementById('deposit-button');
console.log('depositButton', depositButton);
depositButton?.addEventListener('click', ()=>{

    const amount = prompt('Please enter the amount you want to deposit');
    console.log('amount',amount);

    balance= balance + parseFloat(amount || '0');

    const systemMessage = document.getElementById('system-message');
    console.log('systemMessage', systemMessage);
    if(systemMessage){
    systemMessage.textContent= `${amount} EUR DEPOSITED. AVAILABLE BALANCE: ${balance} EUR`
    }
    systemMessage?.classList.add('success');
    systemMessage?.classList.remove('info');
    systemMessage?.classList.remove('error');



})