# SST Coding Challenge

## Getting started

1. Fork and clone this repo.
2. `npm install`.
3. `npm run start`
4. name your database test
5. Make sure you add a secrets.js file with a process.env.JWT defined

# Notes to self to delete later
## General plan for myself

1. Make a HTML/CSS mockup for what it should look like
2. Essentially, each time the timeline objects get updated, do the following
    a. figure out whats the least and greatest time to put on the end
    b. calculate what level each object should be on and store it in the object
    c. the react component should take as an input what level its on (as well as start and end)
3. then from there you can add the simple add and remove events or whatever

