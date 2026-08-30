import {test} from "@playwright/test"

import loginPage from "./pages/loginPage.js"
import homePage from "./pages/homePage.js"

import data from "./Data/login.json"

let Un=data.userName
let Url=data.url
let password=data.password

let page
test.beforeEach(async({context})=>{
    page = await context.newPage()
    let login= new loginPage(page)
    login.gotoLoginpage(Url)
    login.Login(Un,password)
})
test.afterEach(async()=>{
    let logout=new homePage(page)
    logout.Logout()
})

export default test