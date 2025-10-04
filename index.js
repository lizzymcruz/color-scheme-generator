const getSchemeBtn =  document.getElementById("getcolorscheme-btn")


getSchemeBtn.addEventListener('submit', function(e){
    e.preventDefault()

    const selectColor = document.getElementById('selectColor').value
    const selectScheme  = document.getElementById('selectScheme').value

    fetch(`https://www.thecolorapi.com/id?${selectColor}&mode=${selectScheme}&count=6`)
        .then(res => res.json())
        .then(data => console.log(data))
})