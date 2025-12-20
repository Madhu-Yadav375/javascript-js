# Projects related to DOM
### Project link
(https://stackblitz.com/edit/dom-project-chaiaurcode-zctjbc1n?file=index.html)

## Solution code
### Project 1

``` JavaScript
console.log("Madhu)
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroudcolor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroudcolor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroudcolor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroudcolor = e.target.id;
    }
    if (e.target.id === 'pink') {
      body.style.backgroudcolor = e.target.id;
    }
  });
});

```