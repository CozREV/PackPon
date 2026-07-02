function UpdateView(){
    let html = ""

    if(appState.app.currentView === "Menu")
        html = MenuView()

    document.getElementById("main").innerHTML = html
}
