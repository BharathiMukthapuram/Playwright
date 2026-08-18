// import {test} from "@playwright/test"

// test("create product", async({page})=>{
//     // login into application
//     await page.goto("http://49.249.29.4:8888/")
//     await page.locator('[name="user_name"]').fill("admin")
//     await page.locator('[name="user_password"]').fill('admin')
//     await page.locator('#submitButton').click()

//     // ->click on Contacts link
//     await page.getByText('Contacts').click()

//     // ->click on create contact lookup image
//     await page.getByAltText('Create Contact...').click()

//     // ->Enter FirstName and LastName

//     let FN="Bharathi"
//     await page.locator('[name="salutationtype"]').selectOption('Ms.')
//     await page.locator('[name="firstname"]').fill(FN)
//     let LN="Mukthapuram"
//     await page.locator('[name="lastname"]').fill(LN)

//     // ->click on save Btn

//     await page.locator('(//input[@value="  Save  "])[2]').click()

//     // ->verify whether the Contact is created with firstName and LastName in Contact Information page
//     let fn=await page.locator('[id="dtlview_First Name"]').textContent()
//     let ln=await page.locator('[id="dtlview_Last Name"]').textContent()
//     if(fn ==FN && ln==LN){
//         console.log("contact created successfully")
//     }
//     else{
//         console.log("contact is not created")
//     }

    
//      //  Logout from the application.
//     await page.locator('[src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText('Sign Out').click()    
//     await page.waitForTimeout(2000)

// })


//& DDT with JSON for login

// import {test} from "@playwright/test"
// import loginData from "../../Data/login.json"

// let url =loginData.url
// let un =loginData.userName
// let pw=loginData.password

// test("create product", async({page})=>{
//     // login into application
//     await page.goto(url)
//     await page.locator('[name="user_name"]').fill(un)
//     await page.locator('[name="user_password"]').fill(pw)
//     await page.locator('#submitButton').click()

//     // ->click on Contacts link
//     await page.getByText('Contacts').click()

//     // ->click on create contact lookup image
//     await page.getByAltText('Create Contact...').click()

//     // ->Enter FirstName and LastName

//     let FN="Bharathi"
//     await page.locator('[name="salutationtype"]').selectOption('Ms.')
//     await page.locator('[name="firstname"]').fill(FN)
//     let LN="Mukthapuram"
//     await page.locator('[name="lastname"]').fill(LN)

//     // ->click on save Btn

//     await page.locator('(//input[@value="  Save  "])[2]').click()

//     // ->verify whether the Contact is created with firstName and LastName in Contact Information page
//     let fn=await page.locator('[id="dtlview_First Name"]').textContent()
//     let ln=await page.locator('[id="dtlview_Last Name"]').textContent()
//     if(fn ==FN && ln==LN){
//         console.log("contact created successfully")
//     }
//     else{
//         console.log("contact is not created")
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
// import path from "node:path"

// let url =loginData.url
// let un =loginData.userName
// let pw=loginData.password

// let file_path= path.resolve(__dirname,'../','../','Data','testData.xlsx')

// test("create product", async({page})=>{
//     // login into application
//     await page.goto(url)
//     await page.locator('[name="user_name"]').fill(un)
//     await page.locator('[name="user_password"]').fill(pw)
//     await page.locator('#submitButton').click()

//     let workbook=XLSX.readFile(file_path)
//     console.log(workbook.SheetNames);
//     let sheet =  workbook.Sheets[workbook.SheetNames[1]];
//     const data = XLSX.utils.sheet_to_json(sheet,{header:1});

//     for(let row of data){
//     let FN=row[0]
//     let LN=row[1]
//     let ST=row[2]

//     console.log(FN,LN,ST)
    
//     // ->click on Contacts link
//     // await page.locator('//a[text()="Contacts"]').click()
//     await page.getByRole('link', { name: 'Contacts' }).first().click();

//     // ->click on create contact lookup image
//     await page.getByAltText('Create Contact...').click()

//     // ->Enter FirstName and LastName

   
//     await page.locator('[name="salutationtype"]').selectOption(ST)
//     await page.locator('[name="firstname"]').fill(FN)
//     await page.locator('[name="lastname"]').fill(LN)

//     // ->click on save Btn

//     await page.locator('(//input[@value="  Save  "])[2]').click()

//     // ->verify whether the Contact is created with firstName and LastName in Contact Information page
//     let fn=await page.locator('[id="dtlview_First Name"]').textContent()
//     let ln=await page.locator('[id="dtlview_Last Name"]').textContent()
//     if(fn ==FN && ln==LN){
//         console.log(`${FN} contact is created successfully`)
//     }
//     else{
//         console.log("contact is not created")
//     }
//     await page.goBack()
// }
//      //  Logout from the application.
//     await page.locator('[src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText('Sign Out').click()    
//     await page.waitForTimeout(2000)

// })



// //& Json utility

// import {test} from "@playwright/test"
// // import loginData from "../../Data/login.json"
// import Json from "../../GenericUtilities/jsonUtility"
// import XLSX from "xlsx"
// import path from "node:path"



// let file_path= path.resolve(__dirname,'../','../','Data','testData.xlsx')

// test("create product", async({page})=>{

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
//     console.log(workbook.SheetNames);
//     let sheet =  workbook.Sheets[workbook.SheetNames[1]];
//     const data = XLSX.utils.sheet_to_json(sheet,{header:1});

//     for(let row of data){
//     let FN=row[0]
//     let LN=row[1]
//     let ST=row[2]

//     console.log(FN,LN,ST)
    
//     // ->click on Contacts link
//     // await page.locator('//a[text()="Contacts"]').click()
//     await page.getByRole('link', { name: 'Contacts' }).first().click();

//     // ->click on create contact lookup image
//     await page.getByAltText('Create Contact...').click()

//     // ->Enter FirstName and LastName

   
//     await page.locator('[name="salutationtype"]').selectOption(ST)
//     await page.locator('[name="firstname"]').fill(FN)
//     await page.locator('[name="lastname"]').fill(LN)

//     // ->click on save Btn

//     await page.locator('(//input[@value="  Save  "])[2]').click()

//     // ->verify whether the Contact is created with firstName and LastName in Contact Information page
//     let fn=await page.locator('[id="dtlview_First Name"]').textContent()
//     let ln=await page.locator('[id="dtlview_Last Name"]').textContent()
//     if(fn ==FN && ln==LN){
//         console.log(`${FN} contact is created successfully`)
//     }
//     else{
//         console.log("contact is not created")
//     }
//     await page.goBack()
// }
//      //  Logout from the application.
//     await page.locator('[src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText('Sign Out').click()    
//     await page.waitForTimeout(2000)

// })


// //& Excel utility

// import {test} from "@playwright/test"
// // import loginData from "../../Data/login.json"
// import Json from "../../GenericUtilities/jsonUtility"
// import getData from "../../GenericUtilities/ExcelUtility"
// import login from "../../pages/loginPage"
// import XLSX from "xlsx"
// import path from "node:path"



// let file_path= path.resolve(__dirname,'../','../','Data','testData.xlsx')

// test("create product", async({page})=>{


//     //> json utility
//     let json= await new Json().getDataFromJson()

//     let url =json.url
//     let un =json.userName
//     let pw=json.password
//     // login into application
//     //! login POM
//     let loginPage= new login(page)
//     await loginPage.gotoLoginpage(url)
//     await loginPage.Login(un,pw)


//     //^ Excel Utility
//     const excel = new getData();
//     let data = await excel.getDataFromExcel(1);

    

//     for(let row of data){
//     let FN=row[0]
//     let LN=row[1]
//     let ST=row[2]

//     console.log(FN,LN,ST)
    
//     // ->click on Contacts link
//     // await page.locator('//a[text()="Contacts"]').click()
//     // await page.locator('[href="index.php?module=Contacts&action=index"]').click()
//     // await page.locator('[href="index.php?module=Contacts&action=index"]').waitFor({state:'visible'});
//     // await page.locator('[href="index.php?module=Contacts&action=index"]').click();
//     await page.getByRole('link', { name: 'Contacts' }).first().click();



//     // ->click on create contact lookup image
//     await page.getByAltText('Create Contact...').click()

//     // ->Enter FirstName and LastName

   
//     await page.locator('[name="salutationtype"]').selectOption(ST)
//     await page.locator('[name="firstname"]').fill(FN)
//     await page.locator('[name="lastname"]').fill(LN)

//     // ->click on save Btn

//     await page.locator('(//input[@value="  Save  "])[2]').click()

//     // ->verify whether the Contact is created with firstName and LastName in Contact Information page
//     let fn=await page.locator('[id="dtlview_First Name"]').textContent()
//     let ln=await page.locator('[id="dtlview_Last Name"]').textContent()
//     if(fn ==FN && ln==LN){
//         console.log(`${FN} contact is created successfully`)
//     }
//     else{
//         console.log("contact is not created")
//     }
//     await page.goBack()
// }
//      //  Logout from the application.
//     await page.locator('[src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText('Sign Out').click()    
//     await page.waitForTimeout(2000)

// })

//& Excel utility

// import {test} from "@playwright/test"
// // import loginData from "../../Data/login.json"
// import Json from "../../GenericUtilities/jsonUtility"
// import getData from "../../GenericUtilities/ExcelUtility"
// import login from "../../pages/loginPage"
// import home from "../../pages/homePage"
// import XLSX from "xlsx"
// import path from "node:path"
// import contacts from "../../pages/contactsModule/contactsPage"
// import createContacts from "../../pages/contactsModule/createContactsPage"
// import contactInformation from "../../pages/contactsModule/contactsInformationPage"

// let file_path= path.resolve(__dirname,'../','../','Data','testData.xlsx')

// test("create product", async({page})=>{


//     //> json utility
//     let json= await new Json().getDataFromJson()

//     let url =json.url
//     let un =json.userName
//     let pw=json.password
//     // login into application
//     //! login POM
//     let loginPage= new login(page)
//     await loginPage.gotoLoginpage(url)
//     await loginPage.Login(un,pw)

    
//     //^ Excel Utility
//     const excel = new getData();
//     let data = await excel.getDataFromExcel(1);

//     let homePage=new home(page)
    

//     for(let row of data){
//     let FN=row[0]
//     let LN=row[1]
//     let ST=row[2]

//     console.log(FN,LN,ST)
    
//     // ->click on Contacts link
//     // await page.locator('//a[text()="Contacts"]').click()
//     // await page.locator('[href="index.php?module=Contacts&action=index"]').click()
//     // await page.locator('[href="index.php?module=Contacts&action=index"]').waitFor({state:'visible'});
//     // await page.locator('[href="index.php?module=Contacts&action=index"]').click();

    
//     // await page.getByRole('link', { name: 'Contacts' }).first().click();

//     await homePage.gotoContacts()

//     // ->click on create contact lookup image
//     // await page.locator('[src="themes/softed/images/btnL3Add.gif"]').click()
    
//     let contact= new contacts(page)
//     await contact.clickLookUp()

//     // ->Enter FirstName and LastName

   
//     // await page.locator('[name="salutationtype"]').selectOption(ST)
//     // await page.locator('[name="firstname"]').fill(FN)
//     // await page.locator('[name="lastname"]').fill(LN)

//     // // ->click on save Btn

//     // await page.locator('(//input[@value="  Save  "])[2]').click()

//     let createContact=new createContacts(page)
//     await createContact.createContact(ST,FN,LN)

//     let contactInfo= new contactInformation(page)
//     await contactInfo.validation(FN,LN)
//     // ->verify whether the Contact is created with firstName and LastName in Contact Information page
    
//     await page.goBack()
// }
//      //  Logout from the application.
//     // await page.locator('[src="themes/softed/images/user.PNG"]').hover()
//     // await page.getByText('Sign Out').click()   
    
//     await homePage.Logout()

//     await page.waitForTimeout(2000)

// })



import {test} from "@playwright/test"
// import loginData from "../../Data/login.json"
import Json from "../../GenericUtilities/jsonUtility"
import getData from "../../GenericUtilities/ExcelUtility"
import login from "../../pages/loginPage"
import home from "../../pages/homePage"
import XLSX from "xlsx"
import path from "node:path"
import contacts from "../../pages/contactsModule/contactsPage"
import createContacts from "../../pages/contactsModule/createContactsPage"
import contactInformation from "../../pages/contactsModule/contactsInformationPage"

let file_path= path.resolve(__dirname,'../','../','Data','testData.xlsx')

test("create product", async({page})=>{
    //> json utility
    let json= await new Json().getDataFromJson()
    let url =json.url
    let un =json.userName
    let pw=json.password
    // login into application
    //! login POM
    let loginPage= new login(page)
    await loginPage.gotoLoginpage(url)
    await loginPage.Login(un,pw)
    //^ Excel Utility
    const excel = new getData();
    let data = await excel.getDataFromExcel(1);
    let homePage=new home(page)
    for(let row of data){
    let FN=row[0]
    let LN=row[1]
    let ST=row[2]
    console.log(FN,LN,ST)
    await homePage.gotoContacts()
    let contact= new contacts(page)
    await contact.clickLookUp()
    let createContact=new createContacts(page)
    await createContact.createContact(ST,FN,LN)
    let contactInfo= new contactInformation(page)
    await contactInfo.validation(FN,LN)    
    await page.goBack()
}   
    await homePage.Logout()
    await page.waitForTimeout(2000)

})