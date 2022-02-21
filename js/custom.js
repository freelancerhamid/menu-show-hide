function showHide(){
    if(document.getElementById("mainMunu").style.display == 'none'){
        document.getElementById("mainMunu").style.display = 'flex';
    }else{
        document.getElementById("mainMunu").style.display = 'none';
    }
}

document.getElementById("menuIcon").addEventListener('click', showHide);