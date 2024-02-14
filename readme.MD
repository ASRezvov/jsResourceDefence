### Script for Adobe applications
---

## Protect /<javascriptresource/> with JSXBIN

---

Adobe JSX-scripts has technology of protection code, known "Export As Binary". 
After this we have JSXBIN-script, & code in this script is human unreadable.
But, if we have /<javascriptresource/> in our code, they begin unreadable for applications.

What structure of script with /<javascriptresource/> and with JSXBIN protection?

```
<javascriptresource>
    <name>Script Name</name>
    <menu>filter</menu>
    <about>about script</about>
    <category>script cathegory</category>
</javascriptresource>

eval("""@JSXBIN@ES@2.0@MyBbyBn.... code from jsxbin file .....""")
```

But in this case /<javascriptresource/> section is without any protection.

---

Script "jsResourseDefenceBuilder.jsx" build a code of function,
which return "false" if /<javascriptresource/> modified by user.

This function we paste to our script, make JSXBIN, and paste this JSXBIN code,
as parameter of "eval()".

