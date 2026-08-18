// import {test} from "@playwright/test"

// test("create organization", async({page})=>{
//     // login into application
//     await page.goto("http://49.249.29.4:8888/")
//     await page.locator('[name="user_name"]').fill("admin")
//     await page.locator('[name="user_password"]').fill('admin')
//     await page.locator('#submitButton').click()

//     // click on organizations link
//     await page.getByText('Organizations').click()

//     // click on create organization lookup image
//     await page.locator('[alt="Create Organization..."]').click()

//     // Enter organisation name
//     let org= "Vtiger"+Math.floor(Math.random()*1000)
//     await page.locator('[name="accountname"]').fill(org)

//     // ->click on save Btn
//     await page.locator('(//input[@value="  Save  "])[2]').click()

//     // ->verify whether the organization is created in Organization Information page
//     let orgname=await page.locator('[id="dtlview_Organization Name"]').textContent()
//     if(org==orgname){
//         console.log("organization created successfully")
//     }
//     else{
//         console.log("organization is not created")
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


// test("create organization", async({page})=>{
//     // login into application
//     await page.goto(url)
//     await page.locator('[name="user_name"]').fill(un)
//     await page.locator('[name="user_password"]').fill(pw)
//     await page.locator('#submitButton').click()

//     // click on organizations link
//     await page.getByText('Organizations').click()

//     // click on create organization lookup image
//     await page.locator('[alt="Create Organization..."]').click()

//     // Enter organisation name
//     let org= "Vtiger"+Math.floor(Math.random()*1000)
//     await page.locator('[name="accountname"]').fill(org)

//     // ->click on save Btn
//     await page.locator('(//input[@value="  Save  "])[2]').click()

//     // ->verify whether the organization is created in Organization Information page
//     let orgname=await page.locator('[id="dtlview_Organization Name"]').textContent()
//     if(org==orgname){
//         console.log("organization created successfully")
//     }
//     else{
//         console.log("organization is not created")
//     }


//     //  Logout from the application.
//     await page.locator('[src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText('Sign Out').click()
//     await page.waitForTimeout(2000)
// })


// //& DDT with Excel

// import {test} from "@playwright/test"
// import loginData from "../../Data/login.json"
// import XLSX from "xlsx"
// import path from "node:path"

// let url =loginData.url
// let un =loginData.userName
// let pw=loginData.password


// let file_path = path.resolve(__dirname, '../','../','Data',"testData.xlsx")

// test("create organization", async({page})=>{
//     // login into application
//     await page.goto(url)
//     await page.locator('[name="user_name"]').fill(un)
//     await page.locator('[name="user_password"]').fill(pw)
//     await page.locator('#submitButton').click()


//     let workbook= XLSX.readFile(file_path)
//     let sheet=workbook.Sheets[workbook.SheetNames[3]]
//     let data = XLSX.utils.sheet_to_json(sheet,{header:1})

//     for(let row of data){
//         let org= row[0]+Math.floor(Math.random()*1000)

//     // click on organizations link
//     // await page.getByText('Organizations').click()
//     await page.getByRole('link', { name: 'Organizations' }).first().click();

//     // click on create organization lookup image
//     await page.locator('[alt="Create Organization..."]').click()

//     // Enter organisation name
    
//     await page.locator('[name="accountname"]').fill(org)

//     // ->click on save Btn
//     await page.locator('(//input[@value="  Save  "])[2]').click()

//     // ->verify whether the organization is created in Organization Information page
//     let orgname=await page.locator('[id="dtlview_Organization Name"]').textContent()
//     if(org==orgname){
//         console.log("organization created successfully")
//     }
//     else{
//         console.log("organization is not created")
//     }

//     }
//     //  Logout from the application.
//     await page.locator('[src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText('Sign Out').click()
//     await page.waitForTimeout(2000)
// })


// //& Json Utility

// import {test} from "@playwright/test"
// // import loginData from "../../Data/login.json"
// import Json from "../../GenericUtilities/jsonUtility"   
// import XLSX from "xlsx"
// import path from "node:path"




// let file_path = path.resolve(__dirname, '../','../','Data',"testData.xlsx")

// test("create organization", async({page})=>{

//     let json= await new Json().getDataFromJson()
//     let url =json.url
//     let un =json.userName
//     let pw=json.password
//     // login into application
//     await page.goto(url)
//     await page.locator('[name="user_name"]').fill(un)
//     await page.locator('[name="user_password"]').fill(pw)
//     await page.locator('#submitButton').click()


//     let workbook= XLSX.readFile(file_path)
//     let sheet=workbook.Sheets[workbook.SheetNames[3]]
//     let data = XLSX.utils.sheet_to_json(sheet,{header:1})

//     for(let row of data){
//         let org= row[0]+Math.floor(Math.random()*1000)

//     // click on organizations link
//     // await page.getByText('Organizations').click()
//     await page.getByRole('link', { name: 'Organizations' }).first().click();

//     // click on create organization lookup image
//     await page.locator('[alt="Create Organization..."]').click()

//     // Enter organisation name
    
//     await page.locator('[name="accountname"]').fill(org)

//     // ->click on save Btn
//     await page.locator('(//input[@value="  Save  "])[2]').click()

//     // ->verify whether the organization is created in Organization Information page
//     let orgname=await page.locator('[id="dtlview_Organization Name"]').textContent()
//     if(org==orgname){
//         console.log("organization created successfully")
//     }
//     else{
//         console.log("organization is not created")
//     }

//     }
//     //  Logout from the application.
//     await page.locator('[src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText('Sign Out').click()
//     await page.waitForTimeout(2000)
// })

// //& Excel Utility

// import {test} from "@playwright/test"
// // import loginData from "../../Data/login.json"
// import Json from "../../GenericUtilities/jsonUtility"  
// import getData from "../../GenericUtilities/ExcelUtility" 
// import XLSX from "xlsx"
// import path from "node:path"




// let file_path = path.resolve(__dirname, '../','../','Data',"testData.xlsx")

// test("create organization", async({page})=>{

//     let json= await new Json().getDataFromJson()
//     let url =json.url
//     let un =json.userName
//     let pw=json.password
//     // login into application
//     await page.goto(url)
//     await page.locator('[name="user_name"]').fill(un)
//     await page.locator('[name="user_password"]').fill(pw)
//     await page.locator('#submitButton').click()


//     const excel = new getData();
//     let data = await excel.getDataFromExcel(3);

//     for(let row of data){
//         let org= row[0]+Math.floor(Math.random()*1000)

//     // click on organizations link
//     // await page.getByText('Organizations').click()
//     await page.getByRole('link', { name: 'Organizations' }).first().click();

//     // click on create organization lookup image
//     await page.locator('[alt="Create Organization..."]').click()

//     // Enter organisation name
    
//     await page.locator('[name="accountname"]').fill(org)

//     // ->click on save Btn
//     await page.locator('(//input[@value="  Save  "])[2]').click()

//     // ->verify whether the organization is created in Organization Information page
//     let orgname=await page.locator('[id="dtlview_Organization Name"]').textContent()
//     if(org==orgname){
//         console.log("organization created successfully")
//     }
//     else{
//         console.log("organization is not created")
//     }

//     }
//     //  Logout from the application.
//     await page.locator('[src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText('Sign Out').click()
//     await page.waitForTimeout(2000)
// })



//& Excel Utility

import {test} from "@playwright/test"
// import loginData from "../../Data/login.json"
import Json from "../../GenericUtilities/jsonUtility"  
import getData from "../../GenericUtilities/ExcelUtility" 
import login from "../../pages/loginPage"
import XLSX from "xlsx"
import path from "node:path"
import home from "../../pages/homePage"
import organizations from "../../pages/organizationsModule/organizationsPage"
import createorganizations from "../../pages/organizationsModule/createOrganizationsPage"




let file_path = path.resolve(__dirname, '../','../','Data',"testData.xlsx")

test("create organization", async({page})=>{

    let json= await new Json().getDataFromJson()
    let url =json.url
    let un =json.userName
    let pw=json.password
    // login into application
     //! login POM
        let loginPage= new login(page)
        await loginPage.gotoLoginpage(url)
        await loginPage.Login(un,pw)

    const excel = new getData();
    let data = await excel.getDataFromExcel(3);

    let homePage=new home(page)


    for(let row of data){
        let org= row[0]+Math.floor(Math.random()*1000)

    // click on organizations link
    // await page.getByText('Organizations').click()
    // await page.getByRole('link', { name: 'Organizations' }).first().click();
    //^ home page
    await homePage.gotoOrganizations()

    // click on create organization lookup image
    // await page.locator('[src="themes/softed/images/btnL3Add.gif"]').click()

    let organization= new organizations(page)
    await organization.clickLookUp()

    // Enter organisation name
    
    // await page.locator('[name="accountname"]').fill(org)

    // // ->click on save Btn
    // await page.locator('(//input[@value="  Save  "])[2]').click()
    let createOrg= new createorganizations(page)
    await createOrg.createorganization(org)

    // ->verify whether the organization is created in Organization Information page
    let orgname=await page.locator('[id="dtlview_Organization Name"]').textContent()
    if(org==orgname){
        console.log("organization created successfully")
    }
    else{
        console.log("organization is not created")
    }

    }
    //  Logout from the application.
    // await page.locator('[src="themes/softed/images/user.PNG"]').hover()
    // await page.getByText('Sign Out').click()

    await homePage.Logout()

    await page.waitForTimeout(2000)
})