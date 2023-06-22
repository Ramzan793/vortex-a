// FORM js
const scriptURL = 'https://script.google.com/macros/s/AKfycbwrDMpS9zTPUctNUcIPwNLFJPJBvZcv8F-KC9NdEw_jVtpOAZ3trvrzG95HBBH5VT2N5w/exec'
        const form = document.forms['google-sheet']
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
            .catch(error => console.error('Error!', error.message))
        })