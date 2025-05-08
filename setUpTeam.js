// // -----------Hàm xử lý json-----------
// const fs = require("fs");
// const FILE_PATH = "listTeam.json";

// // Hàm tải dữ liệu từ tệp JSON khi khởi động
// function loadData() {
//     if (fs.existsSync(FILE_PATH)) {
//         const data = fs.readFileSync(FILE_PATH, "utf8");

//         // thêm điều kiện check file tồn tại - rỗng
//         if (data.trim() === "") {
//             listSV = [];
//         } else {
//             listSV = JSON.parse(data);
//         }
//     }
// }

// Hàm lưu danh sách sinh viên vào tệp JSON
// function saveData() {
//     fs.writeFileSync(FILE_PATH, JSON.stringify(listSV, null, 4), "utf8");
// }


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

let nCL = 1;
let nNC = 5;
let nDB = 5;
let nNM = 29;

// tạo obj chủ lực
let objTemplateCL = { id: 0, name: "Chủ lực", type: "Chủ lực" };
let objArrCL = createArr(nCL, objTemplateCL);

// tạo obj nòng cốt
let objTemplateNC = { id: 0, name: "Nòng cốt", type: "Nòng cốt" };
let objArrNC = createArr(nNC, objTemplateNC);

// tạo obj dự bị
let objTemplateDB = { id: 0, name: "Dự bị", type: "Dự bị" };
let objArrDB = createArr(nDB, objTemplateDB);

// tạo obj normal
let objTemplateNM = { id: 0, name: "Người thường", type: "Người thường" };
let objArrNM = createArr(nDB, objTemplateNM);

console.log(objArrCL);
console.log(objArrNC);
console.log(objArrDB);
//console.log(objArrNM);


// duyệt qua 3 mảng chứa 3 đối tượng CL, NC, DB. lấy ra bắt buộc CL:1 - NC: 1-2 - IF NC:1 + DB:1 - IF NC:2 - DB: 0
// tạo hàm duyệt qua 3 mảng obj, lọc ra các đièu kiện
function selectTeam(objArrCL, objArrNC, objArrDB) {
    let arrTeam = [];

    // để tiện mở rộng dùng function duyệt luôn thằng objArrCL, đk luôn có 1 thằng này
    for (let cl of objArrCL) {
        for (let i = 0; i < objArrNC.length; i++) {
            // lấy vị trí j=i+1 tránh lắp thằng đã có
            for (let j = i + 1; j <= objArrNC.length && j - i <= 2; j++) {
                let selectNC = objArrNC.slice(i, j);

                if (selectNC.length === 1) {
                    for (let db of objArrDB) {
                        arrTeam.push(`[${cl.type} Name: ${cl.name}, ${selectNC.type} Name: ${selectNC.name}, ${db.type} Name: ${db.name}]`);
                    }
                } else {
                    //arrTeam.push(`${cl.type}, ${selectNC.type.join(", ")}`);
                    console.log("bug1");
                }
            }
        }
    }
    return arrTeam;
}


console.log("Đội hình xác định: " + selectTeam(objArrCL, objArrNC, objArrDB));