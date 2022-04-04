(async () => {
    // create and show the notification
    const showNotification = () => {

    console.log('inside notification');
        // create a new notification
        const notification = new Notification('Test Notification ---- ');
        setTimeout(() => {
            notification.close();
        }, 10 * 1000);
    }

    // show an error message
    const showError = () => {
        const error = document.querySelector('.error');
        error.textContent = 'You blocked the notifications';
    }

    // check notification permission
    let granted = false;

    if (Notification.permission === 'granted') {
        console.log("said yes ");
        granted = true;
    } else if (Notification.permission !== 'denied') {
        let permission = await Notification.requestPermission();
        granted = permission === 'granted' ? true : false;
    }

    // show notification or error
    // granted ? showNotification() : showError();
})();
