async function ajaxSubmit(formObj, action) {
    try {
        const response = await fetch(action, {
            method: 'POST',
            body: JSON.stringify(formObj),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (!response) {
            throw new Error('Ошибка сервера');
        }
        return response.json();
    } catch (error) {
        throw error;
    }
}

export default ajaxSubmit;