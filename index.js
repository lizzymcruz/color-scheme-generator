const colorPickerForm =  document.getElementById("colorpicker-form")
const showColors = document.getElementById('show-colors-container')

//get color api and render color
function getAndRenderColors(hex, mode){
    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5`)
        .then(res => res.json())
        .then(data => {
            showColors.innerHTML = ""
            
            //loop for rendering each color div
            data.colors.forEach(color => {
                //create color div
                const colorDiv = document.createElement('div')
                colorDiv.style.backgroundColor = color.hex.value

                //create hexcode text
                const hexCode = document.createElement('p')
                hexCode.textContent = color.hex.value
                
                //append created elements
                colorDiv.appendChild(hexCode)
                showColors.appendChild(colorDiv)  

                //create tooltip to confirm copy
                const copyToolTip = document.createElement('span')
                copyToolTip.textContent = "Copied!"
                copyToolTip.classList.add('tooltip')
                colorDiv.appendChild(copyToolTip)

                //click color div to copy
                colorDiv.addEventListener('click', function(){
                    navigator.clipboard.writeText(color.hex.value)
                        .then(() => {
                            copyToolTip.classList.add('show')
                            setTimeout(() => {
                                copyToolTip.classList.remove('show')
                            }, 1000)
                        })
                })

                //click hexcode text to copy
                hexCode.addEventListener('click', function(){
                    navigator.clipboard.writeText(color.hex.value)
                        .then(() => {
                            copyToolTip.classList.add('show')
                            setTimeout(() => {
                                copyToolTip.classList.remove('show')
                            }, 1000)
                        })
                })

                //change background color
                document.body.style.backgroundColor = color.hex.value
        })
                                  
    })
}

//default color shown
getAndRenderColors("000000", "monochrome")

//receive value from color inputs
colorPickerForm.addEventListener('submit', function(e){
    e.preventDefault()

    const color = document.getElementById('select-color').value.slice(1)
    const scheme  = document.getElementById('select-scheme').value

    getAndRenderColors(color, scheme)
})
