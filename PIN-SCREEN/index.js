const CORRECT_PIN = '1234';


const enterButton = document.getElementById('enter-button');
console.log('enterButton' , enterButton  );
enterButton?.addEventListener('click' , () => {
    console.log('You clicked the button!');


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

             const pinSection = document.getElementById('pin-section')
             console.log('pinSection', pinSection)
             pinSection?.classList.add('hidden')
            
            }
            else {
                alert('Incorrect PIN entered!')
            }



    } else {

        console.error('Input is not HTMLInputElement');
    }
})