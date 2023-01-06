import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';

import flipSound from '../assets/84322__splashdust__flipcard.wav';
import './flipCard.css';

const FlipCard = ({ value, oldValue = '0' }) => {
	// console.log(root);
	const latin = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const nums = '0123456789';
	const chars = '!@#$%^&*()_+-';
	const symbols = [...(nums + latin + chars)];
	const [play, { stop }] = useSound(flipSound);
	const [playOn] = useSound(flipSound);
	const [playActive] = useSound(flipSound);

	const [displayChar, setDisplayChar] = useState(oldValue);

	const flip = (flipCard, newChar) => {
		const topHalf = flipCard.querySelectorAll('.top');
		const startingChar = topHalf.textContent;
		if (newChar === startingChar) return;

		const bottomHalf = flipCard.querySelectorAll('.bottom');
		const topFlip = document.createElement('div');
		topFlip.classList.add('top-flip');
		const bottomFlip = document.createElement('div');
		bottomFlip.classList.add('bottom-flip');

		topHalf.textContent = startingChar;
		bottomHalf.textContent = startingChar;
		topFlip.textContent = startingChar;
		bottomFlip.textContent = newChar;

		topFlip.addEventListener('animationstart', (e) => {
			topHalf.textContent = newChar;
			play();
		});
		topFlip.addEventListener('animationend', (e) => {
			topFlip.remove();
		});
		bottomFlip.addEventListener('animationend', (e) => {
			bottomHalf.textContent = newChar;
			bottomFlip.remove();
			setDisplayChar(newChar);
		});
		flipCard.append(topFlip, bottomFlip);
	};

	useEffect(() => {
		let startIndex = symbols.indexOf(displayChar);
		const endIndex = symbols.indexOf(value);
		play();

		const myCard = document.querySelector('.flip-card');
		if (myCard !== null) {
			if (startIndex !== endIndex) {
				if (startIndex === symbols.length - 1) startIndex = -1;
				flip(myCard, symbols[startIndex + 1]);
			}
		}
	}, [displayChar]);

	//

	return (
		<div className='segment'>
			<div className='flip-card'>
				<div className='top'>{displayChar}</div>
				<div className='bottom'>{displayChar}</div>
			</div>
		</div>
	);
};

export default FlipCard;
