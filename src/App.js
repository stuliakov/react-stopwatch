import React, { useState } from 'react';
// import { fromEvent } from 'rxjs';
// import { map, buffer, filter, debounceTime } from 'rxjs/operators';
import { Watch } from './components/Watch';
import { Button } from './components/Button';

function App() {
	const [ time, setTime ] = useState({ h: 0, m: 0, s: 0 });
	const [ interv, setInterv ] = useState();
	const [ status, setStatus ] = useState(0);
	// Not started = 0
	// started = 1
	// stopped = 2

	const start = () => {
		setStatus(1);
		setInterv(setInterval(increment, 1000));
	};

	let updatedS = time.s;
	let updatedM = time.m;
	let updatedH = time.h;

	const increment = () => {
		if (updatedM === 60) {
			updatedH++;
			updatedM = 0;
		}
		if (updatedS === 60) {
			updatedM++;
			updatedS = 0;
		}
		updatedS++;
		return setTime({ h: updatedH, m: updatedM, s: updatedS });
	};

	const stop = () => {
		clearInterval(interv);
		setStatus(2);
	};

	const reset = () => {
		clearInterval(interv);
		setStatus(0);
		setTime({ h: 0, m: 0, s: 0 });
	};

	const resume = () => start();

	// const doubleclickEvent = () => {
	// 	console.log('doblecklick setted');
	// 			if (document.getElementById('wait')) {
	// 				let click = fromEvent(document.getElementById('wait'), 'click');
	//
	// 				const doubleClick = click.pipe(
	// 					buffer(click.pipe(debounceTime(250))),
	// 					map((clicks) => clicks.length),
	// 					filter((clicksLength) => clicksLength >= 2)
	// 				);
	//
	// 				doubleClick.subscribe((e) => {
	// 					stop();
	// 				});
	// 			}
	// };

	return (
		<div className={'main-section'}>
			<div className={'stopwatch'}>
				<Watch time={time} />
				<Button status={status} start={start} stop={stop} reset={reset} resume={resume} />
			</div>
		</div>
	);
}

export default App;
