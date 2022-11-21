const {test,expect} = require ('@playwright/test')

test ('login rt pay', async({page})=>{
    await page.goto('https://1connect.incommagentsolutions.biz/#/' )
    await page.pause()
    const email = await page.getByPlaceholder('Username')
    //internal:attr=[placeholder="Username"i]
    await email.type('j1')
    const password = await page.$('#Password');
    await password.type('Miami123')
    const Signin = await page.$('role=button[name="Sign In"]')
    await Signin.click()

} );
test ('reset password', async({page})=>{
    await page.goto('https://1connect.incommagentsolutions.biz/#/' )
    await page.pause()
    const email = await page.$('internal:attr=[placeholder="Username"i]')
    await email.type('j1')
    const password = await page.$('#Password');
    await password.type('Miami123')
    const ForgetPassword = await page.$('role=button[name="Forgot Password?"]')
    await ForgetPassword.click()
    const User = await page.waitForSelector('input[name="UserName"]')
    await User.type('j1')
    const submitbtn = await page.$('role=button[name="Submit"]')
    await submitbtn.click()

} );
test ('reset password cancel', async({page})=>{
    await page.goto('https://1connect.incommagentsolutions.biz/#/' )
    await page.pause()
    const email = await page.$('internal:attr=[placeholder="Username"i]')
    await email.type('j1')
    const password = await page.$('#Password');
    await password.type('Miami123')
    const ForgetPassword = await page.$('role=button[name="Forgot Password?"]')
    await ForgetPassword.click()
    const submitcancel = await page.$('role=button[name="Submit"]')
    await submitcancel.click()
} );