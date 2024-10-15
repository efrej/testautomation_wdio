import calculatorApp from "../pageobjects/calculatorApp"


describe('The Calculator app', () => {
    it('should be able to add two numbers', async () => {

        await calculatorApp.addNumbers(4, 5)
        await expect(calculatorApp.resultText).toHaveText("Display is 9")
        
    })
})

