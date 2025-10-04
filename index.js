const colorPickerForm =  document.getElementById("colorpicker-form")
const showColors = document.getElementById('show-colors-container')

function getAndRenderColors(hex, mode){
    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5`)
        .then(res => res.json())
        .then(data => {
            showColors.innerHTML = ""
            
            data.colors.forEach(color => {
                const colorDiv = document.createElement('div')
                colorDiv.style.backgroundColor = color.hex.value

                const hexCode = document.createElement('p')
                hexCode.textContent = color.hex.value
                colorDiv.appendChild(hexCode)

                showColors.appendChild(colorDiv)  

                const copyToolTip = document.createElement('span')
                copyToolTip.textContent = "Copied!"
                copyToolTip.classList.add('tooltip')
                colorDiv.appendChild(copyToolTip)

                colorDiv.addEventListener('click', function(){
                    navigator.clipboard.writeText(color.hex.value)
                        .then(() => {
                            copyToolTip.classList.add('show')
                            setTimeout(() => {
                                copyToolTip.classList.remove('show')
                            }, 1000)
                        })
                })

                hexCode.addEventListener('click', function(){
                    navigator.clipboard.writeText(color.hex.value)
                        .then(() => {
                            copyToolTip.classList.add('show')
                            setTimeout(() => {
                                copyToolTip.classList.remove('show')
                            }, 1000)
                        })
                })

                document.body.style.backgroundColor = color.hex.value
        })
                                  
    })
}

getAndRenderColors("000000", "monochrome")

colorPickerForm.addEventListener('submit', function(e){
    e.preventDefault()

    const color = document.getElementById('select-color').value.slice(1)
    const scheme  = document.getElementById('select-scheme').value

    getAndRenderColors(color, scheme)
})
