var userName = prompt('Please, enter your name');
var lastName = prompt('Please, enter your last name');
var age = prompt('Please, enter your age');

var num1 = parseInt(prompt('Enter first number'));
var num2 = parseInt(prompt('Enter second number'));
var num3 = parseInt(prompt('Enter third number'));

var sum = num1 + num2 + num3;
var res = sum / 3;

document.write('<header>This is header</header>');
document.write('<div class="nav-bar">');
document.write('<nav><p>This is nav</p></nav>');
document.write('<section><h2>');
document.write(userName + '<br/>');
document.write(lastName + '<br/>');
document.write(age + '<br/>');
document.write(res + '<br/>');
document.write('</h2></section>');
document.write('</div>');

document.write('<footer>This is footer</footer>');
