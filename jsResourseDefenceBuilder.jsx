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
//########        which you want to protect against change,                    ########
//########        to the last line of code                                     ########
//########                                                                     ########
//########    After, save this JSX-script and run it under ESTK.               ########
//########                                                                     ########
//########    After, you see a code of function "ifJSResourseNotModify()"      ########
//########        in ESTK Javascript Console,                                  ########
//########        copy it & paste to your code in file with same               ########
//########        <javascriptresource> to part under JSXBIN protection         ########
//########                                                                     ########
//########    If you want to check correctness of returned code                ########
//########        paste it to code in "jsResourseDefenceChecker.jsx"           ########
//########        & now you have a function, which return false, if            ########
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
    var functionCode = "\r\r\rfunction ifJSResourseNotModify(){";

    functionCode += "\r    var jsResourceArray = [\r";
    for (i=0; i< codeLinesOfJSResource; i++){
        functionCode += "        [" + arrOfNumAndString[i] + "],\r";
    }
    functionCode += "    ];";

    functionCode += "\r\r    for (var i=0; i<jsResourceArray.length; i++){";
    functionCode += "\r        if (returnLineFromMyCode(jsResourceArray[i][0]) !== jsResourceArray[i][1]) {return false}";
    functionCode += "\r    }\r    return true;\r\r    function returnLineFromMyCode(position) {";
    functionCode += "\r        var fileWithMyScript = new File($.fileName);";
    functionCode += "\r        var lineOfCode;\r        try {";
    functionCode += "\r            fileWithMyScript.open('r');\r            fileWithMyScript.seek(position);";
    functionCode += "\r            lineOfCode = fileWithMyScript.readln();\r        } catch(someError) {";
    functionCode += "\r            alert(someError);\r        } finally {\r            try {";
    functionCode += "\r                fileWithMyScript.close();\r            } catch(someError) {}";
    functionCode += "\r        }\r        return lineOfCode;\r    }\r}"

    return functionCode;
}

buldArrayOfNumAndString(); // paste quantity of lines with <javascriptresource>