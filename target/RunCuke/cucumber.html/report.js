$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Like_Dislike_Comment.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance Testing of Hitting Like, Dislike and adding Comment to the Quickee Post",
  "description": "",
  "id": "acceptance-testing-of-hitting-like,-dislike-and-adding-comment-to-the-quickee-post",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@HitLike\u0026DislikeToQuickee"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "As a Registered User, i want to check the Like, Dislike and Comment button functionality",
  "description": "",
  "id": "acceptance-testing-of-hitting-like,-dislike-and-adding-comment-to-the-quickee-post;as-a-registered-user,-i-want-to-check-the-like,-dislike-and-comment-button-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Click on Login link on Get Started Screen",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Tap on EmailAddress button on Welcome Screen",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Email and Password and click on Sign In button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on Profile link from Latest Quickees Screen",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Tap on Like/Dislike/Comment button to Like/Dislike/Add Comment a Quickee post",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on Settings icon from profile Screen",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on LogOut tab",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should be successfully LogOut",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.goToLoginScreen()"
});
formatter.result({
  "duration": 22159063135,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 1470860846,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 11247391582,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 33896126309,
  "status": "passed"
});
formatter.match({
  "location": "Like_Dislike_Comment_Quickee.Hitting()"
});
formatter.result({
  "duration": 87803318483,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToSettings()"
});
formatter.result({
  "duration": 32117039754,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnlogoutTab()"
});
formatter.result({
  "duration": 14009891192,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLogout()"
});
formatter.result({
  "duration": 136190,
  "status": "passed"
});
formatter.after({
  "duration": 542031,
  "status": "passed"
});
});