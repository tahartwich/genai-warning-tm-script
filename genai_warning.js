// ==UserScript==
// @name         GenAI Warning
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Warning prompt for generative AI sites.
// @author       You
// @match        *://chatgpt.com*/*
// @match        *://openai.com*/*
// @match        *://gemini.google.ai*/*
// @match        *://meta.ai*/*
// @match        *://grammarly.com*/*
// @match        *://huggingchat.co*/*
// @match        *://copilot.microsoft.com*/*
// @match        *://chatsonic.pro*/*
// @match        *://writesonic.com*/*
// @match        *://claude.ai*/*
// @match        *://jasper.ai*/*
// @match        *://neuroflash.com*/*
// @match        *://poe.com*/*
// @match        *://scribehow.com*/*
// @match        *://quillbot.com*/*
// @match        *://wordtune.com*/*
// @match        *://*.ai*/*
// @match        *://*deepai.org*/*
// @icon
// @grant        window.close
// ==/UserScript==

if (window.trustedTypes && window.trustedTypes.createPolicy) {
    window.trustedTypes.createPolicy('default', {
        createHTML: string => string,
        createScriptURL: string => string,
        createScript: string => string,
    });
}

(function() {
    'use strict';

    // Define the warning message
    var newWarningMessage = '<img title="WANNON WATER LOGO WHITE-01" alt="WANNON WATER LOGO WHITE-01" src="https://cdn.intelligencebank.com/au/share/2dEP/RezW/Kbzp/original/WANNON+WATER+LOGO+WHITE-01" align="middle" width="320" height="116"></img>';
    newWarningMessage += "<br>";
    newWarningMessage += "<p style='font-family:Arial;color:rgba(233, 131, 0, 1);font-weight:bold;font-size:24px'>You are about to access a public Generative AI (GenAI) tool.</p>";
    //newWarningMessage += "<br>";
    newWarningMessage += "<p style='font-family:Arial;font-size:18px'>The Administrative Guideline on the safe and responsible use of GenAI requires that you only use publicly-available information with publicly-available tools. You should never input information that is sensitive in nature (including confidential, personal or health information) into this tool.</p>";
    //newWarningMessage += "<br>";
    newWarningMessage += "<p style='font-family:Arial;font-size:18px'>By clicking 'Confirm' you are confirming you understand the statement above.</p>";
    //newWarningMessage += "<br>";
    newWarningMessage += "<p style='font-family:Arial;font-size:18px'>For further guidance please review the following document in soControl:<br> <a style='color:rgba(233, 131, 0, 1)' href='https://wannonwater.sharepoint.com/:w:/r/sites/cdms/Published%20Documents/Use%20of%20text%20based%20Generative%20Artificial%20Intelligence%20(AI).DOCX?d=w0ffc87368927424d8966a935e0692832&csf=1&web=1&e=XiDnWx'>Use of text based Generative Artificial Intelligence (AI)</a></p>";
    //newWarningMessage += "<br>";

    // Create a div element for the warning message
    var warningDiv = document.createElement("div");
    warningDiv.style.position = "fixed";
    warningDiv.style.top = "50%";
    warningDiv.style.left = "50%";
    warningDiv.style.transform = "translate(-50%, -50%)";
    warningDiv.style.width = "40%";
    warningDiv.style.backgroundColor = "rgba(19, 49, 79, 1)";
    warningDiv.style.color = "white";
    warningDiv.style.padding = "20px";
    warningDiv.style.textAlign = "center";
    warningDiv.style.zIndex = "9999"; // Set a high z-index value
    warningDiv.innerHTML = newWarningMessage;

    // Create an Confirm button
    var confButton = document.createElement("button");
    confButton.textContent = " Confirm ";
    confButton.style.marginTop = "10px";
    confButton.style.marginRight = "100px";
    confButton.style.backgroundColor = "rgba(233, 131, 0, 1)";
    confButton.style.color = "white";
    confButton.style.border = "none";
    confButton.style.padding = "8px 16px";
    confButton.style.cursor = "pointer";

    // Attach click event listener to exit button
    confButton.addEventListener("click", function() {
        document.body.removeChild(warningDiv);
        document.body.removeChild(backgroundBlur);
    });

    // Append the exit button to the warning div
    warningDiv.appendChild(confButton);

    // Create an Exit button
    var exitButton = document.createElement("button");
    exitButton.textContent = " Close ";
    exitButton.style.marginTop = "10px";
    exitButton.style.backgroundColor = "white";
    exitButton.style.color = "black";
    exitButton.style.border = "none";
    exitButton.style.padding = "8px 16px";
    exitButton.style.cursor = "pointer";

    // Attach click event listener to exit button
    exitButton.addEventListener("click", function() {
        window.close();
    });

    // Append the exit button to the warning div
    warningDiv.appendChild(exitButton);

    // Create a div element for the background blur
    var backgroundBlur = document.createElement("div");
    backgroundBlur.style.position = "fixed";
    backgroundBlur.style.top = "0";
    backgroundBlur.style.left = "0";
    backgroundBlur.style.width = "100%";
    backgroundBlur.style.height = "100%";
    backgroundBlur.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    backgroundBlur.style.backdropFilter = "blur(5px)";
    backgroundBlur.style.zIndex = "9998"; // Set a z-index behind the warning div

    // Append the warning div and background blur to the body of the webpage
    document.body.appendChild(backgroundBlur);
    document.body.appendChild(warningDiv);
})();
