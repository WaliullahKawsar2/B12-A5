1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer : **getElementById** selects an element based on it's id.
**getElementsByClassName** selects an element based on it's class name.
**querySelector** selects an element based on it's selector type. If we  passed (".className") it will select the element whose class name is className.If we  passed ("#id") it will select the element whose id is "id".
**querySelectorAll** selects a list of elements whom have the same class name.

2. How do you **create and insert a new element into the DOM**?
Answer: document.createElement("tagName") is used to create an element whose tag name is tagName and appendChild() is used to insert it to an element. For example, if we want to insert it to a oldElement we can write oldElement.appendChild(tagName).

3. What is **Event Bubbling** and how does it work?
Answer: Event bubbling is a behavior where an event starts from the target element and bubbles up through its parent elements, all the way up to the document.For Example if there is a button in body and we click on it, the click event will be go up through it's parent element body and then body's parent element html and we can capture the event even from the parent.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer: Event Delegation is a method that mainly works on **Event Bubbling**. By using this method, we need not to add event listener to all the child elements rather than we can add event listener to the parent and target the child of the parent. It is mainly useful when we append child via javascript. As new child was append later, we can not apply event listerner to it directly. Event Delegation in this case more useful because the child is always connected to it's parent element. We can access to it's event easily via parent.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer: **preventDefault()** prevents the default action that the browser would normally perform in response to an event. On the other hand,
**stopPropagation()** stops the event from bubbling up to parent elements.