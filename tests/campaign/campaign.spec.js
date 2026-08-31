// import {test} from "@playwright/test"

// test("create campaign", async({page})=>{
//      // login into application
//     await page.goto("http://49.249.29.4:8888/")
//      await page.locator('[name="user_name"]').fill("admin")
//     await page.locator('[name="user_password"]').fill('admin')
//     await page.locator('#submitButton').click()

//     // ->mouseOverOn more Link
//     await page.locator('//a[text()="More"]').hover()

//     // ->click on campaigns
//     await page.locator('[name="Campaigns"]').click()

//     // ->click on create campaign lookup image
//     await page.locator('[alt="Create Campaign..."]').click()

//     // ->Enter campaignName
//     let campaignname="campaign1"
//     await page.locator('[name="campaignname"]').fill(campaignname)

//     // ->click on save Btn
//     await page.locator('(//input[@value="  Save  "])[2]').click()
    
//     let camp=await page.locator('[id="dtlview_Campaign Name"]').textContent()
//     if(camp==campaignname){
//         console.log("campaign created successfully")
//     }
//     else{
//         console.log("campaign is not created")
//     }

//     //  Logout from the application.
//     await page.locator('[src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText('Sign Out').click()  

//     await page.waitForTimeout(2000)
// })


// //& DDT with JSON login

// import {test} from "@playwright/test"
// import loginData from "../../Data/login.json"

// let url =loginData.url
// let un =loginData.userName
// let pw=loginData.password

// test("create campaign", async({page})=>{
//      // login into application
//     await page.goto(url)
//      await page.locator('[name="user_name"]').fill(un)
//     await page.locator('[name="user_password"]').fill(pw)
//     await page.locator('#submitButton').click()

//     // ->mouseOverOn more Link
//     await page.locator('//a[text()="More"]').hover()

//     // ->click on campaigns
//     await page.locator('[name="Campaigns"]').click()

//     // ->click on create campaign lookup image
//     await page.locator('[alt="Create Campaign..."]').click()

//     // ->Enter campaignName
//     let campaignname="campaign1"
//     await page.locator('[name="campaignname"]').fill(campaignname)

//     // ->click on save Btn
//     await page.locator('(//input[@value="  Save  "])[2]').click()
    
//     let camp=await page.locator('[id="dtlview_Campaign Name"]').textContent()
//     if(camp==campaignname){
//         console.log("campaign created successfully")
//     }
//     else{
//         console.log("campaign is not created")
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


// let file_path=path.resolve(__dirname, '../','../', 'Data', 'testData.xlsx')

// test("create campaign", async({page})=>{
//      // login into application
//     await page.goto(url)
//     await page.locator('[name="user_name"]').fill(un)
//     await page.locator('[name="user_password"]').fill(pw)
//     await page.locator('#submitButton').click()

    // let workbook= XLSX.readFile(file_path)
    // let sheet = workbook.Sheets[workbook.SheetNames[0]];
    // const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

// for(let row of data){

//     let campaign_name=row[0]
//     // ->mouseOverOn more Link
//     await page.locator('//a[text()="More"]').hover()

//     // ->click on campaigns
//     await page.locator('[name="Campaigns"]').click()

//     // ->click on create campaign lookup image
//     await page.locator('[alt="Create Campaign..."]').click()

//     // ->Enter campaignName

//     await page.locator('[name="campaignname"]').fill(campaign_name)

//     // ->click on save Btn
//     await page.locator('(//input[@value="  Save  "])[2]').click()
    
//     let camp=await page.locator('[id="dtlview_Campaign Name"]').textContent()
//     if(camp==campaign_name){
//         console.log(`${campaign_name} is created successfully`)
//     }
//     else{
//         console.log("campaign is not created")
//     }
//     await page.waitForTimeout(2000)
//     await page.goBack()
// }

//     //  Logout from the application.
//     await page.locator('[src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText('Sign Out').click()  

//     await page.waitForTimeout(2000)
// })

// //&  JSON utility

// import {test} from "@playwright/test"
// // import loginData from "../../Data/login.json"
// import Json from "../../GenericUtilities/jsonUtility"
// import XLSX from 'xlsx'
// import path from "node:path"
// import { json } from "node:stream/consumers"




// let file_path=path.resolve(__dirname, '../','../', 'Data', 'testData.xlsx')

// test("create campaign", async({page})=>{

//     let json= await new Json().getDataFromJson()


//     let url =json.url
//     let un =json.userName
//     let pw=json.password
//      // login into application
//     await page.goto(url)
//     await page.locator('[name="user_name"]').fill(un)
//     await page.locator('[name="user_password"]').fill(pw)
//     await page.locator('#submitButton').click()

//     let workbook= XLSX.readFile(file_path)
//     let sheet = workbook.Sheets[workbook.SheetNames[0]];
//     const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

// for(let row of data){

//     let campaign_name=row[0]
//     // ->mouseOverOn more Link
//     await page.locator('//a[text()="More"]').hover()

//     // ->click on campaigns
//     await page.locator('[name="Campaigns"]').click()

//     // ->click on create campaign lookup image
//     await page.locator('[alt="Create Campaign..."]').click()

//     // ->Enter campaignName

//     await page.locator('[name="campaignname"]').fill(campaign_name)

//     // ->click on save Btn
//     await page.locator('(//input[@value="  Save  "])[2]').click()
    
//     let camp=await page.locator('[id="dtlview_Campaign Name"]').textContent()
//     if(camp==campaign_name){
//         console.log(`${campaign_name} is created successfully`)
//     }
//     else{
//         console.log("campaign is not created")
//     }
//     await page.waitForTimeout(2000)
//     await page.goBack()
// }

//     //  Logout from the application.
//     await page.locator('[src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText('Sign Out').click()  

//     await page.waitForTimeout(2000)
// })


// //&  Excel Utility

// import {test} from "@playwright/test"
// // import loginData from "../../Data/login.json"
// import Json from "../../GenericUtilities/jsonUtility"
// import XLSX from 'xlsx'
// import path from "node:path"
// import { json } from "node:stream/consumers"
// import LoginPage from "../../pages/loginPage.js"
// import getData from "../../GenericUtilities/ExcelUtility.js"


// test("create campaign", async({page})=>{

//     //> json utility
//     let json= await new Json().getDataFromJson()


//     let url =json.url
//     let un =json.userName
//     let pw=json.password
//      // login into application

//     await page.goto(url)
//     await page.locator('[name="user_name"]').fill(un)
//     await page.locator('[name="user_password"]').fill(pw)
//     await page.locator('#submitButton').click()
   
//     //^ excel utility
//     const excel = new getData();
//     let data = await excel.getDataFromExcel(0);
   
// for(let row of data){

//     let campaign_name=row[0]
//     // ->mouseOverOn more Link
//     await page.locator('//a[text()="More"]').hover()

//     // ->click on campaigns
//     await page.locator('[name="Campaigns"]').click()

//     // ->click on create campaign lookup image
//     await page.locator('[alt="Create Campaign..."]').click()

//     // ->Enter campaignName

//     await page.locator('[name="campaignname"]').fill(campaign_name)

//     // ->click on save Btn
//     await page.locator('(//input[@value="  Save  "])[2]').click()
    
//     let camp=await page.locator('[id="dtlview_Campaign Name"]').textContent()
//     if(camp==campaign_name){
//         console.log(`${campaign_name} is created successfully`)
//     }
//     else{
//         console.log("campaign is not created")
//     }
//     await page.waitForTimeout(2000)
//     await page.goBack()
// }

//     //  Logout from the application.
//     await page.locator('[src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText('Sign Out').click()  

//     await page.waitForTimeout(2000)
// })



// //&  POM

// import {test} from "@playwright/test"
// // import loginData from "../../Data/login.json"
// import Json from "../../GenericUtilities/jsonUtility"
// import XLSX from 'xlsx'
// import path from "node:path"
// import { json } from "node:stream/consumers"
// import getData from "../../GenericUtilities/ExcelUtility.js"
// import login from "../../pages/loginPage.js"
// import home from "../../pages/homePage.js"
// import campaignsPage from "../../pages/campaignModule/campaignsPage.js"
// import createCampaigns from "../../pages/campaignModule/createCampaignsPage.js"
// import campaignInformation from "../../pages/campaignModule/campaignInformationPage.js"

// test("create campaign", async({page})=>{

//     //> json utility
//     let json= await new Json().getDataFromJson()


//     let url =json.url
//     let un =json.userName
//     let pw=json.password
//      // login into application
//      //! login POM
//     let loginPage= new login(page)
//     await loginPage.gotoLoginpage(url)
//     await loginPage.Login(un,pw)

//     //^ excel utility
//     const excel = new getData();
//     let data = await excel.getDataFromExcel(0);
//     let homePage=new home(page)
   
// for(let row of data){

//     let campaign_name=row[0]
//     // ->mouseOverOn more Link
//     // await page.locator('//a[text()="More"]').hover()

//     // // ->click on campaigns
//     // await page.locator('[name="Campaigns"]').click()

    
//     await homePage.gotoCampaigns()

//     // ->click on create campaign lookup image
//     // await page.locator('[src="themes/softed/images/btnL3Add.gif"]').click()
//     let createCamp= new campaignsPage(page)
//     await createCamp.clickLookUp()

//     // ->Enter campaignName

//     // await page.locator('[name="campaignname"]').fill(campaign_name)

//     // // ->click on save Btn
//     // await page.locator('(//input[@value="  Save  "])[2]').click()

//     let create_Campaign =new createCampaigns(page)
//     await create_Campaign.createcampaign(campaign_name)
    
//     // let camp=await page.locator('[id="dtlview_Campaign Name"]').textContent()
//     // if(camp==campaign_name){
//     //     console.log(`${campaign_name} is created successfully`)
//     // }
//     // else{
//     //     console.log("campaign is not created")
//     // }

//     let campaignInfo=new campaignInformation(page)
//     await campaignInfo.validation(campaign_name)

//     await page.goBack()
// }

//     //  Logout from the application.
//     // await page.locator('[src="themes/softed/images/user.PNG"]').hover()
//     // await page.getByText('Sign Out').click()

//     await homePage.Logout()
// })

//&  POM

// import {test} from "@playwright/test"
// // import loginData from "../../Data/login.json"
// import Json from "../../GenericUtilities/jsonUtility"
// import XLSX from 'xlsx'
// import path from "node:path"
// import { json } from "node:stream/consumers"
// import getData from "../../GenericUtilities/ExcelUtility.js"
// import login from "../../pages/loginPage.js"
// import home from "../../pages/homePage.js"
// import campaignsPage from "../../pages/campaignModule/campaignsPage.js"
// import createCampaigns from "../../pages/campaignModule/createCampaignsPage.js"
// import campaignInformation from "../../pages/campaignModule/campaignInformationPage.js"

// test("create campaign", async({page})=>{
//     //> json utility
//     let json= await new Json().getDataFromJson()
//     let url =json.url
//     let un =json.userName
//     let pw=json.password
//      // login into application
//      //! login POM
//     let loginPage= new login(page)
//     await loginPage.gotoLoginpage(url)
//     await loginPage.Login(un,pw)
//     //^ excel utility
//     const excel = new getData();
//     let data = await excel.getDataFromExcel(0);
//     let homePage=new home(page)
// for(let row of data){
//     let campaign_name=row[0]
//     await homePage.gotoCampaigns()
//     let createCamp= new campaignsPage(page)
//     await createCamp.clickLookUp()
//     let create_Campaign =new createCampaigns(page)
//     await create_Campaign.createcampaign(campaign_name)
//     let campaignInfo=new campaignInformation(page)
//     await campaignInfo.validation(campaign_name)
   

//     await page.goBack()
// }
//     await homePage.Logout()
// })

// import { test } from "@playwright/test";
// // import loginData from "../../Data/login.json"
// import Json from "../../GenericUtilities/jsonUtility";
import homePage from "../../pages/homePage.js"
import getData from "../../GenericUtilities/ExcelUtility.js";
import campaignsPage from "../../pages/campaignModule/campaignsPage.js";
import createCampaigns from "../../pages/campaignModule/createCampaignsPage.js";
import campaignInformation from "../../pages/campaignModule/campaignInformationPage.js";
import test from "../../hooks.js"


test("create campaign", async ({ page }) => {
  
  // ^ excel utility
  const excel = new getData();
  let data = await excel.getDataFromExcel(0);
  for (let row of data) {
    let campaign_name = row[0];
    await homePage.gotoCampaigns();
    let createCamp = new campaignsPage(page);
    await createCamp.clickLookUp();
    let create_Campaign = new createCampaigns(page);
    await create_Campaign.createcampaign(campaign_name);
    let campaignInfo = new campaignInformation(page);
    await campaignInfo.validation(campaign_name);

    await page.goBack();
  }

});

