let header = document.querySelector('header');

let counter = 1;
let flag = header.querySelector('.flag');
let img = document.createElement('IMG');
img.src = `images/1.png`;
let currency = header.querySelector('.head .right div:nth-last-of-type(1)');

let hLeftMenu = [
  ['Рынки', 'Торговля', 'Деривативы'],
  ['Markte', 'Trading', 'Derivate'],
  ['Marknader', 'Handel', 'Derivatinstrument'],
];

let lastInd = hLeftMenu.length - 1;

flag.addEventListener('click', function () {
  let index = lastInd - (lastInd - (counter++ % lastInd) - 1);
  img.src = `images/${index}.png`;
  headLeft.innerHTML = '';
  headLeftMenuMaker(index);
  currency.innerHTML = index == 1 ? "| &nbsp;EUR&nbsp; |" : "| &nbsp;SEK&nbsp; |";
  captionTitle.innerHTML = '';
  captionLink.innerHTML = '';
  captionMaker(index);
  menu[1].innerHTML = '';
  menuMaker(index);
  filterMaker(index);
  tr.innerHTML = '';
  theadMaker(index);
});

flag.append(img);

let headLeft = header.querySelector('.head.left.menu');

function headLeftMenuMaker(index) {
  for (const item of hLeftMenu[index]) {
    let div = document.createElement('DIV');
    div.append(item);
    headLeft.append(div);
  }
}


let caption = [
  ['История транзакций', 'Создать все выписки'],
  ['Transaktionsverlauf', 'alle Auszüge erstellen'],
  ['Transaktionshistorik', 'skapa alla kontoutdrag'],
];

let captionTitle = header.querySelector('.caption.title');
let captionLink = header.querySelector('.caption.link');

function captionMaker(num) {
  for (const [index, item] of caption[num].entries()) {
    let div = document.createElement('DIV');
    if (!index) {
      let h1 = document.createElement('H1');
      h1.append(item);
      div.append(h1);
      captionTitle.append(div)
    } else {
      div.append(item);
      captionLink.append(div);
    }
  }
}

let menuArr = [
  ['Фиат', 'Перевод', 'Дистрибуция'],
  ['Fiat', 'Überweisung', 'Distribution'],
  ['Fiat', 'Överföring', 'Distribution'],
]

let menu = header.querySelectorAll('.menu');

function menuMaker(index) {
  for (const item of menuArr[index]) {
    let div = document.createElement('DIV');
    div.append(item);
    menu[1].append(div);
  }
}


let filterArr = [
  ['Перевод', 'Вывод', 'Время', 'Вчера', 'Актив', 'Все', 'Статус', 'Все'],
  ['Überweisung', 'Auszahlung', 'Zeit', 'Gestern', 'Vermögenswert', 'Alle', 'Status', 'Alle'],
  ['Överföring', 'Uttag', 'Tid', 'Igår', 'Tillgång', 'Alla', 'Status', 'Alla'],
]

let filter = header.querySelector('.filter');

function filterMaker(num) {
  for (const [index, item] of filterArr[num].entries()) {
    let div = document.createElement('DIV');
    div.append(item);
    let selecNum = index / 2;
    if (index % 2 == 1) {
      let select = header.querySelector(`.filter.item${Math.round(selecNum)}.select`);
      select.innerHTML = `<div>${item}</div><div>&nbsp;</div>`;
    } else {
      let title = header.querySelector(`.filter.item${(selecNum + 1)}.title`);
      title.innerHTML = `<div>${item}</div>`;
    }
  }
}

let theadArr = [
  ['Время', 'Перевод', 'Кошелёк для ввода', 'Актив', 'Сумма', 'Номер счета', 'Статус'],
  ['Zeit', 'Überweisung', 'Depot', 'Vermögenswert', 'Betrag', 'Kontonummer', 'Status'],
  ['Tid', 'Överföring', 'Plånbok', 'Tillgång', 'Belopp', 'Kontonummer', 'Status'],
];

let tr = document.createElement('DIV');
tr.classList.add('thead', 'row');
let thead = header.querySelector('.thead')

function theadMaker(index) {
  for (const item of theadArr[index]) {
    let td = document.createElement('DIV');
    td.classList.add('thead', 'cell')
    td.append(item);
    tr.append(td);
    thead.append(tr);
  }
}

let tContent = ['2022-12-12 14:40', 'Вывод', 'Спотовый кошелёк', 'EUR', '13.259146', 'DE3010...7133', ''];

let table = document.querySelector('.table')
let tbody = document.querySelector('.tbody')

for (let i = 0; i < 50; i++) {
  let tr = document.createElement('DIV');
  tr.classList.add('tbody', 'row');
  for (const [index, item] of tContent.entries()) {
    let td = document.createElement('DIV');
    td.classList.add('tbody', 'cell')
    if (index == 6) {
      td.innerHTML = i % 2 == 0 ? "<div>Completed</div><div>&nbsp;</div>" : "<div>In Processing</div><div>&nbsp;</div>";
      i % 2 == 0 ? td.classList.add('even') : td.classList.add('odd');
      td.addEventListener('click', function () {
        if (this.innerHTML == "<div>Completed</div><div>&nbsp;</div>") {
          this.innerHTML = "<div>In Processing</div><div>&nbsp;</div>";
          td.classList.remove('even');
          td.classList.add('odd');
        } else {
          this.innerHTML = "<div>Completed</div><div>&nbsp;</div>";
          td.classList.remove('odd');
          td.classList.add('even');
        }
      });
    } else {
      td.append(item);
      td.addEventListener('dblclick', function func() {
        let input = document.createElement('input');
        input.value = td.innerHTML;

        td.innerHTML = '';
        td.appendChild(input);

        input.addEventListener('blur', function () {
          td.innerHTML = this.value;
          td.addEventListener('dblclick', func);
        });

        td.removeEventListener('dblclick', func);
      });
    }
    tr.appendChild(td);
  }
  tbody.append(tr);
}


headLeftMenuMaker(counter);
captionMaker(counter);
menuMaker(counter);
filterMaker(counter);
theadMaker(counter);