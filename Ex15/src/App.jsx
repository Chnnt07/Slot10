import React, { useReducer } from 'react';
import './App.css';

const initialState = {
	questions: [
		{
			id: 1,
			question: 'What is the capital of Australia?',
			options: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
			answer: 'Canberra',
		},
		{
			id: 2,
			question: 'Which planet is known as the Red Planet?',
			options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
			answer: 'Mars',
		},
	],
	currentQuestion: 0,
	selectedOption: '',
	score: 0,
	showScore: false,
};

function reducer(state, action) {
	switch (action.type) {
		case 'SELECT_OPTION':
			return { ...state, selectedOption: action.payload };

		case 'NEXT_QUESTION': {
			const isCorrect =
				state.selectedOption &&
				state.selectedOption === state.questions[state.currentQuestion].answer;
			const gained = isCorrect ? 1 : 0;
			const nextIndex = state.currentQuestion + 1;

			if (nextIndex >= state.questions.length) {
				return {
					...state,
					score: state.score + gained,
					selectedOption: '',
					showScore: true,
				};
			}

			return {
				...state,
				currentQuestion: nextIndex,
				score: state.score + gained,
				selectedOption: '',
			};
		}

		case 'RESTART_QUIZ':
			return { ...initialState };

		default:
			return state;
	}
}

export default function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const { questions, currentQuestion, selectedOption, score, showScore } = state;

	function handleSelect(option) {
		dispatch({ type: 'SELECT_OPTION', payload: option });
	}

	function handleNext() {
		if (!selectedOption) return; // require selection
		dispatch({ type: 'NEXT_QUESTION' });
	}

	function handleRestart() {
		dispatch({ type: 'RESTART_QUIZ' });
	}

	if (showScore) {
		return (
			<div id="center">
				<div className="score-view">
					<div className="score-container">
						<h1>Your Score: {score}/{questions.length}</h1>
						<button className="counter" onClick={handleRestart}>Restart Quiz</button>
					</div>
				</div>
			</div>
		);
	}

	const q = questions[currentQuestion];

	return (
		<div id="center">
			<div className="quiz-wrapper">
				<div className="quiz-card">
					<h2>Question {currentQuestion + 1}</h2>
					<p className="question-text">{q.question}</p>

					<div className="options">
						{q.options.map((opt) => (
							<button
								key={opt}
								onClick={() => handleSelect(opt)}
								className={`option-btn ${selectedOption === opt ? 'selected' : ''}`}
							>
								{opt}
							</button>
						))}
					</div>

					<div className="actions">
						<button onClick={handleNext} disabled={!selectedOption} className="next-btn">
							Next
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

