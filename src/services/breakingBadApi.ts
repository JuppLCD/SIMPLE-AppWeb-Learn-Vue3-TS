import { BreakingBadCharacter } from '../types/BreakingBad.interface';

async function getAllCharacters() {
	const res = await fetch('https://breakingbadapi.com/api/characters');
	const data: BreakingBadCharacter[] = await res.json();
	return data;
}

async function getCharactersByName(name: string) {
	const formatName = name.replace(' ', '+');
	const res = await fetch(`https://breakingbadapi.com/api/characters?name=${formatName}`);
	const data: BreakingBadCharacter[] = await res.json();
	return data;
}

export { getAllCharacters, getCharactersByName };
