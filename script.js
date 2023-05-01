var globalVar1;
var globalVar2;
function calculateDays()
{
   let month = document.getElementById("month").value;
   let enlistmentDay = document.getElementById("enlistment").value;
   let ordDay = new Date(enlistmentDay);
   ordDay.setDate(ordDay.getDate() - 1);
   const ordDate = new Date(ordDay.setMonth(ordDay.getMonth() + parseInt(month)));
   ordDate.setHours(0,0,0,0);
   const enlistmentDate = new Date(enlistmentDay);
   enlistmentDate.setHours(0,0,0,0);
   if (enlistmentDate == "Invalid Date") {
      alert("Please input a valid date");
      return;
   }
   const today = new Date();
   const days = Math.ceil((ordDate - enlistmentDate)/(1000*60*60*24));
   const daysLeft = Math.ceil((ordDate - today)/(1000*60*60*24));
   let daysPercentage = Math.round((100-(daysLeft/(days/100))) * 10) / 10;
   let counter = 0;
   let counterFloat = 0;
   let progressCircle = document.querySelector(".outer");
   let innerCircle = document.querySelector(".inner");
   innerCircle.style.strokeDasharray = 0;
      if (document.getElementById("output").style.opacity == 1)
      {
         output.classList.toggle("fade");
         text.classList.toggle("fade");
         quote.classList.toggle("fade");

         document.getElementById("output").style.opacity = 0;
         document.getElementById("text").style.opacity = 0;
         document.getElementById("quote").style.opacity = 0;

         setTimeout(()=> 
         {
         output.classList.toggle("fade");
         text.classList.toggle("fade");
         quote.classList.toggle("fade");

         document.getElementById("output").style.opacity = 1;
         document.getElementById("text").style.opacity = 1;
         document.getElementById("quote").style.opacity = 1;
         }
      ,500);
      }
      else {
      output.classList.toggle("fade");
      text.classList.toggle("fade");
      quote.classList.toggle("fade");

      document.getElementById("output").style.opacity = 1;
      document.getElementById("text").style.opacity = 1;
      document.getElementById("quote").style.opacity = 1;
   }   
   
   if (daysPercentage >= 100){
      setInterval(() => {
         if(counter > 100) {
            clearInterval();
         }
         else {
            counterFloat = Math.round((counter) * 10) / 10;
            document.getElementById("percentage").innerHTML = counterFloat + "% done"; 
            counter += 0.1;
         }
      }, );
      document.getElementById("output").innerHTML = "0";
      document.getElementById("text").innerHTML = "DAY TO ORD"
      document.getElementById("quote").innerHTML = "WHERE GOT TIME? OWADIO!";
      progressCircle.style.strokeDasharray = 1000;
      progressCircle.style.strokeDashoffset = 0;
   }
   else if (daysPercentage < 0){
      document.getElementById("percentage").innerHTML = null;
      document.getElementById("output").innerHTML = daysLeft;
      document.getElementById("text").innerHTML = "DAYS TO ORD"
      if ((daysLeft - days) == 1){
         document.getElementById("quote").innerHTML = "1 MORE day to enlistment! JIAYOUS!";
      }
      else {
         document.getElementById("quote").innerHTML = (daysLeft - days) + " more days to enlistment!";
      }
      progressCircle.style.strokeDasharray = 1000;
      progressCircle.style.strokeDashoffset = 1000;
   }
   else {
      setInterval(() => {
         if(counterFloat > daysPercentage) {
            clearInterval();
         }
         else { 
            document.getElementById("percentage").innerHTML = counterFloat + "% done" ;
            counter += 0.1;  
            counterFloat = Math.round((counter) * 10) / 10;
         }
      }, );
      document.getElementById("output").innerHTML = daysLeft;
      if (daysLeft == 1) {
         document.getElementById("text").innerHTML = "DAY TO ORD"
      }
      else {
         document.getElementById("text").innerHTML = "DAYS TO ORD"
      }
      document.getElementById("output").value = daysLeft;
      let radius = progressCircle.r.baseVal.value;
      let circumference = 2 * Math.PI * radius;
      progressCircle.style.strokeDasharray = circumference;
      setProgress(100-(daysLeft/(days/100)));
      function setProgress(percent) {
         progressCircle.style.strokeDashoffset = circumference - (percent / 100) * circumference;
      } 
      if (daysLeft == days) {
         document.getElementById("quote").innerHTML = "Happy Enlistment! Welcome aboard to EngHub Ferry...";
      }
      else {
         const quotes = [
"Don't count the days, make the days count!",
"At the end of the day, the day ends", 
"You think, I thought, Who confirm?", 
"Rush to wait, wait to rush",
"2 years only, very fast one",
"Tough times don't last, tough men do",
"If you're reading this pass lights out, good luck tmr",
"With this weapon, I will defend my country, Sir!",
"Thank you for your service",
"Thank you for keeping our camp safe",
"Nothing to do high kneel",
"Never mind, take your time, the whole company waiting for you",
"You give me standard, I give you welfare",
"Company Headsout! Go make my 1 x magazine appear!",
"Sergeant, I forgot to bring my smart 4, can I wear long 4 instead?",
"Whole lot fall in! I give you 30 seconds, timer carry on!",
"I don't care. Cannot also must can",
"Last man can hear me?",
"Everything out. Everything in. Everything on.",
"If troopers are not doing anything, something is wrong",
"Today you sweat, tomorrow she wet",
"WOSPEC only have 2 jobs. Area management and area cleanliness",
"Auntie, give me the most handsome number 1 haircut",
"Hurry up send arms! Where my armskote helper?",
"No excuse for you, don't tell me your sad story, you want you talk to jesus",
"Where is my COS? Area cleaning done?",
"Anything also can... but not Infantry",
"Sergeant major, We have cleared away the GS table as requested by you. Can go canteen now?",
"Don't make your problem my problem",
"I love dinner, especially the ones on Friday"
];
         let randNum = Math.floor(Math.random() * 30);
         document.getElementById("quote").innerHTML = quotes[randNum];
      }
   }
globalVar1 = daysLeft;
globalVar2 = days;
share();
}