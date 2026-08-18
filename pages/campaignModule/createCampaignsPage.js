class createCampaigns{
    constructor(page){
        this.page=page
        this.campaignName='[name="campaignname"]'
        this.save='(//input[@value="  Save  "])[2]'
    }

    async createcampaign(campaign_name){
        await this.page.locator(this.campaignName).fill(campaign_name)
        await this.page.locator(this.save).click()
    }
}

export default createCampaigns