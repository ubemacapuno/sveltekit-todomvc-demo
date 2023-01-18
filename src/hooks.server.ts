//hooks.server.ts is a hooks file that runs on every request on the SERVER-side
//Allows for interception of requests (ex. intercept cookies for authentication)
import { start_mongo } from "$db/mongo"; 

start_mongo().then(() => {
    console.log("Mongo DB Started!")
}).catch(e => {console.error(e)})