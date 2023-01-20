
document.getElementById("tit-edu").addEventListener("click",()=>{
    if(document.getElementById('des-edu').style.display != 'block'){
        document.getElementById('des-edu').style.display = 'block'
    } else {
        document.getElementById('des-edu').style.display = 'none'
    }
});

document.getElementById("tit-lab").addEventListener("click",()=>{
    if(document.getElementById('des-lab').style.display != 'block'){
        document.getElementById('des-lab').style.display = 'block'
    } else {
        document.getElementById('des-lab').style.display = 'none'
    }
});

document.getElementById("tit-cur").addEventListener("click",()=>{
    if(document.getElementById('des-cur').style.display != 'block'){
        document.getElementById('des-cur').style.display = 'block'
    } else {
        document.getElementById('des-cur').style.display = 'none'
    }
});

