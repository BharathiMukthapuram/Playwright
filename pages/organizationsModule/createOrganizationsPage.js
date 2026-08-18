class createorganizations{
    constructor(page){
        this.page =page
        this.organizationName='[name="accountname"]'
        this.saveBttn='(//input[@value="  Save  "])[2]'
    }
    async createorganization(orgName){
        await this.page.locator(this.organizationName).fill(orgName)
        await this.page.locator(this.saveBttn).click()
    }
}
export default createorganizations