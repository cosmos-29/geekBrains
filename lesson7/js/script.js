var products = [
	{
		name: 'Smart Phone',
		price: 70000,		

	},
	{
		name: 'Защитное стекло',
		price: 1000,		

	},
	{
		name: 'Защитный чехол',
		price: 1500,		

	},
];



var $catalog = document.getElementById('catalog');
$catalog.addEventListener('click', handleByClick);

function getIndex(name) {
	var indx = -1;
	for (var i = 0; i < cart.length; i++) {
		if (cart[i].name === name) {
			return indx = i;
		}
	}
	return indx;
}

function handleByClick(event) {
	if(event.target.tagName == 'BUTTON') {
		//console.log('clicked');
		var $product = event.target.parentElement;
		var name = $product.querySelector('.name').textContent;
		var price = +$product.querySelector('.price').textContent;
		var index = getIndex(name);
		if (index == -1) {
			//товара в корзине нет
			cart.push({name: name, price: price, quantity: 1})
		} else {
			cart[index].quantity++;
		}
		buildTotal(cart);
	}
} 

var $template = document.getElementById('template');
function buildCatalog(products) {
	for( var i = 0; i < products.length; i++) {
		var $item = $template.children[0].cloneNode(true);
		$item.querySelector('.name').textContent = products[i].name;
		$item.querySelector('.price').textContent = products[i].price;

		$catalog.appendChild($item);
	}
}
buildCatalog(products);

//Создаем 2 объекта наполенный и пустой тест
var cart = [];

var $cart = document.getElementById('cart');
function buildTotal(cart) {
	var sum = 0;
	var count = 0;
	for(var i = 0; i < cart.length; i++) {
		sum = sum + cart[i].price * cart[i].quantity;
		count = count + cart[i].quantity;
	}
	$cart.innerHTML = '';

	var $span = document.createElement('span');
	if(cart.length == 0) {
		$span.textContent = 'Корзина пуста';
	} else {
		$span.textContent = 'Общая сумма покупок: ' + sum + ' рублей.' + ' Количество товаров: ' + count;
	}
	$cart.appendChild($span);
}
buildTotal(cart);
// создаем кнопку очистить;
var $clear = document.getElementById('clear');
$clear.addEventListener('click', handleClearByClick);
function handleClearByClick(event) {
	cart = [];
	buildTotal(cart);
}


