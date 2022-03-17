import React, { useState, useEffect } from 'react';

function PizzaForm({ selectedPizza }) {
	const [topping, setTopping] = useState('');
	const [size, setSize] = useState('');
	const [vegetarian, setVegetarian] = useState(false);

	useEffect(() => {
		setTopping(selectedPizza.topping);
		setSize(selectedPizza.size);
		setVegetarian(selectedPizza.vegetarian);
	}, [selectedPizza]);

	return (
		<form onSubmit={null /*handle that submit*/}>
			<div className="form-row">
				<div className="col-5">
					<input
						className="form-control"
						type="text"
						name="topping"
						placeholder="Pizza Topping"
						onChange={(e) => setTopping(e.target.value)}
						value={topping}
					/>
				</div>
				<div className="col">
					<select
						className="form-control"
						name="size"
						onChange={(e) => setSize(e.target.value)}
					>
						<option value="Small">Small</option>
						<option value="Medium">Medium</option>
						<option value="Large">Large</option>
					</select>
				</div>
				<div className="col">
					<div className="form-check">
						<input
							className="form-check-input"
							type="radio"
							name="vegetarian"
							value="Vegetarian"
							onClick={() => setVegetarian(true)}
							checked={true}
						/>
						<label className="form-check-label">Vegetarian</label>
					</div>
					<div className="form-check">
						<input
							className="form-check-input"
							type="radio"
							name="vegetarian"
							value="Not Vegetarian"
							onChange={() => setVegetarian(false)}
							checked={true}
						/>
						<label className="form-check-label">Not Vegetarian</label>
					</div>
				</div>
				<div className="col">
					<button type="submit" className="btn btn-success">
						Submit
					</button>
				</div>
			</div>
		</form>
	);
}

export default PizzaForm;
