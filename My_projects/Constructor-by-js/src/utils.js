export function row(content, styles = '') {
	return `
  <div class="row" style="${styles}">
    ${content}
  </div>
`;
}

export function col(content) {
	return `
  <div class="col-sm">
    ${content}
  </div>
`;
}

export function css(styles = {}) {
	// const keys = Object.keys(styles);
	// const array = keys.map((key) => {
	// 	return `${key}: ${styles[key]}`;
	// });
	// return array.join('; ');

	const keysToString = (key) => {
		return `${key}: ${styles[key]}`;
	};
	return Object.keys(styles).map(keysToString).join('; ');
}
