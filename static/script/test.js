
let btn = document.querySelector('.mouse-cursor-gradient-tracking');
btn.addEventListener('mousemove', e => {
  let rect = e.target.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  btn.style.setProperty('--x', x + 'px');
  btn.style.setProperty('--y', y + 'px');
});


$('body').toggleClass('day-background');

$('#cb1').on('click', function () { $('body').toggleClass('day-background'); });



document.querySelector(".day-night input").addEventListener("change", () => {
    document.querySelector("body").classList.add("toggle");
    setTimeout(() => {
      document.querySelector("body").classList.toggle("light");
  
      setTimeout(
        () => document.querySelector("body").classList.remove("toggle"),
        10
      );
    }, 5);
  });

  



function validateForm(){
    let name = document.forms['contactForm']['name'].value;
    let email = document.forms['contactForm']['email'].value;
    let subject = document.forms['contactForm']['subject'].value;
    let message = document.forms['contactForm']['message'].value;

    if (name == '' || hasNumber(name)){
        alert('Name must be filled out and must only contain letters');
        return false;
    } else if (email == '' && phone == ''){
        alert('Email or phone must be filled out');
        return false;
    } else if (!(email.includes('@'))){
        alert('Enter a valid Email address');
        return false;
    } else if (subject == ''){
        alert('Fill out the subject, just to make it easy for me to categories the messages');
        return false;
    } else if (message == ''){
        alert('Message must be filled out');
        return false;
    } else {
        // confirm or cancel
        return confirm('Do you really want to sent the message?')
    }
}

function hasNumber(myString) {
    return /\d/.test(myString);
}
