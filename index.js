const getSchemeBtn =  document.getElementById("colorpicker-form")


getSchemeBtn.addEventListener('submit', function(e){
    e.preventDefault()

    const color = document.getElementById('select-color').value.slice(1)
    const scheme  = document.getElementById('select-scheme').value

    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${scheme}&count=5`)
        .then(res => res.json())
        .then(data => {
            const showColors = document.getElementById('show-colors-container')
            showColors.innerHTML = ""
            
            data.colors.forEach(color => {
                const colorDiv = document.createElement('div')
                colorDiv.style.backgroundColor = color.hex.value
                colorDiv.style.height = "100px"
                colorDiv.style.width = "100px"
                showColors.appendChild(colorDiv)
        })    
    }) 
})
