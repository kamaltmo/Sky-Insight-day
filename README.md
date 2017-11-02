# sea-insight-day
The SEA Insight Day codebase. This task is designed to be simple enough that anybody (regardless of experience) can produce working software.

## Getting Started
The goal of the task is to produce a working piece of software that showcases Sky content. There are four templates to choose from: Sky Cinema, NOW TV, Sky Sports and Sky 1. Files of note:

| File | Description | 
| -------- | ----- | 
| `index.html` | The index page is used to launch the web application. It contains an iframe that houses `app.html`. Developers should not have to touch this file |
| `app.html` | The main HTML page - this is where developers should start coding their application |
| `css/styles.css`  | Location for application styles (included in HTML) |
| `js/script.js` | Location for the bulk of JavaScript |

## Bug List
There are a number of deliberate bugs introduced into the codebase that both testers and software engineers can fix. These are:
* Issue when window is resized (iPhone does not stay a consistent ratio)
* Inconsistent formatting across CSS files
* Indentation poor in app.html
* Bootstrap not the latest version (3.3.5 > 3.3.7)
* .placeholder and .site should be ID’s not classes
