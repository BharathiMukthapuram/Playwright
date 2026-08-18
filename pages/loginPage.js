class LoginPage{
    constructor(page){
        this.page=page
        this.usernameInput='[name="user_name"]'
        this.passwordInput='[name="user_password"]'
        this.loginButton='#submitButton'
    }
    async gotoLoginpage(url){
        await this.page.goto(url)
    }
    async Login(user_name,password){
        await this.page.locator(this.usernameInput).fill(user_name)
        await this.page.locator(this.passwordInput).fill(password)
        await this.page.locator(this.loginButton).click()
    }
}
export default LoginPage