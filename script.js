var globalVar1;
var globalVar2;
function calculateDays()
{
   var month = document.getElementById("month").value;
   let a = 729;
   if (month == 22){
      a = 668;
   }
   var enlistmentDay = document.getElementById("enlistment").value; //yyyy-mm-dd
   const enlistmentDate = new Date(enlistmentDay);
   enlistmentDate.setHours(00);
   enlistmentDate.setMinutes(00);
   if (enlistmentDate == "Invalid Date") {
      alert("Please input a valid date");
      return;
   }
   const ordDate = enlistmentDate.setDate(enlistmentDate.getDate()+a);
   const today = new Date();
   const days = Math.ceil((Math.ceil(ordDate - today))/(1000*60*60*24));
   let daysPercentage = Math.round((100-(days/(a/100))) * 10) / 10;
   let counter = 0;
   let counterFloat = 0;

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
      
      document.getElementById("percentage").innerHTML = 100 + "% done";
      document.getElementById("output").innerHTML = "0";
      document.getElementById("text").innerHTML = "DAY TO ORD"
      document.getElementById("quote").innerHTML = "WHERE GOT TIME? OWADIO!";
      
      let progressCircle = document.querySelector(".outer");
      progressCircle.style.strokeDasharray = 1000;
      progressCircle.style.strokeDashoffset = 0;
   }
   else if (daysPercentage < 0){
      document.getElementById("percentage").innerHTML = null;
      document.getElementById("output").innerHTML = days;
      document.getElementById("text").innerHTML = "DAYS TO ORD"
      if ((days - a) == 1){
         document.getElementById("quote").innerHTML = (days - a) + " MORE day to enlistment! JIAYOUS!";
      }
      else {
         document.getElementById("quote").innerHTML = (days - a) + " more days to enlistment!";
      }
      let progressCircle = document.querySelector(".outer");
      progressCircle.style.strokeDasharray = 1000;
      progressCircle.style.strokeDashoffset = 1000;
   }
   else {
      setInterval(() => {
         if(counter > daysPercentage) {
            clearInterval();
         }
         else {   
            counterFloat = Math.round((counter) * 10) / 10;
            counter += 0.1;
            document.getElementById("percentage").innerHTML = counterFloat + "% done" ;
         }
      }, );
      console.log(daysPercentage);
      document.getElementById("output").innerHTML = days;
      if (days == 1) {
         document.getElementById("text").innerHTML = "DAY TO ORD"
      }
      else {
         document.getElementById("text").innerHTML = "DAYS TO ORD"
      }
      document.getElementById("output").value = days;
      let progressCircle = document.querySelector(".outer");
      let radius = progressCircle.r.baseVal.value;
      let circumference = 2 * Math.PI * radius;
      progressCircle.style.strokeDasharray = circumference;
      setProgress(100-(days/(a/100)));
      function setProgress(percent) {
         progressCircle.style.strokeDashoffset = circumference - (percent / 100) * circumference;
      } 
      if (days == a) {
         document.getElementById("quote").innerHTML = "Happy Enlistment! Welcome aboard to EngHub Ferry...";
      }
      else {
         const quotes = [
"Don't count the days, make the days count!",
"At the end of the day, the day ends", 
"You think, I thought, Who confirm?", 
"Rush to wait, wait to rush",
"2 years very fast one...",
"Tough times don't last, tough men do",
"If you're reading this pass lights out, good luck tmr",
"With this weapon, I will defend my country, Sir!",
"Thank you for your service",
"Thank you for keeping our camp safe",
"IA IA IA! Safe Tilt Check!",
"Nothing to do high kneel",
"Never mind, take your time, the whole company waiting for you",
"You give me standard, I give you welfare",
"Company Heads Out! Go make my 1 x magazine appear!",
"Sergeant, I forgot to bring my smart 4, can I wear long 4 instead?",
"Whole lot fall in! I give you 30 seconds, timer carry on!",
"I don't care. Cannot also must can",
"Last man can hear me?",
"Everything out. Everything in. Everything on.",
"If troopers are not doing anything, something is wrong",
"Today you sweat, tomorrow she wet",
"WOSPEC only have 2 jobs. Area management and area cleanliness",
" 1 2 Good morning sergeant major 1 2",
"Auntie, give me the most handsome number 1 haircut",
"Hurry up send arms! Where my armskote helper?",
"No excuse for you, don't tell me your sad story, you want you go talk to jesus",
"Where is my COS? Area cleaning done?",
"EHH RECROOT! FINGER OFF THE TRIGGER!",
"Sergeant major, We have cleared away the GS table as requested by you. Can go canteen now?",
"Don't make your problem my problem",
"I love dinner, especially the ones on Friday"
];
         let randNum = Math.floor(Math.random() * 32);
         document.getElementById("quote").innerHTML = quotes[randNum];
      }
   }
globalVar1 = days;
globalVar2 = a;
share();
}