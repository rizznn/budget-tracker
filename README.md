# budget-tracker
This is an updated existing budget tracker application to allow for offline access and functionality where the user will be able to add expenses and deposits to their budget with or without a connection.  If the user enters transactions offline, the total should be updated when they're brought back online. The app is deployed to Heroku.

## Technologies
This website is created with Visual Studio Code using service worker, manifest, indexedb. Project repo created here in Github. Deployed application to Heroku.

## Installation
* Run the app using the [Heroku link](https://budget-tracker-app-pwa-bt.herokuapp.com/)


OR


* by cloning the repo:
1. Make sure you have node.js installed on your system (if you have node.js, you have npm as well)
2. Navigate to the directory where you want the repository to be cloned in your terminal.
3. Clone the repository: in your terminal, `git clone https://github.com/rizznn/budget-tracker.git`for https OR `git clone git@github.com:rizznn/budget-tracker.git` for ssh
4. Navigate to the directory of the cloned repository in your terminal.Make sure you have MySQL installed on your system
5. Go to MySQL shell by typing  `mysql -u root -p` 
6. A password will be asked to login to MySQL shell

      NOTE:     Some system might get the error message "Command not found", add the following line of code to your `.bash_profile` file (or if you’re using ZSH,                         add it to your `.zshrc` file):

          export PATH="${PATH}:/usr/local/mysql/bin/"

7. In MySQL shell, type  `source db/schema.sql;`  to run the file
8. In your terminal: `npm install` to install the npm modules


## Usageuse the [Heroku link](https://budget-tracker-app-pwa-bt.herokuapp.com/)
* User will be able to add and delete posts, and comment to other posts

## Screenshots
![image](https://user-images.githubusercontent.com/80712058/134537696-5a4ee3fb-ce1f-4482-a3ae-a6551dccdcc1.png)

## Contributing
Contact me or create an issue or pull request

## Questions
  To reach me for additional questions:

  Github username: rizznn 

  Github link: [https://github.com/rizznn](https://github.com/rizznn) 

  Email me at [rizzel_nolasco17@yahoo.com](mailto:rizzel_nolasco17@yahoo.com)

## Link to application repo
https://github.com/rizznn/budget-tracker

## Link to deployed Heroku app
https://budget-tracker-app-pwa-bt.herokuapp.com/



