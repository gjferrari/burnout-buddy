let image = document.getElementById('matchimg')
let linkel = document.getElementById('linkspot')
 function changePic () {

    
        if (image.getAttribute('src') == "/images/unlit_match_img.jpeg")
        {
            image.src = "/images/lit_match_img.png";
            linkel.hidden = false
        }
        else
        {
            image.src = "/images/unlit_match_img.jpeg";
            linkel.hidden = true
        }
    }