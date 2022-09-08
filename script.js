let outScreen = document.querySelector('.output input');
mode = 'calc';

function insert(num) {
  outScreen.value += num;
  if (mode == 'equal') {
    outScreen.value = '';
    outScreen.value += num;
    mode = 'calc';
  };
};

function clr() {
  outScreen.value = '';
};

function del() {
  outScreen.value = outScreen.value.slice(0, -1);
  if (mode == 'equal') {
    outScreen.value = '';
  };
};

function calc() {
  try {
    outScreen.value = eval(outScreen.value);
    mode = 'equal';
  } catch (err) {
    outScreen.value = 'Erro 404!';
    mode = 'equal';
  };
};

let menuIcon = document.querySelector('.icon'),
  menu = document.querySelector('.menu');

menuIcon.onclick = function() {
  menu.classList.toggle('open');
};

let blueTheme = document.querySelector('.blue'),
  blackTheme = document.querySelector('.black'),
  redTheme = document.querySelector('.red'),
  brownTheme = document.querySelector('.brown'),
  greenTheme = document.querySelector('.green');
  goldenrodTheme = document.querySelector('.goldenrod');

blueTheme.onclick = function() {
  document.body.classList.remove('black');
  document.body.classList.remove('red');
  document.body.classList.remove('brown');
  document.body.classList.remove('green');
  document.body.classList.remove('gold');
  document.body.classList.add('blue');
  menu.classList.remove('open');
};

blackTheme.onclick = function() {
  document.body.classList.remove('blue');
  document.body.classList.remove('red');
  document.body.classList.remove('brown');
  document.body.classList.remove('green');
  document.body.classList.remove('gold');
  document.body.classList.add('black');
  menu.classList.remove('open');
};

redTheme.onclick = function() {
  document.body.classList.remove('black');
  document.body.classList.remove('brown');
  document.body.classList.remove('green');
  document.body.classList.remove('gold');
  document.body.classList.remove('blue');
  document.body.classList.add('red');
  menu.classList.remove('open');
};

brownTheme.onclick = function() {
  document.body.classList.remove('black');
  document.body.classList.remove('red');
  document.body.classList.remove('blue');
  document.body.classList.remove('green');
  document.body.classList.remove('gold');
  document.body.classList.add('brown');
  menu.classList.remove('open');
};

greenTheme.onclick = function() {
  document.body.classList.remove('black');
  document.body.classList.remove('red');
  document.body.classList.remove('brown');
  document.body.classList.remove('gold');
  document.body.classList.remove('blue');
  document.body.classList.add('green');
  menu.classList.remove('open');
};

goldenrodTheme.onclick = function() {
  document.body.classList.remove('black');
  document.body.classList.remove('red');
  document.body.classList.remove('brown');
  document.body.classList.remove('green');
  document.body.classList.remove('blue');
  document.body.classList.add('goldenrod');
  menu.classList.remove('open');
};

