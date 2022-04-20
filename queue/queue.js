function Queue() {
  var items = [];

  this.enqueue = function (el) {
    items.push(el);
  };

  this.dequeue = function (el) {
    return items.unshift();
  };

  this.front = function () {
    return items[0];
  };

  this.isEmpty = function () {
    return items.length == 0;
  };

  this.clear = function () {
    items = [];
  };

  this.size = function () {
    return items.length;
  };

  this.print = function () {
    console.log(items.toString());
  };
}
