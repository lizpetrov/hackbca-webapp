function loadJournalPage() {
    loadNotifications();
    var data = "";
    
    httpGetAsync('http://www.classreveal.com/a/display.php?name=items', function(data) {
        data = data.split("%%");
        console.log(data);
        
        var myTableData = [];
        
        for(var i = 0; i < data.length; i++)
            {
                if(data[i].length < 4){}
                    //sdfgh
                else {
                    var eventData = data[i].split("|");
                    var myTableValue = {
                        "number": i + 1,
                        "obj": eventData[0],
                        "loc": eventData[1],
                    }
                    myTableData.push(myTableValue);
                   // console.log(myTableValue);
                }
            }
        
        var text = "";

        
        for(var i = 0; i <= myTableData.length-1; i++)
            {
                text += "<tr><td>" + myTableData[i].obj + "</td><td>" + myTableData[i].loc + "</td><td><a href = \"#\" onClick = \"removeObject(" + myTableData[i].number + ")\">X</a></td></tr>";
            }
        
        console.log(text);
        var element = document.getElementById("addTableValuesHere");
        element.innerHTML = "";
        //var newElement = text;
        element.innerHTML = text;
    });
}