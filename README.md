1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById can target a uniqe ID ,
     getElementByClassName can target all element of same class name that is targets,
     querySelector can target single element of CSS selector system such as (.className) and  (#id),
     QuerySelectorAll , it's target all element of CSS selector .

2. How do you create and insert a new element into the DOM?
Ans: first I need to make a variable and variable equal document.createElement("here is tag name") mathod,
     then I have to call this variable and .innerHTML or innnerText and etc I can inseart.

3. What is Event Bubbling? And how does it work?
   Ans:Event Bubbling is a DOM propagation machanism ,
   It works where a event triger in the child to root sequentialy .

4. What is Event Delegation in JavaScript? Why is it useful?
   Ans: Event Delegation is a JavaScript multiple child  event listenig technich whice is from Event Bubbling consept,
        When we need multiple child event listenig in a parent we can easyly do with this by using event.target attributes

5. What is the difference between preventDefault() and stopPropagation() methods?
   Ans: preventDefault() method is used to prevent the built-in action that a browser would normally perform in response to a specific event,
        stopPropagation() method is used to control the flow of the event through the Document Object Model (DOM) tree.
   
