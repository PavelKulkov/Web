describe("Сложение целых, дробных чисел",function(){
	function makeTest(a,b){
		var expected = a+1;
		it(a+"+"+b+"="+expected,function(){
			assert.equal(addition(a,b),expected);
		});
	}
	for(var a=-1;a<=1; a+=0.5){
		makeTest(a,1);
	}
	
});
describe("Вычитание целых, дробных чисел",function(){
	function makeTest(a,b){
		var expected = a-b;
		it(a+"-"+b+"="+expected,function(){
			assert.equal(substraction(a,b),expected);
		});
	}
	for(var a=-0.5;a<=1; a+=0.5){
		makeTest(a,1);
	}
	for(var a=-0.5;a<=1; a+=0.5){
		makeTest(1,a);
	}
});
describe("Умножение целых, дробных чисел",function(){
	function makeTest(a,b){
		var expected = a*b;
		it(a+"*"+b+"="+expected,function(){
			assert.equal(multiplication(a,b),expected);
		});
	}
	for(var a=-0.5;a<=1; a+=0.5){
		makeTest(a,a+0.5);
	}
	for(var a=-0.5;a<=1; a+=0.5){
		makeTest(a+0.5,a);
	}
});
describe("Деление целых, дробных чисел", function(){
	function makeTest(a,b){
		var expected = a/b;
		it(a+"/"+b+"="+expected, function(){
			assert.equal(division(a,b),expected);
		});
	}
	for(var a=-0.5;a<=1; a+=0.5){
		makeTest(a,1);
	}
	for(var a=-1;a<=3; a+=2){
		makeTest(1,a);
	}
	describe("Проверка деления на 0 ",function(){
		it("1/0 = false",function(){
			assert.isFalse(division(1,0),"1/0 = false");
		});
	});
});
describe("Факториал натуральных чисел", function(){
	function makeTest(n){
		n = Math.abs(n);
		var result = 1;
		for(var i=1;i<=n;i++){
			result *=i;
		}
		it(n + "! = " + result,function(){
			assert.equal(fact(n),result);
		});
	}
	for(var n=0;n<=7;n+=1){
		makeTest(n);
	}
	describe("Проверка на отрицательное число",function(){
		 it("Проверка на отрицательные числа: -2! = 2", function(){
			assert.equal(fact(-2),2);
		});
		it("Проверка на дробные числа 1.7 = false", function(){
			assert.isFalse(fact(1.7), 'factorial(1.7) = false ');
		});
	});
});