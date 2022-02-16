import image from './assets/image.png';
import { TitleBlock, ImageBlock, ColumnsBlock, TextBlock } from './classes/blocks';
const text = `
Крутые видео и уроки по JavaScript тут: <a href="https://youtube.com/c/VladilenMinin" target="_blank">Владилен Минин</a>. Тут ты найдешь исчерпывающую информацию по любым аспектам языка, любым фреймворкам, такие как: React, Vue, Angular, Node, Svelte, Express, Next, Nuxt и многое другое. Присоединяйся!
`;
export const model = [
	new TitleBlock('Конструктор сайтов на JavaScript', {
		tag: 'h3',
		styles: {
			'background-color': '#4d4959',
			color: '#fff',
			'text-align': 'center',
			padding: '1rem',
		},
	}),
	new ImageBlock(image, {
		styles: {
			padding: '2rem 0',
			display: 'flex',
			'justify-content': 'center',
			// margin: '0 auto',
		},
		imageStyles: { width: '300px', height: 'auto' },
	}),
	new TextBlock(text, {
		styles: {
			background: 'linear-gradient(to left, #f2994a, #f2c94c)',
			padding: '1rem',
			'font-weight': 'bold',
		},
	}),
	new ColumnsBlock(
		[
			'Приложение на чистом JavaScript, без использования библиотек',
			'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс',
			'JavaScript - это просто, интересно. Научись создавать любые UI своими руками',
		],
		{
			styles: {
				background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
				padding: '2rem',
				color: '#fff',
				'font-weight': 'bold',
			},
		}
	),
];
