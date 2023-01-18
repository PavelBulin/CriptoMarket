
let header = document.querySelector('header');

let table = document.querySelector('.table');

let hLeftMenu = [
  ['Рынки', 'Торговля', 'Деривативы'],
  ['Markte', 'Trading', 'Derivate'],
  ['Marknader', 'Handel', 'Derivatinstrument'],
];

let headLeft = header.querySelector('.head.left.menu');

for (const item of hLeftMenu[1]) {
  let div = document.createElement('DIV');
  div.append(item);
  headLeft.append(div);
}

let caption = [
  ['История транзакций', 'Создать все выписки'],
  ['Transaktionsverlauf', 'alle Auszüge erstellen'],
  ['Transaktionshistorik', 'skapa alla kontoutdrag'],
];

let captionTitle = header.querySelector('.caption.title');
let captionLink = header.querySelector('.caption.link');

for (const [index, item] of caption[1].entries()) {
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

let menuArr = [
  ['Фиат', 'Перевод', 'Дистрибуция'],
  ['Fiat', 'Überweisung', 'Distribution'],
  ['Fiat', 'Överföring', 'Distribution'],
]

let menu = header.querySelectorAll('.menu');

for (const item of menuArr[1]) {
  let div = document.createElement('DIV');
  // console.log(item);
  div.append(item);
  menu[1].append(div);
}


let filterArr = [
  ['Перевод', 'Вывод', 'Время', 'Вчера', 'Актив', 'Все', 'Статус', 'Все'],
  ['Überweisung', 'Auszahlung', 'Zeit', 'Gestern', 'Vermögenswert', 'Alle', 'Status', 'Alle'],
  ['Överföring', 'Uttag', 'Tid', 'Igår', 'Tillgång', 'Alla', 'Status', 'Alla'],
]

let filter = header.querySelector('.filter');

for (const [index, item] of filterArr[1].entries()) {
  let div = document.createElement('DIV');
  div.append(item);
  let selecNum = index / 2;
  // console.log(header.querySelector(`.filter.item${Math.round(selecNum + 1)}.title`));
  if (index % 2 == 1) {
    let select = header.querySelector(`.filter.item${Math.round(selecNum)}.select`);
    select.append(div);
  } else {
    let title = header.querySelector(`.filter.item${(selecNum + 1)}.title`);
    title.append(div);
  }
}

let theadArr = [
  ['Время', 'Перевод', 'Кошелёк для ввода', 'Актив', 'Сумма', 'Номер счета', 'Статус'],
  ['Zeit', 'Überweisung', 'Depot', 'Vermögenswert', 'Betrag', 'Kontonummer', 'Status'],
  ['Tid', 'Överföring', 'Plånbok', 'Tillgång', 'Belopp', 'Kontonummer', 'Status'],
];

let tr = document.createElement('TR');
let thead = document.querySelector('thead')

for (const item of theadArr[1]) {
  let td = document.createElement('TD');
  td.append(item);
  tr.append(td);
  thead.append(tr);
}

let tContent = ['2022-12-12 14:40', 'Вывод', 'Спотовый кошелёк', 'EUR', '13.259146', 'DE3010...7133', ''];

let tbody = document.querySelector('tbody')

for (let i = 0; i < 50; i++) {
  let tr = document.createElement('TR');
  for (const [index, item] of tContent.entries()) {
    let td = document.createElement('TD');
    if (i % 2 == 0) {
      td.append(index == 6 ? "Completed" : item)
    } else {
      td.append(index == 6 ? "In Processing" : item)
    }
    tr.append(td);
  }
  tbody.append(tr);
}
