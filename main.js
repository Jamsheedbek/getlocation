navigator.geolocation.getCurrentPosition((position, error, option) => {
    console.log(position);
    if (position) {
        fetch('https://locationsenderbot.herokuapp.com/', {
            method: 'POST',
            body: JSON.stringify({
                lat: position.coords.latitude,
                long: position.coords.longitude,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    }
});
