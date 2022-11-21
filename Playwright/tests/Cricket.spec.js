const {test,expect} = require ('@playwright/test')

test ('cricket flow', async({page})=>{
    
  //login flow start
    await page.goto('https://1connect.incommagentsolutions.biz/#/' )
    await page.pause()
    const email = await page.$('internal:attr=[placeholder="Username"i]')
    await email.type('j1')
    const password = await page.$('#Password');
    await password.type('Miami123')
    const Signin = await page.$('role=button[name="Sign In"]')
    await Signin.click()

    //login flow ends


    //Cricket flow order and make paymment start with english language
    const CricketButton = await page.waitForSelector('div:nth-child(2) > .row', {timeout:  0})
    await CricketButton.click()
    const Language = await page.waitForSelector('role=button[name="Language Preference"]')
    await Language.click()
    await page.pause()
    const EN = await page.waitForSelector('text=English')
    await EN.click()
    const FirstName =await page.$('internal:label=First name')
    await FirstName.type('zahraa')
    const LastName =await page.$('internal:label=Last name')
    await LastName.type('hammoud')
    const address = await page.$('internal:label=Address')
    await address.type('Miami')
    const Email = await page.$('internal:label=Email')
    await Email.type('test@gmail.com')
    const Phone = await page.$('internal:label=Phone')
    await Phone.type('2025550193')
    const City = await page.$('internal:label=City')
    await City.type('beirut')
    const StateDD = await page.$('role=button[name="State"]')
    await StateDD.click()
    const State= await page.$('text=Florida')
    await State.click()
    const ZipCode = await page.$('role=button[name="ZipCode]')
    await ZipCode.type()
    const ContinueBtn = await page.$('role=button[name="Continue]')
    await ContinueBtn.click()
    const AcceptBtn = await page.$('role=button[name="Accept"')
    await AcceptBtn.click()
    const SIM = await page.waitForSelector('internal:label=SIM')
    await SIM.type('')
    const IMEI =await page.$('internal:label=IMEI')
    await IMEI.type('')
    const PickPlanbtn =await page.$('role=button[name="Now, Pick a Plan"]')
    await PickPlanbtn.click()
    const plantype = await page.$('#productDetails8704')
    await plantype.click()
    const Acceptbtn = await page.$('role=button[name="Review & Accept"]')
    await Acceptbtn.click()
    const Reviewplan = await page.$('role=heading[name="Full Plan Details"] >> nth=4')
    await Reviewplan.click()
    const close = await page.$('role=button[name="Close"]')
    await close.click()
    const TnC = await page.$('.py-0 > div > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple')
    await TnC.click()
    const DoneOrder = await page.$('role=button[name="Complete Order"]')
    await DoneOrder.click()
    const PaymentType = await page.waitForSelector('role=button[name="Payment Type Cash"]')
    await PaymentType.click()
    const PT = await page.$('role=option[name="Cash"] >> text=Cash')
    await PT.click()
    const amountPaid = await page.waitForSelector('internal:attr=[placeholder="Enter Amount Received]')
    await amountPaid.type('40')
    const PayBtn = await page.$('role=button[name="Place Order & Pay"]')
    await PayBtn.click()

    //await amountPaid.type
    

    
    //edit payment 



    //cancel payment


    //add additonal line



}) () ; 



test ('cricket edit', async({page})=>{

await page.goto('https://1connect.incommagentsolutions.biz/#/' )
    await page.pause()
    const email = await page.$('internal:attr=[placeholder="Username"i]')
    await email.type('j1')
    const password = await page.$('#Password');
    await password.type('Miami123')
    const Signin = await page.$('role=button[name="Sign In"]')
    await Signin.click()
    const CricketButton = await page.waitForSelector('div:nth-child(2) > .row', {timeout:  0})
    await CricketButton.click()
    const Language = await page.waitForSelector('role=button[name="Language Preference"]')
    await Language.click()
    await page.pause()
    const EN = await page.waitForSelector('text=English')
    await EN.click()
    const FirstName =await page.$('internal:label=First name')
    await FirstName.type('zahraa')
    const LastName =await page.$('internal:label=Last name')
    await LastName.type('hammoud')
    const address = await page.$('internal:label=Address')
    await address.type('Miami')
    const Email = await page.$('internal:label=Email')
    await Email.type('test@gmail.com')
    const Phone = await page.$('internal:label=Phone')
    await Phone.type('2025550193')
    const City = await page.$('internal:label=City')
    await City.type('beirut')
    const StateDD = await page.$('role=button[name="State"]')
    await StateDD.click()
    const State= await page.$('text=Florida')
    await State.click()
    const ZipCode = await page.$('role=button[name="ZipCode]')
    await ZipCode.type()
    const ContinueBtn = await page.$('role=button[name="Continue]')
    await ContinueBtn.click()
    const AcceptBtn = await page.$('role=button[name="Accept"')
    await AcceptBtn.click()
    const SIM = await page.waitForSelector('internal:label=SIM')
    await SIM.type('')
    const IMEI =await page.$('internal:label=IMEI')
    await IMEI.type('')
    const editplan = await page.$('.pt-0 > .float-right')
    await editplan.click()
    

})  ; 