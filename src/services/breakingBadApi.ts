import { BreakingBadCharacter } from '../types/BreakingBad.interface';

async function getAllCharacters() {
	const res = await fetch('https://breakingbadapi.com/api/characters');
	const data: BreakingBadCharacter[] = await res.json();
	return data;
}

export { getAllCharacters };
