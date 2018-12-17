var Links = {
    setColor : function(color) {
        // var aList = document.querySelectorAll('a');
        // var i = 0;
        // while(i < aList.length) {
        //     aList[i].style.color = color;
        //     i++;
        // }
        $('a').css('color', color);
    }
}
var Body = {
    setColor : function(color) {
        var bodyStyle = document.querySelector('body').style;
        bodyStyle.color = color;
    },
    setBackgroundColor : function(color) {
        var bodyStyle = document.querySelector('body').style;
        bodyStyle.backgroundColor = color;
    },
}
function dayAndNightModeSwitch(self) {
    var bodyStyle = document.querySelector('body').style;
    if (self.value == 'night') {
        self.value = 'day';
        Body.setBackgroundColor('black');
        Body.setColor('white');
        
        Links.setColor('powderblue');
    } else {
        self.value = 'night';
        Body.setBackgroundColor('white');
        Body.setColor('black');
        
        Links.setColor('blue');
    }
}