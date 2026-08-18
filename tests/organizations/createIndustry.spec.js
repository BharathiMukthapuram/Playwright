// import {test} from "@playwright/test"

// test("create industry", async({page})=>{
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

//     // ->select industry from industry dropdown
//     let industry_name="Telecommunications"
//     await page.locator('[name="industry"]').selectOption(industry_name)

//     // ->select type from type dropdown

//     let type="Customer"
//     await page.locator('[name="accounttype"]').selectOption(type)

//     // ->click on save Btn
//     await page.locator('(//input[@value="  Save  "])[2]').click()

//     // ->verify whether the organization is created in Organization Information page
//     let orgname=await page.locator('[id="dtlview_Organization Name"]').textContent()
//     let industry=await page.locator('id="dtlview_Industry"').textContent()
//     let o_type=await page.locator('[id="dtlview_Type"]').textContent()
//     if(org==orgname && industry_name==industry && type==o_type){
//         console.log("industry created successfully")
//     }
//     else{
//         console.log("industry is not created")
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

// test("create industry", async({page})=>{
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

//     // ->select industry from industry dropdown
//     let industry_name="Telecommunications"
//     await page.locator('[name="industry"]').selectOption(industry_name)

//     // ->select type from type dropdown

//     let type="Customer"
//     await page.locator('[name="accounttype"]').selectOption(type)

//     // ->click on save Btn
//     await page.locator('(//input[@value="  Save  "])[2]').click()

//     // ->verify whether the organization is created in Organization Information page
//     let orgname=await page.locator('[id="dtlview_Organization Name"]').textContent()
//     let industry=await page.locator('[id="dtlview_Industry"]').textContent()
//     let o_type=await page.locator('[id="dtlview_Type"]').textContent()
//     if(org==orgname && industry_name==industry && type==o_type){
//         console.log("industry created successfully")
//     }
//     else{
//         console.log("industry is not created")
//     }


//     //  Logout from the application.
//     await page.locator('[src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText('Sign Out').click()
//     await page.waitForTimeout(2000)
// })


// //& DDT with excel

// import {test} from "@playwright/test"
// import loginData from "../../Data/login.json"
// import XLSX from 'xlsx'
// import path from 'node:path'

// let url =loginData.url
// let un =loginData.userName
// let pw=loginData.password

// let file_path = path.resolve(__dirname,'../','../','Data','testData.xlsx')

// test("create industry", async({page})=>{
//     // login into application
//     await page.goto(url)
//     await page.locator('[name="user_name"]').fill(un)
//     await page.locator('[name="user_password"]').fill(pw)
//     await page.locator('#submitButton').click()

//     let workbook=XLSX.readFile(file_path)
//     let sheet=workbook.Sheets[workbook.SheetNames[3]];
//     let data = XLSX.utils.sheet_to_json(sheet,{header:1})

//     for(let row of data){
//         let org= row[0]+Math.floor(Math.random()*1000)
//         let industry_name=row[1]
//         let type=row[2]

    
//     // click on organizations link
//     // await page.getByText('Organizations').click()
//     await page.getByRole('link', { name: 'Organizations' }).first().click();


//     // click on create organization lookup image
//     await page.locator('[alt="Create Organization..."]').click()

//     // Enter organisation name
   
//     await page.locator('[name="accountname"]').fill(org)

//     // ->select industry from industry dropdown
   
//     await page.locator('[name="industry"]').selectOption(industry_name)

//     // ->select type from type dropdown

   
//     await page.locator('[name="accounttype"]').selectOption(type)

//     // ->click on save Btn
//     await page.locator('(//input[@value="  Save  "])[2]').click()

//     // ->verify whether the organization is created in Organization Information page
//     let orgname=await page.locator('[id="dtlview_Organization Name"]').textContent()
//     let industry=await page.locator('[id="dtlview_Industry"]').textContent()
//     let o_type=await page.locator('[id="dtlview_Type"]').textContent()
//     if(org==orgname && industry_name==industry && type==o_type){
//         console.log(`${orgname} is created successfully`)
//     }
//     else{
//         console.log("industry is not created")
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
// import XLSX from 'xlsx'
// import path from 'node:path'



// let file_path = path.resolve(__dirname,'../','../','Data','testData.xlsx')

// test("create industry", async({page})=>{

//     let json= await new Json().getDataFromJson()
//     let url =json.url
//     let un =json.userName
//     let pw=json.password
//     // login into application
//     await page.goto(url)
//     await page.locator('[name="user_name"]').fill(un)
//     await page.locator('[name="user_password"]').fill(pw)
//     await page.locator('#submitButton').click()

//     let workbook=XLSX.readFile(file_path)
//     let sheet=workbook.Sheets[workbook.SheetNames[3]];
//     let data = XLSX.utils.sheet_to_json(sheet,{header:1})

//     for(let row of data){
//         let org= row[0]+Math.floor(Math.random()*1000)
//         let industry_name=row[1]
//         let type=row[2]

    
//     // click on organizations link
//     // await page.getByText('Organizations').click()
//     await page.getByRole('link', { name: 'Organizations' }).first().click();


//     // click on create organization lookup image
//     await page.locator('[alt="Create Organization..."]').click()

//     // Enter organisation name
   
//     await page.locator('[name="accountname"]').fill(org)

//     // ->select industry from industry dropdown
   
//     await page.locator('[name="industry"]').selectOption(industry_name)

//     // ->select type from type dropdown

   
//     await page.locator('[name="accounttype"]').selectOption(type)

//     // ->click on save Btn
//     await page.locator('(//input[@value="  Save  "])[2]').click()

//     // ->verify whether the organization is created in Organization Information page
//     let orgname=await page.locator('[id="dtlview_Organization Name"]').textContent()
//     let industry=await page.locator('[id="dtlview_Industry"]').textContent()
//     let o_type=await page.locator('[id="dtlview_Type"]').textContent()
//     if(org==orgname && industry_name==industry && type==o_type){
//         console.log(`${orgname} is created successfully`)
//     }
//     else{
//         console.log("industry is not created")
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
// import XLSX from 'xlsx'
// import path from 'node:path'



// let file_path = path.resolve(__dirname,'../','../','Data','testData.xlsx')

// test("create industry", async({page})=>{

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
//         let industry_name=row[1]
//         let type=row[2]

    
//     // click on organizations link
//     // await page.getByText('Organizations').click()
//     await page.getByRole('link', { name: 'Organizations' }).first().click();


//     // click on create organization lookup image
//     await page.locator('[alt="Create Organization..."]').click()

//     // Enter organisation name
   
//     await page.locator('[name="accountname"]').fill(org)

//     // ->select industry from industry dropdown
   
//     await page.locator('[name="industry"]').selectOption(industry_name)

//     // ->select type from type dropdown

   
//     await page.locator('[name="accounttype"]').selectOption(type)

//     // ->click on save Btn
//     await page.locator('(//input[@value="  Save  "])[2]').click()

//     // ->verify whether the organization is created in Organization Information page
//     let orgname=await page.locator('[id="dtlview_Organization Name"]').textContent()
//     let industry=await page.locator('[id="dtlview_Industry"]').textContent()
//     let o_type=await page.locator('[id="dtlview_Type"]').textContent()
//     if(org==orgname && industry_name==industry && type==o_type){
//         console.log(`${orgname} is created successfully`)
//     }
//     else{
//         console.log("industry is not created")
//     }
//     }

//     //  Logout from the application.
//     await page.locator('[src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText('Sign Out').click()
//     await page.waitForTimeout(2000)
// })


//& POM

import {test} from "@playwright/test"
// import loginData from "../../Data/login.json"
import Json from "../../GenericUtilities/jsonUtility"
import getData from "../../GenericUtilities/ExcelUtility"
import home from "../../pages/homePage"
import login from "../../pages/loginPage"
import XLSX from 'xlsx'
import path from 'node:path'



let file_path = path.resolve(__dirname,'../','../','Data','testData.xlsx')

test("create industry", async({page})=>{

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
        let industry_name=row[1]
        let type=row[2]

    
    // click on organizations link
    // await page.getByText('Organizations').click()
    // await page.getByRole('link', { name: 'Organizations' }).first().click();
    await homePage.gotoOrganizations()


    // click on create organization lookup image
    await page.locator('[src="themes/softed/images/btnL3Add.gif"]').click()

    // Enter organisation name
   
    await page.locator('[name="accountname"]').fill(org)

    // ->select industry from industry dropdown
   
    await page.locator('[name="industry"]').selectOption(industry_name)

    // ->select type from type dropdown

   
    await page.locator('[name="accounttype"]').selectOption(type)

    // ->click on save Btn
    await page.locator('(//input[@value="  Save  "])[2]').click()

    // ->verify whether the organization is created in Organization Information page
    let orgname=await page.locator('[id="dtlview_Organization Name"]').textContent()
    let industry=await page.locator('[id="dtlview_Industry"]').textContent()
    let o_type=await page.locator('[id="dtlview_Type"]').textContent()
    if(org==orgname && industry_name==industry && type==o_type){
        console.log(`${orgname} is created successfully`)
    }
    else{
        console.log("industry is not created")
    }
    }

    //  Logout from the application.
    // await page.locator('[src="themes/softed/images/user.PNG"]').hover()
    // await page.getByText('Sign Out').click()

    await homePage.Logout()

    await page.waitForTimeout(2000)
})