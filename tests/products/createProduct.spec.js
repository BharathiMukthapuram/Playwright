// import {test} from "@playwright/test"

// test("create Product", async({page})=>{
//     // login into application
//     await page.goto("http://49.249.29.4:8888/")
//      await page.locator('[name="user_name"]').fill("admin")
//     await page.locator('[name="user_password"]').fill('admin')
//     await page.locator('#submitButton').click()

//     // ->click on products link
//     await page.locator("//a[text()='Products']").click()
//     // ->click on create product lookup image
//     await page.getByAltText('Create Product...').click()

//     let product="mango"
//     // ->Enter product name
//     await page.locator('[name="productname"]').fill(product)

//     // ->click on save Btn
//     await page.locator('(//input[@value="  Save  "])[2]').click()

//     //->verify whether the product is created in product Information page
//     let prod=await page.locator('[id="dtlview_Product Name"]').textContent()

//     if(prod==product){
//         console.log("product created successfully")
//     }
//     else{
//         console.log("product is not created")
//     }

    
//      //  Logout from the application.
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

// test("create Product", async({page})=>{
//     // login into application
//     await page.goto(url)
//      await page.locator('[name="user_name"]').fill(un)
//     await page.locator('[name="user_password"]').fill(pw)
//     await page.locator('#submitButton').click()

//     // ->click on products link
//     await page.locator("//a[text()='Products']").click()
//     // ->click on create product lookup image
//     await page.getByAltText('Create Product...').click()

//     let product="mango"
//     // ->Enter product name
//     await page.locator('[name="productname"]').fill(product)

//     // ->click on save Btn
//     await page.locator('(//input[@value="  Save  "])[2]').click()

//     //->verify whether the product is created in product Information page
//     let prod=await page.locator('[id="dtlview_Product Name"]').textContent()

//     if(prod==product){
//         console.log("product created successfully")
//     }
//     else{
//         console.log("product is not created")
//     }

    
//      //  Logout from the application.
//     await page.locator('[src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText('Sign Out').click()    
//     await page.waitForTimeout(2000)
// })

// //& DDT with Excel

// import {test} from "@playwright/test"
// import loginData from "../../Data/login.json"
// import XLSX from "xlsx"
// import path from 'node:path'

// let url =loginData.url
// let un =loginData.userName
// let pw=loginData.password


// let file_path=path.resolve(__dirname,'../','../','Data','testData.xlsx')


// test("create Product", async({page})=>{
//     // login into application
//     await page.goto(url)
//      await page.locator('[name="user_name"]').fill(un)
//     await page.locator('[name="user_password"]').fill(pw)
//     await page.locator('#submitButton').click()

//     let workbook=XLSX.readFile(file_path)
//     let sheet = workbook.Sheets[workbook.SheetNames[4]]
//     let data= XLSX.utils.sheet_to_json(sheet,{header:1})
//     for(let row of data){
//         let product=row[0]
    
//     // ->click on products link
//     await page.locator("//a[text()='Products']").click()
//     // ->click on create product lookup image
//     await page.getByAltText('Create Product...').click()

    
//     // ->Enter product name
//     await page.locator('[name="productname"]').fill(product)

//     // ->click on save Btn
//     await page.locator('(//input[@value="  Save  "])[2]').click()

//     //->verify whether the product is created in product Information page
//     let prod=await page.locator('[id="dtlview_Product Name"]').textContent()

//     if(prod==product){
//         console.log(`${product} created successfull`)
//     }
//     else{
//         console.log("product is not created")
//     }
//     }
    
//      //  Logout from the application.
//     await page.locator('[src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText('Sign Out').click()    
//     await page.waitForTimeout(2000)
// })

// //& Json Utility

// import {test} from "@playwright/test"
// // import loginData from "../../Data/login.json"
// import Json from "../../GenericUtilities/jsonUtility"
// import XLSX from "xlsx"
// import path from 'node:path'




// let file_path=path.resolve(__dirname,'../','../','Data','testData.xlsx')


// test("create Product", async({page})=>{

//     let json= await new Json().getDataFromJson()
//     let url =json.url
//     let un =json.userName
//     let pw=json.password

//     // login into application
//     await page.goto(url)
//      await page.locator('[name="user_name"]').fill(un)
//     await page.locator('[name="user_password"]').fill(pw)
//     await page.locator('#submitButton').click()

//     let workbook=XLSX.readFile(file_path)
//     let sheet = workbook.Sheets[workbook.SheetNames[4]]
//     let data= XLSX.utils.sheet_to_json(sheet,{header:1})
//     for(let row of data){
//         let product=row[0]
    
//     // ->click on products link
//     await page.locator("//a[text()='Products']").click()
//     // ->click on create product lookup image
//     await page.getByAltText('Create Product...').click()

    
//     // ->Enter product name
//     await page.locator('[name="productname"]').fill(product)

//     // ->click on save Btn
//     await page.locator('(//input[@value="  Save  "])[2]').click()

//     //->verify whether the product is created in product Information page
//     let prod=await page.locator('[id="dtlview_Product Name"]').textContent()

//     if(prod==product){
//         console.log(`${product} created successfull`)
//     }
//     else{
//         console.log("product is not created")
//     }
//     }
    
//      //  Logout from the application.
//     await page.locator('[src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText('Sign Out').click()    
//     await page.waitForTimeout(2000)
// })


// //& Excel Utility

// import {test} from "@playwright/test"
// // import loginData from "../../Data/login.json"
// import Json from "../../GenericUtilities/jsonUtility"
// import getData  from "../../GenericUtilities/ExcelUtility"
// import XLSX from "xlsx"
// import path from 'node:path'




// let file_path=path.resolve(__dirname,'../','../','Data','testData.xlsx')


// test("create Product", async({page})=>{

//     let json= await new Json().getDataFromJson()
//     let url =json.url
//     let un =json.userName
//     let pw=json.password

//     // login into application
//     await page.goto(url)
//      await page.locator('[name="user_name"]').fill(un)
//     await page.locator('[name="user_password"]').fill(pw)
//     await page.locator('#submitButton').click()

//     const excel = new getData();
//     let data = await excel.getDataFromExcel(2);

//     for(let row of data){
//         let product=row[0]
    
//     // ->click on products link
//     await page.locator("(//a[text()='Products'])[1]").click()
//     // await page.getByText('Products').click()
//     // ->click on create product lookup image
//     await page.getByAltText('Create Product...').click()

    
//     // ->Enter product name
//     await page.locator('[name="productname"]').fill(product)

//     // ->click on save Btn
//     await page.locator('(//input[@value="  Save  "])[2]').click()

//     //->verify whether the product is created in product Information page
//     let prod=await page.locator('[id="dtlview_Product Name"]').textContent()

//     if(prod==product){
//         console.log(`${product} created successfull`)
//     }
//     else{
//         console.log("product is not created")
//     }
//     }
    
//      //  Logout from the application.
//     await page.locator('[src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText('Sign Out').click()    
//     await page.waitForTimeout(2000)
// })

//& POM

import {test} from "@playwright/test"
// import loginData from "../../Data/login.json"
import Json from "../../GenericUtilities/jsonUtility"
import getData  from "../../GenericUtilities/ExcelUtility"
import login from "../../pages/loginPage"
import home from "../../pages/homePage"
import XLSX from "xlsx"
import path from 'node:path'




let file_path=path.resolve(__dirname,'../','../','Data','testData.xlsx')


test("create Product", async({page})=>{

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
    let data = await excel.getDataFromExcel(4);

    let homePage = new home(page)

    for(let row of data){
        let product=row[0]
    
    // ->click on products link
    // await page.locator("(//a[text()='Products'])[1]").click()
    // await page.getByRole('link', { name: 'Products' }).first().click();
    
    await homePage.gotoProducts()

    
    // await page.getByText('Products').click()
    // ->click on create product lookup image
    await page.locator('[src="themes/softed/images/btnL3Add.gif"]').click()

    
    // ->Enter product name
    await page.locator('[name="productname"]').fill(product)

    // ->click on save Btn
    await page.locator('(//input[@value="  Save  "])[2]').click()

    //->verify whether the product is created in product Information page
    let prod=await page.locator('[id="dtlview_Product Name"]').textContent()

    if(prod==product){
        console.log(`${product} created successfull`)
    }
    else{
        console.log("product is not created")
    }
    }
    
     //  Logout from the application.
    // await page.locator('[src="themes/softed/images/user.PNG"]').hover()
    // await page.getByText('Sign Out').click()
    
    await homePage.Logout()
    
    await page.waitForTimeout(2000)
})