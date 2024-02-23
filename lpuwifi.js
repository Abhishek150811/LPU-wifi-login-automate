const puppeteer = require('puppeteer')

// Enter your Username
const username = "" ;
// Enter your Password
const password = "" ;
const websiteURL = "https://internet.lpu.in/24online/webpages/client.jsp"

function delay(time){
    return new Promise((resolve , reject)=>{
        setTimeout(resolve,time)
    })
}
const login = async()=>{
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({ width: 800, height: 600 });
    await page.goto(websiteURL);

    await page.waitForSelector('#jsena > table > tbody > tr > td > div.container > div > div.col-lg-4.login-field > div:nth-child(2) > input[type=text]')
    await delay(2000)
    await page.type('#jsena > table > tbody > tr > td > div.container > div > div.col-lg-4.login-field > div:nth-child(2) > input[type=text]' , username)
    await  page.type('#jsena > table > tbody > tr > td > div.container > div > div.col-lg-4.login-field > div:nth-child(3) > input[type=password]' , password);
    await page.click('#agreepolicy')
    await page.click('#loginbtn') 
    await page.waitForNavigation() ;
    const text = page.waitForSelector('#jsena > table > tbody > tr > td > div.container > div > div > div.pt-2.pb-3 > p:nth-child(1)')
    text.then(e=>console.log(e));

}
login() ;

