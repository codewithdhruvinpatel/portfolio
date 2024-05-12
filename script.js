const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const textArray = ["Dhruvin Patel."];

let textArrayIndex = 0;
let charIndex = 0;

const erase = () => {
  if (charIndex > 0) {
    cursor.classList.remove('blink');
    typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 80);
  } else {
    cursor.classList.add('blink');
    textArrayIndex++;
    if (textArrayIndex > textArray.length - 1) {
      textArrayIndex = 0;
    }
    setTimeout(type, 1000);
  }
}

const type = () => {
  if (charIndex <= textArray[textArrayIndex].length - 1) {
    cursor.classList.remove('blink');
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 120);
  } else {
    cursor.classList.add('blink');
    setTimeout(erase, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
})


     function sendEmail() {
            Email.send({
    Host : "smtp.elasticemail.com",
    Username : "codewithdhruvinpatel@gmail.com",
    Password : "D586076099D19D4D069A41BC31B6CA20EF4D",
    To : 'codewithdhruvinpatel@gmail.com',
    From : "codewithdhruvinpatel@gmail.com",
    Subject : document.getElementById("exampleFormControlInput3").value,
    Body : `
    Name: ${document.getElementById("exampleFormControlInput1").value} <br>
    Email: ${document.getElementById("exampleFormControlInput2").value} <br>
    Message: ${document.getElementById("exampleFormControlTextarea4").value} <br>

    `
}).then(
  message => alert("Email Not Sent W'll Be Back Soon , Mail Us At codewithdhruvinpatel@gmail.com")
);


        }
     document.getElementById("year").innerHTML = new Date().getFullYear();



