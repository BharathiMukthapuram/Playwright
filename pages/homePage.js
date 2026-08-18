class home{
    constructor(page){
        this.page=page
        this.organizations=this.page.getByRole('link', { name: 'Organizations' })
        this.contacts=this.page.getByRole('link', { name: 'Contacts' })
        this.leads=this.page.getByRole('link', { name: 'Leads' })
        this.products=this.page.getByRole('link', { name: 'Products' })
        this.more='//a[text()="More"]'
        this.campaigns='[name="Campaigns"]'
        this.logoutPNG='[src="themes/softed/images/user.PNG"]'
        this.logout=this.page.getByText('Sign Out')
    }
    async gotoOrganizations(){
        await this.organizations.first().click()
    }
    async gotoContacts(){
        await this.contacts.first().click()
    }
    async gotoLeads(){
        await this.leads.first().click()
    }
    async gotoProducts(){
        await this.products.first().click()
    }
    async gotoCampaigns(){
        await this.page.locator(this.more).hover()
        await this.page.locator(this.campaigns).click()
    }
    async Logout(){
        await this.page.locator(this.logoutPNG).click()
        await this.logout.click()
    }
}
export default home