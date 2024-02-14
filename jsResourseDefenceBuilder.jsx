<javascriptresource>
<name>scriptName</name>
<menu>filter</menu>
<about>info about your script</about>
<category>scriptCathegory</category>
</javascriptresource>

//#####################################################################################
//########                                                                     ########
//########    Paste your <javascriptresource> to the begin of this script      ########
//########    paste natural N - quantity of lines with <javascriptresource>,   ########
//########        which you want to protect against change                     ########
//########        to the last line of code                                     ########
//########                                                                     ########
//########    After, save this JSX-script and run it under ESTK.               ########
//########                                                                     ########
//########    After, you see an array in ESTK Javascript Console,              ########
//########        paste it to code in "jsResourseDefenceChecker.jsx"           ########
//########        & make a function, which return false, if                    ########
//########        <javascriptresource> changes.                                ########
//########                                                                     ########
//#####################################################################################


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


function buldArrayOfNumAndString(codeLinesOfJSResource){
    codeLinesOfJSResource = codeLinesOfJSResource || 6;
    var arrOfNumAndString = [];

    var i=1;
    var strOfCode ="";
    while (arrOfNumAndString.length < codeLinesOfJSResource){
        strOfCodeNext = returnLineFromMyCode(i) || "";
        if (strOfCodeNext.length>strOfCode.length){
            var arrOfNumAndStringElement = [i, "\"" +strOfCodeNext + "\""];
            arrOfNumAndString.push(arrOfNumAndStringElement);
        }
        strOfCode = strOfCodeNext;
        i++;
    }
    var result = "\r    var jsResourceArray = [\r";
    for (i=0; i< codeLinesOfJSResource; i++){
        result += "        [" + arrOfNumAndString[i] + "],\r"
    }
    result += "    ];";
    return result;
}

buldArrayOfNumAndString(); // paste quantity of lines with <javascriptresource>