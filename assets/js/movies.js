const api_url = "https://api.streamsb.co/api/folder/list?key=9027dcim62hq4asqpoa6&fld_id=37648";
async function getFilesAndFolders() {
    const response = await fetch(api_url);
    var data = await response.json();
    let list = document.getElementById("myList");
    // var jsonData = await JSON.parse(data);
    data.result.folders.forEach((item) => {
        let name = item.name;
        let link = document.createElement('a');
        link.href = "";
        link.onclick = "onClick(item.fld_id)"; //"https://api.streamsb.co/api/folder/list?key=9027dcim62hq4asqpoa6&fld_id=" + item.fld_id;
        link.innerText = name;
        link.style.color = "#ffffff";
        list.appendChild(link);
    });
}

function onClick() {

}

if (window.addEventListener) {
    window.addEventListener("load", getFilesAndFolders, false);
}