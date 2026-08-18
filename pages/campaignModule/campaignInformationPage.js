class campaignInformation{
    constructor(page){
        this.page=page
        this.campaignName='[id="dtlview_Campaign Name"]'
    }
    async validation(campaign_name){
        let camp = await this.page.locator(this.campaignName).textContent()
        if(camp==campaign_name){
        console.log(`${campaign_name} is created successfully`)
    }
    else{
        console.log("campaign is not created")
    }
    }
}

export default campaignInformation