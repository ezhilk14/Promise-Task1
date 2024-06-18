document.getElementById('getDogBtn').addEventListener('click', function() {
    const url = 'https://api.thedogapi.com/v1/images/search';

    function getDogImage() {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        reject('Error fetching dog image');
                    }
                    return response.json();
                })
                .then(data => {
                    resolve(data[0].url);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    getDogImage()
        .then(imageUrl => {
            document.getElementById('dogImage').src = imageUrl;
        })
        .catch(error => {
            console.error(error);
        });
});
