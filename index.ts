let age: number;
let names: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;
let callback: (a: number) => number;

age = 50;
names = 'Max';
toggle = true;
empty = null;
notInitialize = undefined;
callback = (a) => {
  return 100 + a;
};

let anything: any;
anything = 'text';
anything = {};

let some: unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
  str = some;
}

let persone: [string, number];
persone = ['Max', 21];

enum Load {
  LOADING,
  READY,
}

const page = {
  load: Load.READY,
};

if (page.load === Load.LOADING) {
  console.log('Сторінка загружається');
}
if (page.load === Load.READY) {
  console.log('Сторінка загружена');
}

let union: string | number;

union = 'Max';
union = 45;

let stat: 'enable' | 'disable';

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number) {
  return num1 + num2;
}
