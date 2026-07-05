function ViewPacking(){
    return /*html*/ `
        <table>
            <tr>
                <td class="itemList">${appState.packing.items.name}</td>
                <td class="itemList">${appState.packing.items.quantity}</td>
                <td class="itemList">${appState.packing.items.hasPacked}</td>
            </tr>
        </table>
        `
}

