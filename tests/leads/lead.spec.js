// import {test} from "@playwright/test"

// test("create lead", async({page})=>{
//      // login into application
//     await page.goto("http://49.249.29.4:8888/")
//      await page.locator('[name="user_name"]').fill("admin")
//     await page.locator('[name="user_password"]').fill('admin')
//     await page.locator('#submitButton').click()
//     // ->click on Leads link
//     await page.locator("//a[text()='Leads']").click()
    
//     //->click on create lead lookup image
//     await page.getByAltText('Create Lead...').click()

//     //->Enter FirstName,LastName and companyName

//     let First_name="Bharathi"
//     let Last_name="Mukthapuram"
//     let companyName="Google"
//     await page.locator('[name="salutationtype"]').selectOption('Ms.')
//     await page.locator('[name="firstname"]').fill(First_name)
//     await page.locator('[name="lastname"]').fill(Last_name)
//     await page.locator('[name="company"]').fill(companyName)

//     // ->click on save Btn
//     await page.locator('(//input[@value="  Save  "])[2]').click()

//     //->verify whether the Lead is created with LastName and CompanyName in Lead Information page

//     let fn =await page.locator('[id="dtlview_First Name"]').textContent()
//     let ln=await page.locator('[id="dtlview_Last Name"]').textContent()
//     let company=await page.locator('[id="dtlview_Company"]').textContent()

//     if(Last_name==ln && First_name==fn && company==companyName){
//         console.log("lead created successfully")
//     }
//     else{
//         console.log("lead is not created")
//     }

//     //  Logout from the application.
//     await page.locator('[src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText('Sign Out').click()    
//     await page.waitForTimeout(2000)
// })



// //& DDT with JSON for login

// import {test} from "@playwright/test"
// import loginData from "../../Data/login.json"


// let url =loginData.url
// let un =loginData.userName
// let pw=loginData.password

// test("create lead", async({page})=>{
//      // login into application
//     await page.goto(url)
//      await page.locator('[name="user_name"]').fill(un)
//     await page.locator('[name="user_password"]').fill(pw)
//     await page.locator('#submitButton').click()

    


//     // ->click on Leads link
//     await page.locator("//a[text()='Leads']").click()
    
//     //->click on create lead lookup image
//     await page.getByAltText('Create Lead...').click()

//     //->Enter FirstName,LastName and companyName

//     let First_name="Bharathi"
//     let Last_name="Mukthapuram"
//     let companyName="Google"
//     let salutationtype='Ms.'
//     await page.locator('[name="salutationtype"]').selectOption(salutationtype)
//     await page.locator('[name="firstname"]').fill(First_name)
//     await page.locator('[name="lastname"]').fill(Last_name)
//     await page.locator('[name="company"]').fill(companyName)

//     // ->click on save Btn
//     await page.locator('(//input[@value="  Save  "])[2]').click()

//     //->verify whether the Lead is created with LastName and CompanyName in Lead Information page

//     let fn =await page.locator('[id="dtlview_First Name"]').textContent()
//     let ln=await page.locator('[id="dtlview_Last Name"]').textContent()
//     let company=await page.locator('[id="dtlview_Company"]').textContent()

//     if(Last_name==ln && First_name==fn && company==companyName){
//         console.log("lead created successfully")
//     }
//     else{
//         console.log("lead is not created")
//     }

//     //  Logout from the application.
//     await page.locator('[src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText('Sign Out').click()    
//     await page.waitForTimeout(2000)
// })


// //& DDT with Excel

// import {test} from "@playwright/test"
// import loginData from "../../Data/login.json"
// import XLSX from 'xlsx'
// import path from "node:path"

// let url =loginData.url
// let un =loginData.userName
// let pw=loginData.password

// let file_path=path.resolve(__dirname,'../','../','Data','testData.xlsx')


// test("create lead", async({page})=>{
//      // login into application
//     await page.goto(url)
//      await page.locator('[name="user_name"]').fill(un)
//     await page.locator('[name="user_password"]').fill(pw)
//     await page.locator('#submitButton').click()

//     let workbook = XLSX.readFile(file_path)
//     let sheet=workbook.Sheets[workbook.SheetNames[2]]
//     let data=XLSX.utils.sheet_to_json(sheet,{header:1})

    

//     for(let row of data){
//     let First_name=row[0]
//     let Last_name=row[1]
//     let companyName=row[2]
//     let salutationtype=row[3]
//     console.log("ROW DATA:", row);
//     console.log(First_name,Last_name,companyName,salutationtype)
    
 
//     // ->click on Leads link
//     // await page.locator("//a[text()='Leads']").click()
//     await page.getByRole('link', { name: 'Leads' }).first().click();

    
//     //->click on create lead lookup image
//     await page.getByAltText('Create Lead...').click()

//     //->Enter FirstName,LastName and companyName

    
//     await page.locator('[name="salutationtype"]').selectOption(salutationtype)
//     await page.locator('[name="firstname"]').fill(First_name)
//     await page.locator('[name="lastname"]').fill(Last_name)
//     await page.locator('[name="company"]').fill(companyName)

//     // ->click on save Btn
//     await page.locator('(//input[@value="  Save  "])[2]').click()

//     //->verify whether the Lead is created with LastName and CompanyName in Lead Information page

//     let fn =await page.locator('[id="dtlview_First Name"]').textContent()
//     let ln=await page.locator('[id="dtlview_Last Name"]').textContent()
//     let company=await page.locator('[id="dtlview_Company"]').textContent()

//     if(Last_name==ln && First_name==fn && company==companyName){
//         console.log(`${First_name} lead is created successfully`)
//     }
//     else{
//         console.log("lead is not created")
//     }
// }

//     //  Logout from the application.
//     await page.locator('[src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText('Sign Out').click()    
//     await page.waitForTimeout(2000)
// })


// //& Json utility

// import {test} from "@playwright/test"
// // import loginData from "../../Data/login.json"    
// import Json from "../../GenericUtilities/jsonUtility"
// import XLSX from 'xlsx'
// import path from "node:path"


// let file_path=path.resolve(__dirname,'../','../','Data','testData.xlsx')


// test("create lead", async({page})=>{

//     let json= await new Json().getDataFromJson()
//     let url =json.url
//     let un =json.userName
//     let pw=json.password
//      // login into application
//     await page.goto(url)
//      await page.locator('[name="user_name"]').fill(un)
//     await page.locator('[name="user_password"]').fill(pw)
//     await page.locator('#submitButton').click()

//     let workbook = XLSX.readFile(file_path)
//     let sheet=workbook.Sheets[workbook.SheetNames[2]]
//     let data=XLSX.utils.sheet_to_json(sheet,{header:1})

    

//     for(let row of data){
//     let First_name=row[0]
//     let Last_name=row[1]
//     let companyName=row[2]
//     let salutationtype=row[3]
//     console.log("ROW DATA:", row);
//     console.log(First_name,Last_name,companyName,salutationtype)
    
 
//     // ->click on Leads link
//     // await page.locator("//a[text()='Leads']").click()
//     await page.getByRole('link', { name: 'Leads' }).first().click();

    
//     //->click on create lead lookup image
//     await page.getByAltText('Create Lead...').click()

//     //->Enter FirstName,LastName and companyName

    
//     await page.locator('[name="salutationtype"]').selectOption(salutationtype)
//     await page.locator('[name="firstname"]').fill(First_name)
//     await page.locator('[name="lastname"]').fill(Last_name)
//     await page.locator('[name="company"]').fill(companyName)

//     // ->click on save Btn
//     await page.locator('(//input[@value="  Save  "])[2]').click()

//     //->verify whether the Lead is created with LastName and CompanyName in Lead Information page

//     let fn =await page.locator('[id="dtlview_First Name"]').textContent()
//     let ln=await page.locator('[id="dtlview_Last Name"]').textContent()
//     let company=await page.locator('[id="dtlview_Company"]').textContent()

//     if(Last_name==ln && First_name==fn && company==companyName){
//         console.log(`${First_name} lead is created successfully`)
//     }
//     else{
//         console.log("lead is not created")
//     }
// }

//     //  Logout from the application.
//     await page.locator('[src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText('Sign Out').click()    
//     await page.waitForTimeout(2000)
// })




// //& Excel utility

// import {test} from "@playwright/test"
// // import loginData from "../../Data/login.json"    
// import Json from "../../GenericUtilities/jsonUtility"
// import getData from "../../GenericUtilities/ExcelUtility"
// import XLSX from 'xlsx'
// import path from "node:path"


// let file_path=path.resolve(__dirname,'../','../','Data','testData.xlsx')


// test("create lead", async({page})=>{

//     let json= await new Json().getDataFromJson()
//     let url =json.url
//     let un =json.userName
//     let pw=json.password
//      // login into application

// await page.goto(url)
//      await page.locator('[name="user_name"]').fill(un)
//     await page.locator('[name="user_password"]').fill(pw)
//     await page.locator('#submitButton').click()

//     //^ excel Utility
//     const excel = new getData();
//     let data = await excel.getDataFromExcel(2);

    

//     for(let row of data){
//     let First_name=row[0]
//     let Last_name=row[1]
//     let companyName=row[2]
//     let salutationtype=row[3]
//     console.log("ROW DATA:", row);
//     console.log(First_name,Last_name,companyName,salutationtype)
    
 
//     // ->click on Leads link
//     // await page.locator("//a[text()='Leads']").click()
//     await page.getByRole('link', { name: 'Leads' }).first().click();

    
//     //->click on create lead lookup image
//     await page.getByAltText('Create Lead...').click()

//     //->Enter FirstName,LastName and companyName

    
//     await page.locator('[name="salutationtype"]').selectOption(salutationtype)
//     await page.locator('[name="firstname"]').fill(First_name)
//     await page.locator('[name="lastname"]').fill(Last_name)
//     await page.locator('[name="company"]').fill(companyName)

//     // ->click on save Btn
//     await page.locator('(//input[@value="  Save  "])[2]').click()

//     //->verify whether the Lead is created with LastName and CompanyName in Lead Information page

//     let fn =await page.locator('[id="dtlview_First Name"]').textContent()
//     let ln=await page.locator('[id="dtlview_Last Name"]').textContent()
//     let company=await page.locator('[id="dtlview_Company"]').textContent()

//     if(Last_name==ln && First_name==fn && company==companyName){
//         console.log(`${First_name} lead is created successfully`)
//     }
//     else{
//         console.log("lead is not created")
//     }
// }

//     //  Logout from the application.
//     await page.locator('[src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText('Sign Out').click()    
//     await page.waitForTimeout(2000)
// })


// //& POM
// import {test} from "@playwright/test"
// // import loginData from "../../Data/login.json"    
// import Json from "../../GenericUtilities/jsonUtility"
// import getData from "../../GenericUtilities/ExcelUtility"
// import login from "../../pages/loginPage"
// import home from "../../pages/homePage"
// import XLSX from 'xlsx'
// import path from "node:path"
// import leads from "../../pages/leadModule/leadPage"
// import createleads from "../../pages/leadModule/createLeadPage"
// import leadInformation from "../../pages/leadModule/leadInformationPage"

// let file_path=path.resolve(__dirname,'../','../','Data','testData.xlsx')


// test("create lead", async({page})=>{

//     let json= await new Json().getDataFromJson()
//     let url =json.url
//     let un =json.userName
//     let pw=json.password
//      // login into application
//     //! login POM
//     let loginPage= new login(page)
//     await loginPage.gotoLoginpage(url)
//     await loginPage.Login(un,pw)

//     //^ excel Utility
//     const excel = new getData();
//     let data = await excel.getDataFromExcel(2);

//     let homePage= new home(page)

    

//     for(let row of data){
//     let First_name=row[0]
//     let Last_name=row[1]
//     let companyName=row[2]
//     let salutationtype=row[3]
//     console.log("ROW DATA:", row);
//     console.log(First_name,Last_name,companyName,salutationtype)
    
 
//     // ->click on Leads link
//     // await page.locator("//a[text()='Leads']").click()
//     // await page.getByRole('link', { name: 'Leads' }).first().click();
//     await homePage.gotoLeads()

    
//     //->click on create lead lookup image
//     // await page.locator('[src="themes/softed/images/btnL3Add.gif"]').click()


//     let lead =new leads(page)
//     await lead.clickLookUp()
//     //->Enter FirstName,LastName and companyName

    
//     // await page.locator('[name="salutationtype"]').selectOption(salutationtype)
//     // await page.locator('[name="firstname"]').fill(First_name)
//     // await page.locator('[name="lastname"]').fill(Last_name)
//     // await page.locator('[name="company"]').fill(companyName)

//     // // ->click on save Btn
//     // await page.locator('(//input[@value="  Save  "])[2]').click()

//     let createLead=new createleads(page)
//     await createLead.createlead(salutationtype,First_name,Last_name,companyName)

//     //->verify whether the Lead is created with LastName and CompanyName in Lead Information page

//    let leadInfo= new leadInformation(page)
//    await leadInfo.validation(First_name,Last_name,companyName)

    
//     await page.goBack()
// }

//     //  Logout from the application.
//     // await page.locator('[src="themes/softed/images/user.PNG"]').hover()
//     // await page.getByText('Sign Out').click()  
    
//     await homePage.Logout()

//     await page.waitForTimeout(2000)
// })

//& POM
import {test} from "@playwright/test"
// import loginData from "../../Data/login.json"    
import Json from "../../GenericUtilities/jsonUtility"
import getData from "../../GenericUtilities/ExcelUtility"
import login from "../../pages/loginPage"
import home from "../../pages/homePage"
import XLSX from 'xlsx'
import path from "node:path"
import leads from "../../pages/leadModule/leadPage"
import createleads from "../../pages/leadModule/createLeadPage"
import leadInformation from "../../pages/leadModule/leadInformationPage"

let file_path=path.resolve(__dirname,'../','../','Data','testData.xlsx')


test("create lead", async({page})=>{
    let json= await new Json().getDataFromJson()
    let url =json.url
    let un =json.userName
    let pw=json.password
     // login into application
    //! login POM
    let loginPage= new login(page)
    await loginPage.gotoLoginpage(url)
    await loginPage.Login(un,pw)
    //^ excel Utility
    const excel = new getData();
    let data = await excel.getDataFromExcel(2);
    let homePage= new home(page)
    for(let row of data){
    let First_name=row[0]
    let Last_name=row[1]
    let companyName=row[2]
    let salutationtype=row[3]
    console.log("ROW DATA:", row);
    console.log(First_name,Last_name,companyName,salutationtype)
    await homePage.gotoLeads()
    let lead =new leads(page)
    await lead.clickLookUp()
    let createLead=new createleads(page)
    await createLead.createlead(salutationtype,First_name,Last_name,companyName)
   let leadInfo= new leadInformation(page)
   await leadInfo.validation(First_name,Last_name,companyName)

    
    await page.goBack()
}
    await homePage.Logout()

    await page.waitForTimeout(2000)
})