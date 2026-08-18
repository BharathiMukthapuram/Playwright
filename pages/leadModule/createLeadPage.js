class createleads{
    constructor(page){
        this.page =page
        this.salutationType='[name="salutationtype"]'
        this.firstName='[name="firstname"]'
        this.lastName='[name="lastname"]'
        this.company='[name="company"]'
        this.saveBttn='(//input[@value="  Save  "])[2]'
    }
    async createlead(ST,FN,LN,companyName){
        await this.page.locator(this.salutationType).selectOption(ST)
        await this.page.locator(this.firstName).fill(FN)
        await this.page.locator(this.lastName).fill(LN)
        await this.page.locator(this.company).fill(companyName)
        await this.page.locator(this.saveBttn).click()
    }
}
export default createleads