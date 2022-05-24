/*
Often, we can’t know for certain whether a variable actually has a value or
if it is null or undefined . For example, we can use document.getElementById() 
to get a DOM element with a specific ID. However, if no element exists with the ID 
that we provide, the function will return null . If we have the strictNullChecks 
flag in tsconfig.json turned on, TypeScript will warn us that the element might not 
exist and require us to perform a runtime check to make sure the value is present. 
This helps us avoid Cannot read property "x" of undefined errors.
*/


document.getElementById("messageInput").innerText = "Alex"; // error

const messageInput = document.getElementById("messageInput");
if (messageInput) {
  messageInput.innerText = "Alex";
}

// Be aware that this also excludes legitimate values that are falsy, such as 0 , '' , and false . 
//You’ll have to do additional checks if you expect your variable might be one of those falsy values.

// Things can get verbose if we are trying to access properties deep within an object’s structure.

const messageInputElement = document.getElementById("messageInput");
if (messageInputElement) {
  const parentElement = messageInputElement.parentElement;
  if (parentElement) {
    const messageInputParentInnerHTML = parentElement.innerHTML;
    if (messageInputParentInnerHTML) {
      // ...
    }
  }
}
/*
Our variable has a type of string | undefined because if the expression evaluates all the way 
to the end, innerHTML is a string; but if the expression fails anywhere along the way,
either if .getElementById() returned null or if our #messageInput element doesn’t 
have a parent element, the entire expression will return undefined . We can then do
a truthiness check to see whether messageInputParentInnerHTML is a string or not.
*/

function handleTeacherAPIResponse(response: {
    teachers?: string[];
    error?: string;
  }) {
    const firstTeacher = response.teachers?.[0];
    firstTeacher;
  }


  //Finally, we can optionally call methods on objects that may or may not exist. 
  // To do this, we prepend the optional chaining operator to the parentheses which call the function.



  async function makeAPIRequest(url: string, log?: (message: string) => void) {
    log?.("Request started.");
    const response = await fetch(url);
    const data = await response.json();
  
    log?.("Request complete.");
  
    return data;
  }
// Nullish Coealescing
  // When you have the option, using a default value for variables that might be undefined is really helpful. 
  // Typically we use the logical OR operator ( || ) to assign the default value.




const messageInputValue =document.getElementById("messageInput")?.value || "Alex";
messageInputValue; // const messageInputValue: string;
/*

The only problem with this approach is it checks against falsy values, 
not just null and undefined . That means when our #messageInput field is empty, 
it will still give us the default value since empty string is falsy.

The Nullish Coalescing operator solves this by only checking if a value is null or undefined . 
It works the same way as the logical OR, but with two question marks ( ?? ) instead of two vertical bars.
*/

const messageInputValue2 =
  document.getElementById("messageInput")?.value ?? "Alex";
messageInputValue2; // const messageInputValue: string;

/*
Non-null Assertion
Sometimes, you just know better than the type checker. 
If you positively know that a particular value or property is not null or undefined ,
 you can tell the type checker using the Non-null Assertion operator ( !. ), 
 which looks a lot like the Optional Chaining operator. Using this operator 
 essentially tells the type checker “There’s no way this property could possibly be 
 null or undefined , so just pretend like it’s the correct type.”

 */

 const messageInputValue4 = document.getElementById("messageInput")!.value;
messageInputValue; // const messageInputValue: string;

// unlike the other two operators, the Non-null assertion operator only exists in TypeScript. 
// If you tried using it in JavaScript, it would throw a syntax error.