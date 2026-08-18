class leadInformation{
    constructor(page){
        this.page=page
        this.firstName='[id="dtlview_First Name"]'
        this.lastName='[id="dtlview_Last Name"]'
        this.company='[id="dtlview_Company"]'
    }
    async validation(FN,LN,companyName){
        let fn = await this.page.locator(this.firstName).textContent()
        let ln = await this.page.locator(this.lastName).textContent()
        let company = await this.page.locator(this.company).textContent()
        if(LN==ln && LN==fn && company==companyName){
        console.log(`${First_name} lead is created successfully`)
    }
    else{
        console.log("lead is not created")
    }
    }
}
export default leadInformation