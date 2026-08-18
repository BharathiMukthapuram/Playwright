class leads{
    constructor(page){
        this.page=page
        this.lookUpImage='[src="themes/softed/images/btnL3Add.gif"]'
    }
    async clickLookUp(){
        await this.page.locator(this.lookUpImage).click()

    }
}
export default leads