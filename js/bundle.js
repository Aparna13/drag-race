(function() {


  ChristmasTree      = function() {
  // l2 = document.getElementsByClassName("lights2");
  // this.$lights2 = document.getElementsByClassName('lights2');
  // var light2array = Array.prototype.slice.call(this.$lights2);

  // this.$lights3 = document.getElementsByClassName('lights3');
  // var lights3array = Array.prototype.slice.call(this.$lights3);

  // this.$lights4 = document.getElementsByClassName('lights4');
  // var lights4array = Array.prototype.slice.call(this.$lights4);
  
    
  },
 
  Dragster          = function() {
    
    this.$el = document.getElementById('dragster');

    this.$el.style.left = "0px";
  },

  Game              = function() {

    this.attachListeners();
    
    this.tree = new ChristmasTree();
 
    this.dragster = new Dragster();

    
  };
 
    

  Game.prototype.attachListeners = function() {
    var self = this;
    var counter = 0;
    
    window.addEventListener('keyup', function(event) {
      if (event.keyCode === 39) {
        self.dragster.advance();
      }
      counter += 10;
      if (event.keyCode === 39 && counter >10) {

        self.tree.lightChange();
        self.tree.lights3 ();
        self.tree.lights4 ();
        self.tree.lights5 ();
        }  
      if (counter<80)  {
        self.tree.lights6 ();
      }else{
        self.tree.lights7 ();

      }
      
    });
  };

  ChristmasTree.prototype.lightChange = function () {
      this.$lights2 = document.getElementsByClassName('lights2');
  for (var i = 0; i < this.$lights2.length; i++) {
      this.$lights2[i].style.background = "yellow";
    }
  };

  ChristmasTree.prototype.lights3 = function () {setTimeout (function () {
     this.$lights3 = document.getElementsByClassName('lights3');
    for (var i = 0; i < this.$lights3.length; i++) {
      this.$lights3[i].style.background = "yellow";
    }
      }, 1000);
  };
  
     

  ChristmasTree.prototype.lights4 = function () {setTimeout (function () {
     this.$lights4 = document.getElementsByClassName('lights4');
    for (var i = 0; i < this.$lights4.length; i++) {
      this.$lights4[i].style.background = "yellow";
    }
      }, 2000);
  };

  ChristmasTree.prototype.lights5 = function () {setTimeout (function () {
     this.$lights5 = document.getElementsByClassName('lights5');
    for (var i = 0; i < this.$lights5.length; i++) {
      this.$lights5[i].style.background = "yellow";
    }
      }, 3000);
  };

  ChristmasTree.prototype.lights6 = function () {setTimeout (function () {
     this.$lights6 = document.getElementsByClassName('lights6');
    for (var i = 0; i < this.$lights5.length; i++) {
      this.$lights6[i].style.background = "green";
    }
      }, 4000);
  };

  ChristmasTree.prototype.lights7 = function () {
     this.$lights7 = document.getElementsByClassName('lights7');
    for (var i = 0; i < this.$lights7.length; i++) {
      this.$lights7[i].style.background = "red";
    }
      
  };


  

 

  Dragster.prototype.advance = function() {
    // this should move the car across the screen 1px at a time
    this.$el.style.left = parseInt(this.$el.style.left, 10) + 10 + "px";
  };
  var g = new Game();

})();
