function Stack() {
  let items = [];

  this.push = (el) => items.push(el);

  this.pop = () => items.pop();

  this.peek = () => items[items.length - 1];

  this.isEmpty = () => items.length === 0;

  this.clear = () => (items.length = []);

  this.size = () => items.length;

  this.print = () => console.log(items.toString());
}

class Stack1 {
  constructor() {
    this.items = [];
  }

  push = (el) => this.items.push(el);

  pop = () => this.items.pop();

  peek = () => this.items[this.items.length - 1];

  isEmpty = () => this.items.length === 0;

  clear = () => (this.items.length = []);

  size = () => this.items.length;

  print = () => console.log(this.items.toString());
}

const words = new Stack1();
words.push('relentless');
words.push('driven');
words.push('hungry');
words.push('tenacious');

console.log(words.peek());

words.print();
