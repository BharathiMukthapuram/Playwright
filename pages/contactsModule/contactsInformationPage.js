class contactInformation{
    constructor(page){
        this.page=page
        this.firstName='[id="dtlview_First Name"]'
        this.lastName='[id="dtlview_Last Name"]'
    }
    async validation(FN,LN){
        let fn = await this.page.locator(this.firstName).textContent()
        let ln = await this.page.locator(this.lastName).textContent()
        if(fn ==FN && ln==LN){
        console.log(`${FN} contact is created successfully`)
    }
    else{
        console.log("contact is not created")
    }
    }
}
export default contactInformation