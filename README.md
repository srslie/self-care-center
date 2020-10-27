# Self Care Center
## Overview
How can we care for ourselves? One way is with affirmations and mantras!

 - Affirmations are thoughts of positive self-empowerment, meant to assert your self-worth.
 - Mantras are repetitive phrases that are repeated again and again during mindfulness practices.

I built an app that helps users remind themselves of their inherent value!

This Solo Challenge gave me opportunities to:
  - Gain experience building an application that utilizes HTML, CSS and JavaScript
  - Write HTML and CSS to match a provided comp
  - Understand how to listen to and respond to user events
  - Individualize my programming skill set

## Contributors:

This site matches a comp from the Turing School: to see more look in the instructions.md file.

The site execution was done by me, Alice.

Thanks to my mentor, Scott Schipke, particularly for explanations regarding the local storage and refactoring, and Gabrielle Joyce, for holding me accountable for both working and breaks. Also shoutout to my partner for cooking me food while I fought with CSS.

## Support:

If you have any issues with this site, please read the affirmations again carefully and re-evaluate your concerns. If they're still there, reach out to aliceruppert@gmail.com.

## Self-Assessment:

- My workflow is the biggest area needing improvement. While working on this, because I was only accountable to myself, I made a few local commits, one attempt at a feature branch, and only a handful of remote pushes. I need to get in the habit of small, atomic commits and remote backups, with a new branch for each feature. While I believe I'll be better at this in any settings where I'm collaborating and therefore accountable to others, or others need my work to continue theirs, I've also decided to start setting a reminder on my pom timer so that I make more commits.

### Features

This project's main goal was to provide feature options I could choose to incorporate. I choose the following:

#### MVP

- basic comp matching
- When a user selects a message option and then clicks the "Receive Message" button, the user sees a random message from the list of possible messages for that category
- When the message appears, the mediation icon disappears from the message area

#### Error handling and clear button

- User is not be able to click the "Receive Message" button unless they have selected a message option.
- The user can click a clear button, which clears the page of any message .
- User should only be able to click the clear button if a message is visible.
- When the clear button is clicked and the message is removed, the image of the meditation icon should re-appear.
- All buttons have some error handling.

_Note: You can disable these buttons, hide them, or display a message to the user for error handling. The choice is yours!_

#### User can add their own message
- "Add Message" button added beneath the
- When the user clicks "Add Message" a form will appear in the message box. The form contain two inputs - one to specify which type of message is being added, and another to add the text of the message itself. The form uses the existing "Receive Message" button and selection buttons.
- The user must specify the type of message.
- When the user clicks the "Receive Message" button, that message is added to the appropriate list of messages.
- When a new message is added, that message is automatically be displayed in the message box, instead of the meditation icon.
- These new elements to the page match the style of existing elements.

#### User can favorite a message

- When a message appears, it appears with a "Favorite" button.
- When the "Favorite" button is clicked, that message is added to a new list of favorite messages.
- Users can see favorites displayed under the message display box.

_NOTE: This persists on page refresh_

#### User never sees a repeated message

- User never sees a repeated message until they've seen them all, and after they've seen them all they're notified that they will now start seeing repeat messages.

#### Responsive Design

- I believe my app responds adaptively to the user's screen size. I set my CSS with percentages, vh, and checked the different scalibility views in my dev tools, along with manual manipulation of the browser window. If my design had any horizontal navs or anything, I could have used a media query, but for the current use, it looks great at all sizes!

#### Local Storage

- The user's favorite messages persist, even if they reload the page! I have the favorites displayed under the message box, with the idea that more repetition of a mantra or affirmation is better! If the user is fresh, they have none displayed, but once they start favoriting, those remain there regardless of page refreshes!
