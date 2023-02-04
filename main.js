function welcome(){
  let name = prompt('Hi, there what is your name?');
  
  switch (name) {
    case "Xystus":
      function toti() {alert('Hi there Zes, hope you like this website. Like how would you rate it? Feedback send it to one of my socialmedia platforms listed on the page. -This message has been programed to only be seen by Xystus.- Hahaha :-)');}
      break;
   case "xystus ":
      toti();
      break;
    case "Xystus ":
      toti();
      break;
    case "xystus":
      toti();
    break;
  }
  
  if (name != null) {
    alert('Hi there '+ name + ' thank you for visiting my website')
  }
};

setTimeout(welcome(), 60000)
