# 💡 JavaScript Core Concepts Explained  

Here are the answers to the essential JavaScript questions, detailing fundamental concepts used in building interactive web experiences like this project.  

---

## 1. What is the difference between `getElementById`, `getElementsByClassName` and `querySelector / querySelectorAll`?  

**Answer:**  
The difference lies in their **selection methods, return values and performance. The modern `querySelector` and `querySelectorAll` are more flexible and use CSS selectors, while the older `getElementById` and `getElementsByClassName` are specialized and generally faster for their specific use cases.**.  

- **`getElementById("id")`** → Selects a single element by its unique ID. Fastest for IDs.  
- **`getElementsByClassName("class")`** → Selects multiple elements with the same class. Returns a **live HTMLCollection**.  
- **`querySelector("cssSelector")`** → Selects the **first element** matching a CSS selector.  
- **`querySelectorAll("cssSelector")`** → Selects **all elements** matching a CSS selector. Returns a **static NodeList**.  

✅ Modern `querySelector` & `querySelectorAll` are more **flexible** (CSS-based), while `getElementById` and `getElementsByClassName` are **specialized & faster** for their cases.  

---

## 2. How do you create and insert a new element into the DOM?  

**Answer:**  
To create and insert a new element into the DOM, use `document.createElement()` and place it with methods like `appendChild()` or `insertAdjacentElement()`.  

**Step 1: Create the element**  

```javascript
// Create a new <div> element
const newDiv = document.createElement('div');

// Create a new <p> element
const newParagraph = document.createElement('p');

```

**Step 2: Add content/attributes (optional)**  

```javascript

newParagraph.textContent = "Hello, I am inside the new div!";
newDiv.setAttribute("class", "box");

```

**Step 3: Insert into the DOM**  

```javascript

// Reference the parent element (e.g., <body>)
const parentElement = document.body;

// Append the new div
parentElement.appendChild(newDiv);

```
---

## 3. What is Event Bubbling and how does it work?

**Answer:**   

`Event bubbling` is when an event triggered on a nested element moves up the DOM tree, firing event listeners on its parents and ancestors.

- Phases of event propagation:

    1. Capturing Phase → Event starts at the window and travels down to the target.

    2. Target Phase → Event is executed on the actual target element.

    3. Bubbling Phase → Event travels back up the DOM tree, triggering listeners on parent elements.

**By default, addEventListener works in the bubbling phase, unless you specify otherwise**.

---

## 4. What is Event Delegation in JavaScript? Why is it useful?

**Answer:**  

`Event delegation` is a design pattern in JavaScript that takes advantage of `event bubbling`. Instead of attaching a separate event listener to each child element, you attach a single event listener to a common parent or ancestor element. When an event like a click occurs on a child, it "bubbles up" the DOM tree to the parent, where the single listener can catch and handle it.

Inside the parent's event handler, you use the `event.target` property to identify which specific child element was originally clicked or interacted  with. 

---

## 5. What is the difference between preventDefault() and stopPropagation() methods?

**Answer:**  

`preventDefault()` and `stopPropagation()` are two distinct methods on the event object, each with a specific purpose. 
    
- `event.preventDefault()` prevents the default browser action for a given event, such as a form submission or a link navigation.

- `event.stopPropagation()` prevents an event from propagating up (bubbling) or down (capturing) the DOM tree, stopping the event from being seen by parent or child elements. 

---

Emergency Hotline Service Directory 🇧🇩
This project is an interactive web application designed as an emergency hotline service directory for Bangladesh. Users can browse various essential services, simulate calling them (which costs virtual coins!), copy their numbers to the clipboard, and track their call history in real-time. The application is built using HTML, CSS, and vanilla JavaScript, focusing on dynamic functionality and a responsive user experience.

✨ Features
Responsive Navbar: Features the website name & logo, a dynamic heart count for liked services, a coin count (starting at 100), and a copy count for clipboard actions.

Hero Section: A prominent section with a background gradient, a relevant logo, the main title "Emergency Service Directory," and a descriptive slogan.

Dynamic Card Section: Displays a minimum of 6 emergency service cards. Each card includes:

A relevant icon or image for the service.

Service Name in Bengali and English.

The hotline number.

A category badge (e.g., "Police", "Health").

An interactive heart icon (💗) to mark favorite services.

"Copy" button to easily copy the hotline number.

"Call" button to simulate a call, update the call history, and deduct coins.

Real-time Call History: A dedicated section that dynamically updates to show all recent "called" services, including their name, number, and the exact time of the call.

Coin System: Users start with 100 virtual coins. Each "call" deducts 20 coins. If a user has less than 20 coins, they cannot make a call.

Copy Count: A counter in the navbar that tracks how many times a number has been copied to the clipboard.

Clear History: A button to easily wipe all entries from the call history.

Fully Responsive Design: The website's layout and elements adapt seamlessly to various screen sizes, from desktops to mobile devices.
