let image = document.getElementById('matchimg')
 function changePic () {

    
        if (image.getAttribute('src') == "/images/unlit_match_img.jpeg")
        {
            image.src = "/images/lit_match_img.png";
        }
        else
        {
            image.src = "/images/unlit_match_img.jpeg";
        }
    }