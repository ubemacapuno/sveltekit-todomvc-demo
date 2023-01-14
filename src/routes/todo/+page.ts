// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

//Create input that can submit on enter key and mouse click

//Learn how to make local storage
//Store clicked thing in input into the storage
//Variable to store the list of items
    //Display list using each if loop
    //Each item is an input that can:
        //complete - click on checkbox
        //Delete - click delete button or clear completed
        //edit - double-click or use pencil
        // Each action will update the local storage (bind)
    //Bonus: Add filter to filter list by "ALL", "ACTIVE", "COMPLETED"
        //(Default) "If all" shows all
        //If active true - shows all active; if active false - shows "completed"

        //Make a store for local storage to store the todo info
        //@see https://rodneylab.com/using-local-storage-sveltekit/
            //Make the default value an empty array
            //initialValue is going to pull from browser, otherwise


//on:click functions for delete
//Connect local storage to click of each task
export const prerender = true;
