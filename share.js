const facebook = document.querySelector(".facebook-btn");
const twitter = document.querySelector(".twitter-btn");
const whatsapp = document.querySelector(".whatsapp-btn");
const telegram = document.querySelector(".telegram-btn");

function share() {

  let days = globalVar1;
  let a = globalVar2;
  let postUrl = encodeURI(document.location.href);
  let postTitle;

  if (days <= 0){
    postTitle = encodeURI("WHERE GOT TIME? OWADIO!\n");
  }
  else if (days == 1){
    postTitle = encodeURI("1 MORE DAY TO ORD!\n")
  }
  else if ((days - a) > 1){
    postTitle = encodeURI((days - a) + " more days to Enlistment!\n");
  }
  else if ((days - a) == 1){
    postTitle = encodeURI((days - a) + " more day to Enlistment!\n");
  }
  else {
    postTitle = encodeURI(days + " days to ORD!\n");
  }

  let postTwitter = postTitle.replace("%0A"," ");

  facebook.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );

  twitter.setAttribute(
    "href",
    `https://twitter.com/intent/tweet?text=${postTwitter}&url=${postUrl}`
  )
  whatsapp.setAttribute(
    "href",
    `https://wa.me/?text=${postTitle}${postUrl}`
  );

  telegram.setAttribute(
    "href",
    `https://t.me/share/url?text=${postTitle}&url=${postUrl}`
  );
}
share();