// import { start_mongo } from "./lib/db";
import { start_mongo } from "$db/mongo"; //using "aliased" version in svelte.config.js

start_mongo().then(() => {
    console.log("Mongo DB Started!")
}).catch(e => {console.error(e)})