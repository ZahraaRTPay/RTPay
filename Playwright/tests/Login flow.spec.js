const { test , expect } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless:false , slowMo: 1000 });  // Or 'firefox' or 'webkit'.   
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.goto('https://1connect.incommagentsolutions.biz/#/' )
    await page.pause()
    const email = await page.$('internal:attr=[placeholder="Username"i]')
    await email.type('j1')
    const password = await page.$('#Password');
    await password.type('Miami123')
    const Signin = await page.$('role=button[name="Sign In"]')
    await Signin.click()

    //login flow ends

    
}) () ; 


(async () => {
const browser = await chromium.launch({ headless:false , slowMo: 1000 });  // Or 'firefox' or 'webkit'.   
const page = await browser.newPage();
await page.setDefaultNavigationTimeout(0);
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


}) () ; 
//forget password flow end

(async () => {
    const browser = await chromium.launch({ headless:false , slowMo: 1000 });  // Or 'firefox' or 'webkit'.   
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
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
  
    }) () ; 
// cancel forget password flow ends