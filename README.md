EAM PROFILE GENERATOR 

In this homework assignment, your challenge is to build a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person. Since testing is a key piece in making code maintainable, you will also be ensuring that all unit tests pass.
The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. This assignment must also pass all unit tests. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user.


*****

### REQUIRED 

### Classes
The project must have the these classes: `Employee`, `Manager`, `Engineer`,
`Intern`. The tests for these classes in the `tests` directory must all pass.

The first class is an `Employee` parent class with the following properties and
methods:

  * name
  * id
  * title
  * getName()
  * getId()
  * getEmail()
  * getRole() // Returns 'Employee'

The other three classes will extend `Employee`. 

In addition to `Employee`'s properties and methods, `Manager` will also have:

  * officeNumber

  * getRole() // Overridden to return 'Manager'

In addition to `Employee`'s properties and methods, `Engineer` will also have:

  * github  // GitHub username

  * getGithub()

  * getRole() // Overridden to return 'Engineer'

In addition to `Employee`'s properties and methods, `Intern` will also have:

  * school 

  * getSchool()

  * getRole() // Overridden to return 'Intern'

### User input

The project must prompt the user to build an engineering team. An engineering
team consists of a manager, and any number of engineers and interns.

### Roster output

The project must generate a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

  * Name

  * Role

  * ID

  * Role-specific property (School, link to GitHub profile, or office number)

*****

### TECH USED 

NPM

  -Dependencies

    *Jest

    *FS

    *Inquirer

    *RX

HTML

CSS

JAVASCRIPT

Runs as Node CLI

*****
### WORKING ON THE PROJECT

This was an interesting homework, which pulled the front end and the back end together.  I enjoyed styling the layout and colors.
As is required, the code passed testing and can put the information from the command line into the html with the workers information.  The app creats a product that shows a mangager and their team.

*****
### PROBLEMS

I was about 80% done and started running into trouble with passing the information into the html layout.  It would just generate added divs into the html.  I had to remove a good amount of code and redo the “push” so that it went into and created the required html page.  Once I was able to do that, I ran into the problem of passing all the test.  The generating html worked fine, with all the required information pulling up, but it failed all the test.  Lucky these where easy to fix, with small adjustments to the code and then it would pass the required testing.

*****
### FINISHED CODE

This project was created by Robert Bovee with the help of a Tutor, the TAs, and Youtube.

Please see the video below for the fully functioning assignment.



![SSH Instructions 6](./Assets/workingApp.gif "SSH Instructions 6")


*****

# Home

![Home](Server/build/assets/home.PNG " SSH Instructions 6")

# About Me

![About Me](Server/build/assets/aboutme.PNG " SSH Instructions 6")

# Portfolio 

![Portfolio](Server/build/assets/projects.PNG " SSH Instructions 6")

# Contact Me

![Contact Me](Server/build/assets/contactme.PNG " SSH Instructions 6")

*****
