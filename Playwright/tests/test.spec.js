const {test,expect} = require ('@playwright/test')

test ('draft', async({page})=>{

    await page.goto('https://1connect.incommagentsolutions.biz/#/' )
    await page.pause()

}) ;