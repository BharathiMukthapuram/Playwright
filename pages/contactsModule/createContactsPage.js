class createContacts{
    constructor(page){
        this.page =page
        this.salutationType='[name="salutationtype"]'
        this.firstName='[name="firstname"]'
        this.lastName='[name="lastname"]'
        this.saveBttn='(//input[@value="  Save  "])[2]'
    }
    async createContact(ST,FN,LN){
        await this.page.locator(this.salutationType).selectOption(ST)
        await this.page.locator(this.firstName).fill(FN)
        await this.page.locator(this.lastName).fill(LN)
        await this.page.locator(this.saveBttn).click()
    }
}
export default createContacts