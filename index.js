const getSchemeBtn =  document.getElementById("colorpicker-form")
const showColors = document.getElementById('show-colors-container')

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
                showColors.appendChild(colorDiv)
                const hexCode = document.createElement('p')
                hexCode.textContent = color.hex.value
                colorDiv.appendChild(hexCode)
        })
                                  
    })
     
})
