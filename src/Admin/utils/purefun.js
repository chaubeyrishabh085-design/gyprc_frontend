import * as XLSX from 'xlsx';


export const startformatDate=()=> {
    let currentDate = new Date()
    let year = currentDate.getFullYear()
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
    const formattedDate = `${year}-${month.toString().padStart(2, "0")}-01`;
    return formattedDate;
}
export const lstformatDate=()=> {
    let currentDate = new Date()
    let year = currentDate.getFullYear()
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
    const monthEnd = new Date(year, month, 0);
    let year1 = monthEnd.getFullYear()
    const month1 = String(monthEnd.getMonth() + 1).padStart(2, '0');
    const day1 = String(monthEnd.getDate()).padStart(2, '0');
    const formattedDate = `${year1}-${month1}-${day1}`;
    return formattedDate;
};

export const currentDate=(dateOBJ)=> {
    const date = dateOBJ;
    // Extracting date components
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
  
    // Constructing the formatted date string
    const formattedDate = `${year}-${month}-${day}`;
  
    return formattedDate;
};

export const readExcelFile=(file)=> {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      
      fileReader.onload = (event) => {
        try {
          const data = new Uint8Array(event.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const excelData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
          resolve(excelData);
        } catch (error) {
          reject(error);
        }
      };
      
      fileReader.onerror = (error) => {
        reject(error);
      };
      
      fileReader.readAsArrayBuffer(file);
    });
  }
  