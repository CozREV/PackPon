function initPackingBtns(){

    const addBtn = document.getElementById("AddBtn")
    const removeBtn = document.getElementById("RemoveBtn")
    const cancel = document.getElementById("cancel")
    const confirm = document.getElementById("confirm")

    addBtn.addEventListener("click", function(){
        document.getElementById("popup-overlay").classList.remove("hidden")
    })

    cancel.addEventListener("click", function(){
        document.getElementById("popup-overlay").classList.add("hidden")
    })

    confirm.addEventListener("click", function(){
        const addList = {
            name: document.getElementById("popup-name").value,
            quantity: document.getElementById("popup-quantity").value,
            weight: document.getElementById("popup-weight").value,
            hasPacked: document.getElementById("popup-packed").checked
        }

        appState.packing.items.push(addList)

        UpdateView()
    })
    
    removeBtn.addEventListener("click", function(){
    
    })
}
