// import excel from "exceljs"
// import path from "node:path"

// class Excel{
//     async getDataFromExcel(sheetName,rowNum,cellNum){
//         let book =new excel.Workbook();
//         await book.xlsx.readFile(path.join(__dirname,"../TestData/Data.xlsx"))
//         let sheet =book.getWorksheet(sheetName)
//         let data=await sheet.getRow(rowNum).getCell(cellNum).toString();
//         return data;
//     }
// }

// export default Excel;


import XLSX from 'xlsx'
import path from 'node:path'

class excel{
    async getDataFromExcel(num){
        let file_path=path.resolve(__dirname, '../','Data','testData.xlsx')
        let workbook= XLSX.readFile(file_path)
        let sheet = workbook.Sheets[workbook.SheetNames[num]];
        const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        return data
    }
}

export default excel