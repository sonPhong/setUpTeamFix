// tạo ra mảnh chứa 5 khứa
function createArr(n, objTemplate) {
    var arr = [];
    for (var i = 0; i < n; i++) {

        let newObj = Object.assign({}, objTemplate);
        newObj.id = i + 1;
        newObj.name = newObj.name + " " + (i + 1);
        arr.push(newObj);
    }
    return arr;
}

let nNC = 5;
let nDB = 5;
let nNM = 29;

// tạo obj nòng cốt
let objTemplateNC = { id: 0, name: "Nòng cốt", type: "Nòng cốt" };
let objArrNC = createArr(nNC, objTemplateNC);

// tạo obj dự bị
let objTemplateDB = { id: 0, name: "Dự bị", type: "Dự bị" };
let objArrDB = createArr(nDB, objTemplateDB);

// tạo obj normal
let objTemplateNM = { id: 0, name: "Người thường", type: "Người thường" };
let objArrNM = createArr(nDB, objTemplateNM);

console.log(objArrNC);
console.log(objArrDB);
console.log(objArrNM);
