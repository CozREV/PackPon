const packBtn = document.getElementById("packer-btn")
const convertBtn = document.getElementById("convert-btn")
const budgetBtn = document.getElementById("budget-btn")


packBtn.addEventListener("click", function(){
    appState.app.currentView = "Packing"
    UpdateView()
})

convertBtn.addEventListener("click", function(){
    appState.app.currentView = "Converter"
    UpdateView()
})

budgetBtn.addEventListener("click", function(){
    appState.app.currentView = "Budget"
    UpdateView()
})