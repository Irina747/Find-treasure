// Получаем случайное число от 0 до size-1
	let getRandomNumber = function (size) {
	return Math.floor(Math.random() * size);
};

// Вычисляем расстояние от клика (event) до клада (target)
	let getDistance = function (event, target) {
	let diffX = event.offsetX - target.x;
	let diffY = event.offsetY - target.y;
	return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

// Получаем для расстояния строку подсказки
	let getDistanceHint = function (distance) {
		if (distance < 30) {
			return "Просто жара!";
		} else if (distance < 50) {
			return "Горячо";
		} else if (distance < 100) {
			return "Тепло";
		} else if (distance < 200) {
			return "Холодно";
		} else if (distance < 300) {
			return "Очень холодно";
		} else {
			return "Замерзнешь!";
		}
	};

// Создаем переменные
	const width = 400;
	const height = 400;
	let clicks = 0;
	let steps = 20;

// Случайная позиция клада
	const target = {
		x: getRandomNumber(width),
		y: getRandomNumber(height)
	};

// Добавляем элементу img обработчик клика
$("#map").click(function (event) {
	clicks++;
	steps--;

// Получаем расстояние от места клика до клада
	let distance = getDistance(event, target);

// Преобразуем расстояние в подсказку
	let distanceHint = getDistanceHint(distance);

// Записываем в элемент #distance новую подсказку
	$("#distance").text(distanceHint);
	$("#step").text ("Осталось " + steps + " ходов");

// Если клик был достаточно близко, поздравляем с победой
	if (distance < 15) {
		alert("Клад найден! Сделано кликов: " + clicks);
	} 
	if (clicks === 20) {
		alert ("Конец игры! Превышено допустимое количество ходов");
	}
});

$("#step").text ("Осталось " + steps + " ходов");
	