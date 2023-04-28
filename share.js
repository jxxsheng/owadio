const facebook = document.querySelector(".facebook-btn");
const twitter = document.querySelector(".twitter-btn");
const whatsapp = document.querySelector(".whatsapp-btn");
const telegram = document.querySelector(".telegram-btn");

function share() {

  let daysLeft = globalVar1;
  let days = globalVar2;
  let postUrl = encodeURI(document.location.href);
  let postTitle;

  if (daysLeft <= 0){
    postTitle = encodeURI("WHERE GOT TIME? OWADIO!\n");
  }
  else if (daysLeft == 1){
    postTitle = encodeURI("1 MORE DAY TO ORD!\n")
  }
  else if ((daysLeft - days) > 1){
    postTitle = encodeURI((daysLeft - days) + " more days to Enlistment!\n");
  }
  else if ((daysLeft - days) == 1){
    postTitle = encodeURI((daysLeft - days) + " more day to Enlistment!\n");
  }
  else {
    postTitle = encodeURI(daysLeft + " days to ORD!\n");
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