class campaigns{
    constructor(page){
        this.page=page
        this.lookupImage='[src="themes/softed/images/btnL3Add.gif"]'
    }
    async clickLookUp(){
        await this.page.locator(this.lookupImage).click()
    }
}
export default campaigns