import React, { useState, useEffect } from 'react';
import Header from './Header';
import PizzaForm from './PizzaForm';
import PizzaList from './PizzaList';

function App() {
	const [pizzas, setPizzas] = useState([]);
	const [selectedPizza, setSelectedPizza] = useState({});

	useEffect(() => {
		fetch('http://localhost:3001/pizzas')
			.then((res) => res.json())
			.then((data) => setPizzas(data));
	}, []);

	function selectPizza(pizzaObj) {
		return setSelectedPizza(pizzaObj);
	}

	return (
		<>
			<Header />
			<PizzaForm selectedPizza={selectedPizza} />
			<PizzaList pizzas={pizzas} selectPizza={selectPizza} />
		</>
	);
}

export default App;
