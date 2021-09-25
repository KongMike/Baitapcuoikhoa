var links = new Array();
    links[0] = "http://buildshruggie.com/";
    links[1] = "http://endless.horse/";
    links[2] = "http://www.thatsthefinger.com/";
    links[3] = "http://www.smashthewalls.com/";
    links[4] = "https://www.bouncingdvdlogo.com/";
    links[5] = "http://papertoilet.com/"
    links[6] = "https://corndog.io/"
    links[7] = "https://mondrianandme.com/"
    links[8] = "http://koalastothemax.com/"
    links[9] = "http://eelslap.com/"
    links[10] = "http://ismycomputeron.com/"
    links[11] = "http://pointerpointer.com"

    
    function openLink() {
      var i = Math.floor(Math.random() * links.length);
      // parent.location = links[i];
      window.open(links[i]);
      return false;
    }