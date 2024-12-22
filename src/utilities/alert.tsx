function showAlert(message: string, type: 'success' | 'error'): void {
    let mainElement = document.getElementById('mainAlertbox');

    if (!mainElement) {
        mainElement = document.createElement('div');
        mainElement.setAttribute('id', 'mainAlertbox');
        document.body.insertBefore(mainElement, document.body.firstChild);
    }

    const newElement = document.createElement('span');
    newElement.setAttribute('id', `${type}Alert`);
    newElement.textContent = message;

    if (mainElement) {
        mainElement.insertBefore(newElement, mainElement.firstChild);
    }

    setTimeout(() => {
        newElement.remove();
    }, 2000);

    setTimeout(() => {
        if (mainElement && !mainElement.hasChildNodes()) {
            mainElement.remove();
        }
    }, 5000);
}

export function successAlert(message: string): void {
    showAlert(message, 'success');
}

export function errorAlert(message: string): void {
    showAlert(message, 'error');
}
