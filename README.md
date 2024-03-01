# This is a chrome extension and doesn't work as of February 2024


<div class="prose dark:prose-invert inline leading-normal break-words min-w-0 [word-break:break-word]"><span class="">Sure, here's a sample README.md file for your Firefox extension:</span>

### Introduction

<span class="">This Firefox extension allows you to save URLs to a bookmark folder by pressing CTRL + ALT and clicking on a link. It uses HTML, CSS, and JavaScript.</span>

### Getting Started

1.  <span class="">Clone this repository or download the files and place them in a new directory.</span>
2.  <span class="">Open Firefox and go to about:debugging#/runtime/this-firefox.</span>
3.  <span class="">Click on "Load Temporary Add-on" and select any file in your extension directory.</span>
4.  <span class="">The extension should now be loaded in Firefox. To test it, press CTRL + ALT and click on a link. A popup will appear with a dropdown menu to select a bookmark folder. Select a folder and click "Save URL" to save the current URL to that folder.</span>

### Directory Structure

<span class="">The extension directory contains the following files:</span>

*   <span class="">manifest.json: The extension's manifest file, which defines the extension's metadata, permissions, and functionality.</span>
*   <span class="">popup.html: The HTML file for the popup that appears when the user presses CTRL + ALT and clicks on a link.</span>
*   <span class="">popup.js: The JavaScript file that handles the popup's functionality, such as populating the dropdown menu with bookmark folders and saving the URL to the selected folder.</span>
*   <span class="">popup.css: The CSS file that styles the popup.</span>
*   <span class="">background.js: The JavaScript file that runs in the background and sets the default bookmark folder on installation.</span>
*   <span class="">icon.png: The 48x48 pixel icon for the extension.</span>

### Manifest File

<span class="">The manifest file defines the extension's metadata, permissions, and functionality. It includes the following keys:</span>

*   <span class="">manifest_version: The version of the manifest file format.</span>
*   <span class="">name: The extension's name.</span>
*   <span class="">version: The extension's version.</span>
*   <span class="">description: A short description of the extension.</span>
*   <span class="">permissions: The permissions the extension requires, such as access to the active tab, storage, and bookmarks.</span>
*   <span class="">browser_action: The browser action that displays the extension's icon in the toolbar.</span>
*   <span class="">background: The background script that runs on installation and sets the default bookmark folder.</span>
*   <span class="">icons: The icon file for the extension.</span>
*   <span class="">commands: The command that defines the keyboard shortcut for saving a URL to a bookmark folder.</span>

### Popup HTML and JavaScript

<span class="">The popup HTML file contains a dropdown menu to select a bookmark folder and a button to save the URL to the selected folder. The JavaScript file handles the popup's functionality, such as populating the dropdown menu with bookmark folders and saving the URL to the selected folder.</span>

### Background Script

<span class="">The background script runs on installation and sets the default bookmark folder. It uses the chrome.storage.sync API to store the default folder ID in the extension's storage.</span>

### Icon

<span class="">The icon file is a 48x48 pixel PNG image that represents the extension in the toolbar.</span>

### Contributing

<span class="">Contributions are welcome! If you'd like to contribute to the extension, please fork the repository, make your changes, and submit a pull request.</span>

### License

<span class="">This extension is licensed under the MIT License.</span></div>