# GitHubProfileViewer

A web application to search github user and look at the user's profile with information such as Name, Bio, Pinned Repositories, etc.

![](<https://github.com/Prat18/GitHub-Profile-Viewer/blob/main/Screenshot%20(18).png>)
![](<https://github.com/Prat18/GitHub-Profile-Viewer/blob/main/Screenshot%20(19).png>)
![](<https://github.com/Prat18/GitHub-Profile-Viewer/blob/main/Screenshot%20(20).png>)

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
