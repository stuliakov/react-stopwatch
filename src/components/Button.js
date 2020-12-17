import React from 'react';

export function Button(props) {
	return (
		<div>
			{
				props.status === 0 ? <button className={'button button-green'} onClick={props.start}>
					Start
				</button> :
				''}

			{
				props.status === 1 ? <div>
					<button className={'button button-red'} id={'wait'} onClick={props.stop}>
						Wait
					</button>
					<button className={'button button-yellow'} onClick={props.reset}>
						Reset
					</button>
				</div> :
				''}

			{
				props.status === 2 ? <div>
					<button className={'button button-green'} onClick={props.resume}>
						Start
					</button>
					<button className={'button button-yellow'} onClick={props.reset}>
						Reset
					</button>
				</div> :
				''}
		</div>
	);
}
