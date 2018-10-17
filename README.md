## Programming challenge

_Any changes to app or server are at your discretion to complete the challenge_

Fork the repo and build out the remainder of the application to support the following requirements:

- User login and logout
- View list of comments and replies
- Private/public comment toggle
  - Private comments only viewable to authenticated users
- Add/edit/delete comments and replies
- Real-time (subscription) updates across users/sessions

**Bonuses**

- User signup
- User profile page
- Unit tests
- _...whatever you imagine!_

### Evaluation criteria

- Delivery of defined functionality
- User experience and polished UI
- Responsive design
- Coding practices, paradigms, and architectural approaches
- Creativity
- Thought to future enhancements

## Quick start guide

### Prerequisites

- **Node** `10.5+`
- **Yarn** `1.9+`

### Initialize

_run once to setup project_

`./init.sh`

### Startup

_convenience script to start server & app in parallel_

`./start.sh`

## Starter Project Functionality

### Server

- GraphQL interface with subscriptions
- Threaded comment model with nested replies
- Signup and login authentication
- Request authorization via JWT bearer token header

#### APIs

Fully detailed schema can be viewed by running `yarn playground` in the `server` directory and visiting [http://localhost:3000/playground](playground). Then, click on the `schema` tab located at the right edge of the page.

The above assumes the server is already running. Alternatively, execute `yarn dev` to bring up the server and playground in parallel.

##### Query

- `feed` - list of top level comments
- `comment` - single comment by id
- `me` - person info based on JWT

##### Mutation

- `signup` - creates new user
- `login` - login for existing users
- `createComment` - creates a new top-level comment or reply
- `editComment` - modify existing comment
- `deleteComment` - delete comment and nested replies

### App

- Minimal interface to demonstrate working setup
  - Built on Material-UI with JSS
- Makes unauthenticated (anonymous) feed request
- Subscribes to all comment updates, and displays via snackbar notice
  - Does **NOT** update feed list in real time (this is for you to complete)

## Additional Info

See corresponding README for each service

- **[App](./app/README.md)** bootstrapped with `create-react-app`
- **[Server](./server/README.md)** bootstrapped with `graphql-boilerplate`
