<javascriptresource>
<name>scriptName</name>
<menu>filter</menu>
<about>info about your script</about>
<category>scriptCathegory</category>
</javascriptresource>

//##################################################################################################################//
//########                                                                                                  ########//
//########                          Copy next part of code to your script                                   ########//
//########                                                                                                  ########//
//##################################################################################################################//


function ifJSResourseNotModify(){
    
    //#####################################################################################//
    //########                                                                     ########//
    //########     Build this array with script "jsResourseDefenceBuilder.jsx"     ########//
    //########         Run it in ExtendScript Tool Kit                             ########//
    //########         & copy it from ExtendScript "Javascript console"            ########//
    //########                                                                     ########//
    //########     This is an example of <javascriptresource>                      ########//
    //########                                                                     ########//
    //########     If you want to check correctness, paste your                    ########//
    //########         <javascriptresource> to the begin of this file              ########//
    //########         & run this script in ESTK/                                  ########//
    //########                                                                     ########//
    //#####################################################################################//

    var jsResourceArray = [
        [3,"<javascriptresource>"],
        [25,"<name>scriptName</name>"],
        [50,"<menu>filter</menu>"],
        [71,"<about>info about your script</about>"],
        [110,"<category>scriptCathegory</category>"],
        [148,"</javascriptresource>"],
    ];

    for (var i=0; i<jsResourceArray.length; i++){
        if (returnLineFromMyCode(jsResourceArray[i][0]) !== jsResourceArray[i][1]) {return false}
    }
    return true;

    function returnLineFromMyCode(position) {
        var fileWithMyScript = new File($.fileName) ;
        var lineOfCode ;
        try {
            fileWithMyScript.open('r') ;
            fileWithMyScript.seek(position) ;
            lineOfCode = fileWithMyScript.readln() ;
        } catch(someError) {
            alert(someError) ;
        } finally {
            try {
                fileWithMyScript.close();
            } catch(someError) {}
        }
        return lineOfCode ;
    }
}

//##################################################################################################################//
//########                                                                                                  ########//
//########                          End of part of code, which need to copy                                 ########//
//########                                                                                                  ########//
//##################################################################################################################//

ifJSResourseNotModify(); //run this script & see Result in ESTK Javascript Console