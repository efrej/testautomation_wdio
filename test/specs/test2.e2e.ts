import calculatorApp from "../pageobjects/calculatorApp"


describe('The Calculator app should also', () => {
    it('be able to subtract two numbers', async () => {
        await calculatorApp.subtractNumbers(9, 5)
        await expect(calculatorApp.resultText).toHaveText("Display is 4")
    })
})

