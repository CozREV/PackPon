function MenuView()  {
    return /*html*/ `
        <header id="main-title">
            <h1 class="title">PackPon</h1>
        </header>
        <div id="desc">
            <h3>All-In-One Japan Trip Planner</h3>
        </div>
        <nav id="btns">
            <div class="menu-btn" id="packer-btn">Packer</div>
            <div class="menu-btn" id="convert-btn">Converter</div>
            <div class="menu-btn" id="budget-btn">Budget</div>
        </nav>
    `
}

UpdateView()