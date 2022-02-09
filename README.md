# HTML-CSS-Website

# Overview

This project is from the perspective of a gym business looking to advertise itself in a webpage. It will encourage people to get into fitness as well as offering classes and shoeing pricing information and even have methods of contacting the business in a form.

The aim of the website is to be attractive, easy to use and simple to navigate. This means all users shouldn't have an issue getting to all of the content and interacting with the website where possible.

# User Stories

As the website owner:

* Communicate all information effectively in a clear and easy to understand way as well as being attractive and clean.

* Advertise goods and classes that will be profitable to the business when bought.

* Be user friendly and responsive so everyone can access the information on any device.

As a first time website user:

* To be introduced to fitness, and be offered fitness based products/services and beginner information/advice.

* To be able to directly contact the business using a form, so any questions can be submitted.

* Find links to business' social media and other contacts so their online presence can grow.

As a returning user:

* To be able to find information such as class times and membership prices.

* Ask a question or revisit any business information quickly and easily.

# Structure

I used bootstrap to make the majority of my webpage reponsive and to give the page its structure. Bootstrap allows the website to be scaled down onto smaller devices as it will restructure the webpage as the dimensions of the page change. This will increase the amount of browsers my website can be viewed on so I am not restricted by the device that the pages viewers are using.

# Wireframes

# Features 

## Nav Bar

![NavBar](/assets/images/navbar.png)

The Nav Bar is designed to be simple and easy to use. The links will disappear and a clickable dropdown menu will appear when the media query is triggered. This makes the nav bar responsive on all devices.

![NavBar](/assets/images/navbardropdown.png)

## Footer

![Footer](/assets/images/footer.png)

The footer is basic and easy to use. It also has icons with links to social pages which open in new tabs, to aid best practices.

## Landing Page

![Footer](/assets/images/landingpage.png)

The landing pages on the site are designed to be eye catching and attracctive. This is done by using contrasting colours and keeping to a set theme.

## Colours

The main colour I used was 'rgb(90,90,90)' and white.

These 2 colours went well together as they give a modern look and go well against each other.

## Fonts

The main fonts used were 'font-family: 'Raleway', sans-serif;' and 'font-family: 'Bebas Neue', sans-serif;'.

I chose these fonts as they were clear and neat, and also looked good against the chosen colours.

## Technologies used

#### HTML5 

 As the main language for structure.

#### CSS

For styling

#### Javascript

I used some javascript to toggle a class list so the nav bar can be interacted with.

#### Bootstrap

Bootstrap 

CSS framework for mobile responsiveness.

#### Google Fonts

To select my main font and some others for styling

#### Fontawesome

Used some icons from font awesome to make the project more attractive.

#### Git

Used for version control

#### Gitpod

Used as a workspace and hosting platform

#### Github

To host and store my project remotely.

# Testing

I used Chrome developer tools to find problems with sizing and fix them by altering my code. 
The margin and padding feature especially helped me undestand some problems I was having with bootstrap preloading styles to my code.

## User Stories Testing

As the website owner:

1. Communicate all information effectively in a clear and easy to understand way as well as being attractive and clean.

* Text is large and contrasts with the background colour meaning it is always clear and easy to read. The font is also basic to improve readability.

2. Advertise goods and classes that will be profitable to the business when bought.

* Classes are shown with images.

3. Be user friendly and responsive so everyone can access the information on any device.

* Site is responsive and user friendly so all people can view on all devices.

As a first time website user:

1. To be introduced to fitness, and be offered fitness based products/services and beginner information/advice.

* Website gives the basic information and offers memberships.

2. To be able to directly contact the business using a form, so any questions can be submitted.

* Contact form allows direct contact with the business.

3. Find links to business' social media and other contacts so their online presence can grow.

* Footer gives all links to socials and opens in a new tab to not divert the user off the page.

As a returning user:

1. To be able to find information such as class times and membership prices.

* NavBar is quick and easy to use.

2. Ask a question or revisit any business information quickly and easily.

* Form is quickly accessible throug the NavBar.

## Lighthouse

![Lighthouse Before](/assets/images/lighthousebefore.png)

The issues I had with lighthouse was the largest contentful paint. This was due to my images being poorly optimised and large. I used a site called tinyPNG to compress my images and saved 10 seconds (from 19.8 seconds to 8 seconds) on the largest contentful paint, although the performance score only went up by 3 points. SEO, Accessibility and Best practices scores were high.

![Lighthouse After](/assets/images/lighthouseafter.png)



## Validator Testing

HTML

*  No errors found when HTML code passed through https://validator.w3.org/

CSS

*  No errors found when CSS code passed through https://jigsaw.w3.org/

## Responsivity Testing 

The site was tested on desktop, laptop, and large mobile devices and tablets. I used the 'Responsive tool' in chrome developer tools to aid me in making my website responsive as it was not fully done using bootstrap.

![Media Query](/assets/images/mediaquery.png)

For example this media query was to stop the text on the landing image from ruining the responsivity on smaller devices.

## Unfixed bugs

1. The responsivity on the members page is bad for very small devices. I could not find a way to stop the div from shrinking and overflowing into the div below.

2. Form has autofil off, form is not secure. Im unsure but I assume it has something to do with protocol of 2 sites.

# Deployment

This project was deployed on github pages. I used gitpod as my developer environment and committed often to ensure good version control. Git push allowed me to save changes to gihthub.

Steps to deploying project on github pages:

1. Navigate to settings on desired repository.
2. Locate the github pages handle.
3. Select the main branch and root directory.
4. Deploy the site.

The site can also repository locally.

1. Navigate to the repository and the files.
2. Download the zip file containing the code.
3. Extract the file and use in an appropriate environment.

## Credits

Although not full copied I did use concepts and some lines of code from WebDevSimplified to create the NavBar. This is shown.

@media (max-width: 1250px) {
    
    .navbutton {
        display: flex;
    }

    .links {
        width: 100%;
        display: none;
    }

    .navbar {
        flex-direction: column;
        align-items: flex-start;
    }

    .links ul {
        width: 100%;
        flex-direction: column;
    }

    .links li {
        text-align: center;
    }

    .links.active {
        display: flex;
    }
}

Websites used:

* https://stackoverflow.com/

* https://www.w3schools.com/

### Images 

All website images downloaded with licence from [Shutterstock](https://www.shutterstock.com/)


