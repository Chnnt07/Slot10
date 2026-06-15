import React, { useState } from 'react';
import CountdownTimer from './components/CountdownTimer';
import WindowSize from './components/WindowSize';
import ValidatedInput from './components/ValidatedInput';

export default function App() {
	const [userId, setUserId] = useState(1);
	const [initialTime, setInitialTime] = useState(10);

	return (
		<div style={{padding:20, fontFamily:'Segoe UI, Arial'}}>
			<h1>Exercise 13 — useEffect Examples</h1>


			<section style={{marginBottom:20}}>
				<label>
					Timer start:{' '}
					<input
						type="number"
						min={0}
						value={initialTime}
						onChange={(e) => setInitialTime(Number(e.target.value) || 0)}
						style={{width:80}}
					/>
				</label>
				<CountdownTimer initialValue={initialTime} />
			</section>

			<section style={{marginBottom:20}}>
				<WindowSize />
			</section>

			<section style={{marginBottom:20}}>
				<ValidatedInput />
			</section>
		</div>
	);
}
