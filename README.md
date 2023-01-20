## TodoMVC SvelteKit Demo

I presented this app during the <a href="https://www.meetup.com/Phoenix-ReactJS/">Phoenix React JS Meetup</a> on 01/20/23, creating a <a href="https://github.com/tastejs/todomvc">TodoMVC app </a> using SvelteKit/TS/MongoDB. My focus was on using SvelteKit <a href="https://kit.svelte.dev/docs/form-actions">Form Actions</a> and <a href="https://kit.svelte.dev/docs/load">Loading Data</a>, utilizing CRUD operations to the database without a Node server. The code looks a bit wonky, but that's because I really wanted to emphasize Form Actions to learn it more.

I didn't follow the instructions for the typical TodoMVC, but this app is a functional Todo app using SvelteKit!

 <tr>
    <td width="100%"  style="align:center;" valign="top">
            <img src="https://github.com/ubemacapuno/images-for-github-readme/blob/main/sveltekit-todo.gif?raw=true" width="100%"  alt="CAPA Tracker demo animation."/>
    </td>
  </tr>

## How It's Made:

**Tech used:** 

SvelteKit/TS/MongoDB

## Install the dependencies either using NPM/Yarn/PNPM:

Using NPM:

```bash
# Install dependencies
$ npm install

# Start development server
$ npm run dev
```

Using Yarn:

```bash
# Install dependencies
$ yarn

# Start development server
$ yarn dev
```

Using Yarn:

```bash
# Install dependencies
$ pnpm i

# Start development server
$ pnpm run dev
```
Open http://127.0.0.1:5173/ to view it in the browser.

## Things to add:
- Create a `.env` file and add the following:
  - MONGO_URL= your database URI (Needed for connection to MongoDB database)

## Lessons Learned:
- How to hit a MongoDB database using SvelteKit hooks.server.ts and page.server.ts to get data to the viewer in +page.svelte
- Utilizing zod schemas
- Greater understanding of CRUD operations and routing with SvelteKit
- Better understanding of Svelte and SvelteKit
- data-sveltekit-preload-data attribute
- JavaScript doesn't need to be running for the form actions to work!
