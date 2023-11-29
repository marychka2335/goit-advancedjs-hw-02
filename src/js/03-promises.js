import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
resolve({ position, delay});
      } else {
reject({ position, delay })        
  }
}, delay )
  });
  return promise
}
const refs = {
  form: document.querySelector('.form'),
  inputDelay: document.querySelector('input[name="delay"]'),
  inputStep: document.querySelector('input[name="step"]'),
  inputAmount: document.querySelector('input[name="amount"]'),
  button: document.querySelector('button[type="submit"]')
}

  refs.form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    let delay = Number(refs.inputDelay.value);
    const step = Number(refs.inputStep.value);
    const amount = Number(refs.inputAmount.value);
    for (let i = 1; i <= amount; i += 1) {
      createPromise(i, delay).then(({position, delay}) => {
        iziToast.show({
          message: `✅ Fulfilled promise ${position} in ${delay}ms`,
          color: "green",
          position: "center"
        });
      }).catch(({position, delay})=> {
        iziToast.show({
          message: `❌ Rejected promise ${position} in ${delay}ms`,
          color: 'pink',
          position: 'center'

        });
      })
      delay += step;
    };
  }
  )
