# devstaff.gr

This repository contains all the static files that are being deployed to the
[DevStaff Website](https://devstaff.gr/), `devstaff.gr`. The root of the
repository contains the document root of the website.

The website is written in HTML, by hand, so it essentially comprises of two
pages. However, for the list of meetups, there has been use of Angular (1.X),
to do the simple `for` loop, and display all meetups, an `if` to alternate the
`<div>` background, and another `if` to show future meetups as special (TO BE).

The dynamic parts that are controlled by Angular are in `js/app.js`, inside the
source code of the application.
