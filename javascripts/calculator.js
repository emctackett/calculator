var Calculator = {
  displayCurrentNum: function() {
    $('.current_num').text(this.currentNum);
  },
  displayCurrentCalculation: function() {
    $('.calculation').text(this.currentCalculation);
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
  resetCurrentCalculation: function() {
    this.currentCalculation = '';
    this.displayCurrentCalculation();
  },
  resetCalculator() {
    this.resetCurrentCalculation();
    this.resetCurrentNum();
  },
  calculateResult: function() {
    var Calc = new BigEval();
    var expression = this.currentCalculation + this.currentNum;
    var result = Calc.exec(expression);

    this.currentNum = result;
    this.displayCurrentNum();
    this.resetCurrentCalculation();
  },
  clearCurrentNum: function() {
    $('#c').on('click', function(e) {
      e.preventDefault();
      this.resetCurrentNum();
      this.displayCurrentNum();
    }.bind(this));
  },
  registerDigit: function() {
    $('.digit').on('click', function(e) {
      e.preventDefault();
      this.addToCurrentNum(e.target.text);
    }.bind(this));
  },
  registerOperation: function() {
    $('.op').on('click', function(e) {
      e.preventDefault();
      this.currentCalculation = this.currentCalculation + ' ' + this.currentNum + ' ' + e.target.text;
      this.resetCurrentNum();
      this.displayCurrentCalculation();
    }.bind(this));
  },
  negOperator: function() {
    $('#neg').on('click', function(e) {
      e.preventDefault();
      this.currentNum = this.currentNum * -1;
      this.displayCurrentNum();
    }.bind(this));
  },
  clearCalculator: function() {
    $('#ce').on('click', function(e) {
      e.preventDefault();
      this.resetCalculator();
    }.bind(this));
  },
  decimal: function() {
    $('.dot').on('click', function(e) {
      e.preventDefault();
      this.currentNum = this.currentNum + '.';
      this.displayCurrentNum();
    }.bind(this));
  },
  result: function() {
    $('.result_button').on('click', function(e) {
      e.preventDefault();
      this.calculateResult();
    }.bind(this));
  },
  bind: function() {
    this.decimal();
    this.registerDigit();
    this.clearCurrentNum();
    this.registerOperation();
    this.negOperator();
    this.clearCalculator();
    this.result();
  },
  init: function() {
    this.resetCalculator();
    this.bind();
  },
}

Calculator.init();
