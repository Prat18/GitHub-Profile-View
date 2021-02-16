# GitHubProfileViewer

A web application to search github user and look at the user's profile with information such as Name, Bio, Pinned Repositories, etc.

The website has two pages, first is the search page where user can search the github profiles and the other page is the profile page where user can click a profile card on search page and view their profile. It has other features like infinite scrolling, loading spinner and route guard.

Following are the framework/library/Api used:  
- Bootstrap 4.6.0  
- Angular 9.1.14  
- Github API  
- Third party API (see API used)  


Search page:  
- While the entire search page is rendereing, a loading animation is displayed.
- After rendering the page it will look like this.  

![](<https://github.com/Prat18/GitHub-Profile-Viewer/blob/main/Screenshot%20(18).png>)

Search results: (keyword: "this")  
- After searching user with name "this", first 9 cards will be rendered.
- Scrolling till the end of page will automatically render next 9 cards ont the page.
- While rendering the next page a spinner animation is displayed.  

![](<https://github.com/Prat18/GitHub-Profile-Viewer/blob/main/Screenshot%20(19).png>)

Profile view:  
- After clicking on a profile, profile information will be displayed on page http://domain/profile
- All the profile details are available as shown in the folloing image.  

![](<https://github.com/Prat18/GitHub-Profile-Viewer/blob/main/Screenshot%20(20).png>)

## Error handling  
- Profile page is guarded and user cannot access this page unless it has been triggerd from the search page (profile card).
- Search input has a minium length o 1 character.
- In case the API fails an error message is displayed on top of screen.

## API used

[GitHub API](https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api) for searching users and fetching information.
For fetching pinned repositories I have used [this](https://dev.to/nsadisha/get-pinned-github-repositories-as-json-1hff) public API.

## Error scenarios

API returns status code 403 if it reaches it's limit. In that case proper error message has been displayed in the application.

![](<https://github.com/Prat18/GitHub-Profile-Viewer/blob/main/Screenshot%20(17).png>)

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
