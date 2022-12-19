
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})
test('Clicking the Draw button displays the div with id = “choices”', async ()=>{
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)
    const displayed = await driver.findElement(By.id('choices')).isDisplayed()
    expect(displayed).toBeTruthy()
    await driver.sleep(2000)
})
test('clicking an “Add to Duo” button displays the div with id = “player-duo”', async ()=>{
  
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)
    await driver.findElement(By.css('.bot-btn')).click()
    const player = await driver.findElement(By.id('player-duo'))
    const displayed = await player.isDisplayed()
    expect(displayed).toBe(true)
})
