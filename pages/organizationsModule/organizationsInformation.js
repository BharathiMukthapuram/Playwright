class organizationInformation{
    constructor(page){
        this.page=page
        this.organizationName='[id="dtlview_Organization Name"]'
    }
    async validation(FN,LN,companyName){
        let orgName = await this.page.locator(this.organizationName).textContent()
        
        if(LN==ln && LN==fn && company==companyName){
        console.log(`${First_name} lead is created successfully`)
    }
    else{
        console.log("lead is not created")
    }
    }
}