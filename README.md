# Team-Profile-Generator

[Please click here for video tutorial!]()

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Questions](#questions)
* [Process](#process)

## Description 

## Installation 

To install this application, you will need to install the [Inquirer package](https://www.npmjs.com/package/inquirer)

## Usage

## Credits
Class Activities referenced: 10-16, 10-22, 10-24, 10-26, and 10-28.

## Questions

## Process

### Commit 1: Initial Commit
Created repository on GitHub

### Commit 2: Base Files
Added recommended folders and files. Installed needed packages.

### Commit 3: Init
Added the class js files into the library. Initiated to create json package. Made simple welcome function. 

### Commit 4: Manager Questions
Added the inquirer questions for entering the manager information!

### Commit 5: Employee
Now, using the guildlines from the instructions, I will build the employee class file and its test. The test passes! So next will to be to extend it to the other classes. 

### Commit 6: Manager
I wrote a test for the Manager class, extended the Employee class into the Manager class, and tested that it works. 

### Commit 7: Engineer
I wrote a test for the Engineer class, extended the Employee class into the Engineer class, and tested that it works. Next I will repeat this process for the Intern class. 

### Commit 8: Intern
I wrote a test for the Intern class, extended the Employee class into the Intern class, and tested that it works. Now all my tests pass! Yay!! Funfact, all test examples are based on Hello! Project members. Mitsui Aika, my favorite member, for employee, Takahashi Ai, former leader of Morning Musume, for manager, Sugaya Risako, member of Berryz Koubou (kanji for Kou being that used in engineering), for engineer, and Konemura Kirara, current member of the training program, as intern. Just a fun little easter egg :) Now! To go back to working on index, taking the inputed data for the manager, and turning it into something usable! 

### Commit 9: Is this a Manager?
For the process of writing to HTML, I'm wondering if I can make one function that then branches based on role, rather than a function per role. To test this, I'll see if I can write a function that takes the role as a parameter and uses that for an if/else branch. If role is manager, I have it print "This is a manager", and it works!
![image of a sample entry returning 'This is a manager'](https://github.com/Kayn-Pleiades/Team-Profile-Generator/blob/main/assets/img/isthisamanager.PNG)

### Commit 10: Manager info
I've moved the process section (this one) to the bottom of my README. As projects become more detailed, these sections will get longer. Because I choose to track my own commit-by-commit process as a demonstration of my growth as a coder, I want to continue keeping this log. However, it doesn't fit in with the usual README content, so by putting it at the bottom, it's there if you want to read it, but otherwise it's unobtrusive :) Back to the code though! To make sure that the class functions are working as they are meant to, I had each value print to the console. Next will be to take this and turn it into the HTML I want it to be.

### Commit 11: HTML Template
Changed some names to make things more clear. Now I will make the template for the HTML. 

### Commit 12: Manager Card 
Added the template code into index.js. Next step will be to start putting it together. 

### Commit 13: Make Card
Moved the card template to it's own function so I'm only writing it out once and not in every branch of the function it was already in.

### Commit 14: startPage
Added code to clear the html and put in the beginning code.

### Commit 15: addCard
The manager card is now added to the html. This bit of code will work for all employee cards!

### Commit 16: menu
Added the selection menu and tested that it works 

### Commit 17: endPage
When 'I am done' is selected on the menu, the end of the html is added and the app ends. Now for the other two types of employees. After that, I should be about done!

### Commit 18: Engineer Card
The process to add engineers to the page is now functioning!