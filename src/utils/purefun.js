export const startformatDate=(dateOBJ)=> {
    const date = dateOBJ;
  
    // Extracting date components
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
  
    // Constructing the formatted date string
    const formattedDate = `${year}-${month}-01`;
  
    return formattedDate;
}
export const lstformatDate=(dateOBJ)=> {
    const date = dateOBJ;
  
    // Extracting date components
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
  
    // Constructing the formatted date string
    const formattedDate = `${year}-${month}-31`;
  
    return formattedDate;
};
export const getCurrentDate=()=>{
    const currentDate = new Date();
    const year = currentDate.getUTCFullYear();
    const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getUTCDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }