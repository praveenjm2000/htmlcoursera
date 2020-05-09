(function speakernames () {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var k = 0; k < names.length; k++) {

      var firstLetter = names[k].charAt(0).toLowerCase();
    
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[k]);
      } else {
        helloSpeaker.speak(names[k]);
      }
    }
    })();