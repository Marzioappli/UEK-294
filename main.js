function meinClick() {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const del = "<button onclick=delet(this)>delete</button>";
    const edit = "<button onclick=edit(this)>edit</button>";
    const input =  document.getElementById("text").value;
    const text = document.createTextNode(input);
    const print = document.getElementById('tasks');
    div.insertAdjacentHTML("beforeend", del);
    div.insertAdjacentHTML("beforeend", edit);
    p.appendChild(text);
    div.appendChild(p);
    print.appendChild(div);
}

function delet(element) {
    console.log(element);
    let mom = element.parentElement;
    console.log(mom);
    mom.remove();
}

function edit(element) {
    let dad = element.parentElement;
    console.log(dad)
    let chind = dad.children;
    let info = dad.getElementsByTagName('p')[0].innerHTML;
    console.log(info);
    let pudding = "<input type=text placeholder=" + info + ">";
    let cola = "<button onclick=save(this)>save</button>";
    console.log(chind[2]);
    chind[2].remove();
    chind[1].remove();
    dad.insertAdjacentHTML("beforeend", cola);
    dad.insertAdjacentHTML("beforeend", pudding);
}

function save(element) {
    let papa = element.parentElement;
    console.log(papa)
    let ch = papa.children;
    let abi = document.createElement('p');
    let ted = "<button onclick=edit(this)>edit</button>";
    let axt = ch[2].value;
    console.log(axt);
    let text = document.createTextNode(axt);
    ch[2].remove();
    ch[1].remove();
    papa.insertAdjacentHTML("beforeend", ted);
    abi.appendChild(text);
    papa.appendChild(abi);

}
