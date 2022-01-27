//=== ФУНКЦИЯ ДЛЯ ОТПРАВКИ ФОРМЫ ============================================================================

const postData = async (url, data) => {
	const resultPostData = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: data,
	});
	return await resultPostData.json();
};

async function getResource(url) {
	const resultGetData = await fetch(url);

	if (!resultGetData.ok) {
		throw new Error(`Ошибка запроса. Код: ${resultGetData.status}`);
	}

	return await resultGetData.json();
}

export { postData };
export { getResource };
