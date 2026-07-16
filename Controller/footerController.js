document.getElementById("footer-btn").addEventListener("click", () => {
    document.getElementById("footer").classList.toggle("open")
})

document.getElementById("home-btn").addEventListener("click", function(){
    appState.app.currentView = "Menu"
    UpdateView()
})