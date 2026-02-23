### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
# Answer: 

getElementById() --> We know id is unique. When we use getElementById(), here we specify an id, it targets only that specific id. Example: getElementById('delete-btn'). It will target the button which id id 'delete-btn'

getElementsByClassName() --> A class name can be used for multiple element. When we use getElementsByClassName(), we can target all the elements who contains that specific class. Example: getElementsByClassName("card"). It will target all the elements who contains "card" class.

<div class="fruit">Mango</div>
<div class="fruit">Orange</div>
<div class="fruit">Apple</div>
querySelector() --> It finds the first element for a common CSS selector. Here it target only <div class="fruit">Mango</div>
querySelectorAll() --> It finds all the elements for a common CSS selector. Here it targets all.



### 2. How do you create and insert a new element into the DOM?
# Answer:

const paragraph = document.createElement("p");
paragraph.innerText = "I love JavaScript";
document.body.appendChild(paragraph);


### 3. What is Event Bubbling? And how does it work?
# Answer:

Event Bubbling is a mechanism of Document Object Module. When an event is triggered to run a specific element, it first runs that element and then bubble upwards to trigger it's parent elements.

It works: 
i. We click on a button
ii. It handles click
iii. Bubble up towards parent elements
iv. Parent handles the event also if it contains listener


### 4. What is Event Delegation in JavaScript? Why is it useful?
# Answer

Event Delegation is a technique where we add a single event listener to the parent element without adding multiple event listener to the child elements. So, when a child element is clicked, parent element can handle that.

It is useful because:
i. We need less event listener. Instead of adding event listener to all child, if we add an event listener to the parent, parent can handle all child elements. 
ii. Dynamic element addition. If we add a child element later, we don't need to add listener to it, parent element can handle it's event.
iii. Though we have less event listener, we can get better performance and it will be easy to maintain.


### 5. What is the difference between preventDefault() and stopPropagation() methods?
# Answer

preventDefault() --> It cancle the event if it is cancleable. Normally if we fill a form and click on submit button, it would submit the form. If we would use preventDefault(), then it can prevent form submission.

stopPropagation() --> Stop event from bubbling up to parents