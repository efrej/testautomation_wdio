//import AllureReporter from '@wdio/allure-reporter'

class CalculatorApp {

    /* =====================================================================  ELEMENTS ============================================================================== */
    get oneButton() { return $('~num1Button') }
    get plusButton() { return $('~plusButton') }
    get minusButton() { return $('~minusButton') }
    get equalsButton() { return $('~equalButton') }
    numberButton(number: number) { return $(`~num${number}Button`) }
    get resultText() { return $('~CalculatorResults') }


    /* get userNameInput() { return $('~qa-CLIENT_LOGIN_USERNAME') }
    get contButton() { return $('~loginButton') }
    get passInput() { return $('~qa-CLIENT_LOGIN_PASSWORD') }
    get searchInput() { return $('~qa-NOTES_HEADER') }
    get createNewNoteButton() { return $('//Text[@Name="Create new note"]') }
    get titleInput() { return $('//Document/Edit[@Name="Title"]') }
    get file() { return $('//MenuItem[@Name="File"]') }
    get quite() { return $('//MenuItem[@Name="Quit Evernote"]') }
    signOut(email: string) { return $(`//MenuItem[@Name="Sign out ${email}"]`) }
    get signOutButton() { return $('~qa-LOGOUT_BACKUP_DIALOG_SUBMIT') }
    get exitAnyWay() { return $('~qa-LOGOUT_CONFIRM_DIALOG_SUBMIT') }
    get bodyInput() { return $('//Text[@Name="Start writing, drag files or start from a template"]') }
    noteBody(note: string) { return $(`//Edit[@Name="${note}"]`)} */



    /* ========================================================================= ACTIONS ================================================================================ */


    /* async loginToDesktopApp(username: string, password: string) {
        await this.userNameInput.waitForDisplayed({ timeout: 5000 })
        await this.userNameInput.setValue(username)
        await this.contButton.waitForEnabled()
        await this.contButton.click()
        await this.passInput.waitForDisplayed()
        await this.passInput.setValue(password)
        await this.contButton.click()
        await browser.pause(1700)
        return this;
    }

    async verifyDashBoardIsLoaded() {
        await this.createNewNoteButton.waitForDisplayed({ timeout: 20000 })
        return this;
    }

    async createNewNote(title: string, body: string) {
        await this.createNewNoteButton.click()
        await this.titleInput.waitForDisplayed()
        await this.titleInput.waitForEnabled()
        await this.titleInput.setValue(title)
        await this.bodyInput.click()
        await this.bodyInput.setValue(body)
        return this;
    }

    */
    async addNumbers(number1: number, number2: number) {
        await this.numberButton(number1).click()
        await this.plusButton.click()
        await this.numberButton(number2).click()  
        await this.equalsButton.click()      
        return this;
    } 

    async subtractNumbers(number1: number, number2: number) {
        await this.numberButton(number1).click()
        await this.minusButton.click()
        await this.numberButton(number2).click()  
        await this.equalsButton.click()      
        return this;
    } 





}

export default new CalculatorApp();
