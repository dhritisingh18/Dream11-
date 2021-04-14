require('chromedriver');

const wd=require('selenium-webdriver');

const browser=new wd.Builder().forBrowser('chrome').build();
let pass=process.argv[2];
let numOfPlayers=[1,4,2,4];
let numLeft=11;
let creditLeft=0;
async function avg(numLeft){
    return creditLeft/numLeft;
}
async function display(data,creditPoint,i){
 let required=numOfPlayers[i];
 for(let j=0;j<required;j++){
     let ans=avg(numLeft);
     let max=0;
     let idx=-1;
     for(let k=0;k<creditPoint.length;k++){
         if(creditPoint[k]>max && creditPoint[k]<=ans) {
             max=creditPoint[k];
             idx=k;
         }
     }
     numLeft-=1;
     creditLeft-=max;
     data.splice(idx,1);
     creditPoint.splice(idx,1);
     console.log("Name: "+data[idx]+", Credits: "+max);
 }

}
async function playerSelection(nameOfField,i){
    console.log();
    console.log("Player Type: "+ nameOfField);
    console.log();
    let data=[];
    await browser.wait(wd.until.elementsLocated(wd.By.css(".playerName_73cad")));
    let options=await (await browser.findElements(wd.By.css(".playerName_73cad")));
        for(let i=0;i<options.length;i++){
        let name=await options[i].getText();
      data.push(name); 
    }
  
        let creditPoint=[];
        await browser.wait(wd.until.elementsLocated(wd.By.css(".playerCardCell_bf9d8.playerPointsCell_aa0e3")));
        let opt=await (await browser.findElements(wd.By.css(".playerCardCell_bf9d8.playerPointsCell_aa0e3")));
            for(let i=0;i<opt.length;i++){
            let name=await opt[i].getText();
            if(i%2!=0)  creditPoint.push(name);
         
        }
        creditPoint.splice(0,1);


       await display(data,creditPoint,i);

}
async function main(){
    (await browser).get("https://www.dream11.com/login");
    let inputLogin=await browser.findElement(wd.By.css(".input-field.inputField_7b6c5"));
    inputLogin.sendKeys("giyop59737@0pppp.com");
    let buttonLogin=await browser.findElement(wd.By.css(".newButton_7ea12.fullWidthGreenButton_5063b"))
    await buttonLogin.click();
    await browser.wait(wd.until.elementLocated(wd.By.css(".input-field.inputField_7b6c5")));
    let passwordLogin=await browser.findElement(wd.By.css(".input-field.inputField_7b6c5"));
    passwordLogin.sendKeys(pass);
    let nextLogin=await browser.findElement(wd.By.css(".newButton_7ea12.fullWidthGreenButton_5063b"));
    await nextLogin.click();
   
    await browser.wait(wd.until.elementLocated(wd.By.css(".js--match-card.matchCard_868db")));
    let allMatches=await browser.findElement(wd.By.css(".js--match-card.matchCard_868db")).getAttribute("href");

    (await browser).get(allMatches);
   

    await browser.wait(wd.until.elementLocated(wd.By.css(".btn.btn--flat.btn--bordered.btn--bordered--white.text-color--white")));
    let skip=await browser.findElement(wd.By.css(".btn.btn--flat.btn--bordered.btn--bordered--white.text-color--white"));
  
    await skip.click();
    
    await  browser.wait(wd.until.elementLocated(wd.By.css(".creditsText_4bef4 div")));
    creditLeft=await (await browser.findElement(wd.By.css(".creditsText_4bef4 div"))).getText();
  
        await  browser.wait(wd.until.elementsLocated(wd.By.css(".createTeamTabTitle_99a5a")));
        let typeOfPlayer=await (await browser.findElements(wd.By.css(".createTeamTabTitle_99a5a")));
     console.log();
     console.log();
      console.log("          Selected Team    ");
      console.log("------------------------------------")
        for(let i=0;i<typeOfPlayer.length;i++){
         let nameOfField=await typeOfPlayer[i].getText();

          typeOfPlayer[i].click();
        await playerSelection(nameOfField,i);
      
        }
}
 main()
