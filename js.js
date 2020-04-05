let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');
//обьявление обьъекта
let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};
for (let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');
	if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null && a != "" &&
		b != "" && a.length < 20) {
		console.log("norm");
		appData.expenses[a] = b;
	} else {
		console.log("bad");
		i--;
	}

}
appData.moneyPerDay = appData.budget / 30;
alert("Бюджет на 1день составляет:" + appData.moneyPerDay + "руб");
if (appData.moneyPerDay < 100) {
	console.log("Это мин доход");

} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("Это сред доход");

} else if (appData.moneyPerDay > 2000) {
	console.log("это выс доход");
} else {
	console.log("ошибка");

}

