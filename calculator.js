var $currentNum = $('.current_num');

var Calculator = {
  currentNum: +$currentNum.text(),
  displayCurrentNum: function() {
    $currentNum.text(this.currentNum);
  },
  addToCurrentNum: function(n) {
    if (this.currentNum === 0) {
      this.currentNum = +n;
      this.displayCurrentNum();
    } else {
      this.currentNum = +(String(this.currentNum) + n);
      this.displayCurrentNum();
    }
  },
  resetCurrentNum: function() {
    this.currentNum = 0;
    this.displayCurrentNum();
  },
  clearCurrentNum: function() {
    $('#c').on('click', function(e) {
      e.preventDefault();
      this.resetCurrentNum();
    }.bind(this));
  },
  registerDigit: function() {
    $('.digit').on('click', function(e) {
      e.preventDefault();
      this.addToCurrentNum(e.target.text);
    }.bind(this));
  },
  bind: function() {
    this.registerDigit();
    this.clearCurrentNum();
  },
  init: function() {
    this.bind();
  },
}

Calculator.init();
