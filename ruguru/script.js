window.onload = function() {
    var container = document.getElementById('imageContainer');

    for (var i = 0; i < images.length; i++) {
        var img = document.createElement('img');
        img.src = images[i].src;
        img.alt = images[i].alt;
        container.appendChild(img);
    }

    setTimeout(function() {
        document.getElementById('brandName').style.display = 'none';
        container.style.display = 'block';
    }, 3000); // Wait for 3 seconds
};
