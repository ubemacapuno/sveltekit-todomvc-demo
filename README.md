## TodoMVC SvelteKit Demo

This is my (unfinished) attempt for <a href="https://www.meetup.com/Phoenix-ReactJS/">Phoenix React JS Meetup</a> at creating a TodoMVC app using SvelteKit/TS/MongoDB (no local storage). My focus was on using SvelteKit <a href="https://kit.svelte.dev/docs/form-actions">Form Actions</a> and <a href="https://kit.svelte.dev/docs/load">Loading Data</a>, utilizing CRUD operations without a Node server. 

 <tr>
    <td width="100%"  style="align:center;" valign="top">
            <img src="https://github.com/ubemacapuno/images-for-github-readme/blob/main/sveltekit-todo.gif?raw=true" width="100%"  alt="CAPA Tracker demo animation."/>
    </td>
  </tr>

## How It's Made:

**Tech used:** 

SvelteKit/TS/MongoDB

Install the dependencies either using NPM/Yarn/PNPM:

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

## Things to add:
- Create a `.env` file and add the following:
  - MONGO_URL= `your database URI (Needed for connection to MongoDB database)` 

## Lessons Learned:
- How to hit a MongoDB database using SvelteKit hooks.server.ts and page.server.ts to get data to the viewer in +page.svelte
- Utilizing zod schemas
- Greater understanding of CRUD operations and routing with SvelteKit
- Better understanding of Svelte and SvelteKit
- data-sveltekit-preload-data attribute
- JavaScript doesn't need to be running for the form actions to work!
