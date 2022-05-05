var fruits, emojis;


fruits = ['mango', 'peach','kiwi', 'cherries',  'pineapple', 'orange'];
emojis = ['🥭','🍑', '🥝', '🍒',  '🍍', '🍊'];
let element_list = document.getElementById('list');
while (!!fruits.length) {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let new_li = document.createElement('li');
  new_li.innerText = fruits.shift();
  let new_span = document.createElement('span');
  new_span.innerText = emojis.shift();

  new_li.appendChild(new_span);

  element_list.appendChild(new_li);
}
