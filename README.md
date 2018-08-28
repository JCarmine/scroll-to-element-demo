# scroll-to-element-demo
This repo demonstrates how to build a highly flexible and reusable ScrollToElement component in React

## Intro
*Note: The code in this example does not produce a working example. It was recently extracted from another repo, and I haven’t had a chance to get it wired up correctly.*

Since it’s not currently functional, I will identify the individual files below, and describe their function within the app. After reviewing the code, you can then see a live example by visiting the following URL, and clicking on the “Get Paid” button. [Gazelle.com](https://www.gazelle.com/sell/macbook/macbook-air/11/1-3-ghz/mid-2013/macbook-air-61-core-i5-13-ghz-11-mid-2013/495902-gpid)

## File Structure
```
├── ReactApp
│   ├── components
│   │   ├── AdditionalQuestions.jsx
│   │   ├── ScrollToElement.jsx
│   ├── helpers
│   │   ├── domHelpers.js
├── README.md
```

* ReactApp/components/ScrollToElement.jsx
  * This is the main component, `<ScrollToElement>`. It imports [react-scroll](https://github.com/fisshy/react-scroll), and uses its core functionality to build the component. It contains these features:
    * It accepts up to 9 props to set behavior.
    * Multiple instances of the component can be present on a page at the same time; including a unique id prop isolates the instances from one another.
    * Specifics such as offset, delay, duration, and the maximum viewport that a scroll can occur on, can all be set.
    * It utilizes several lifecycle methods since we will want the component to scroll at different times.
    * It has the ability, through the use of a helper, to detect whether the DOM is present. The React apps on Gazelle.com can be isomorphic if desired through the use of the react_on_rails gem (yep, rails backend). So, it's important to check for the presence of a DOM before trying to check viewport width, etc.
    * It establishes the propTypes for the component, and sets defaultProps for when none are provided.
    * Each instance is populated using `this.props.children`.
* ReactApp/components/AdditionalQuestions.jsx
  * This component provides an example of usage. In it `<ScrollToElement>` is imported, and used twice. A unique id is given to each instance, and custom props are set. The two are completely independent.
* ReactApp/helpers/domHelpers.jsx
  * This file contains the helpers for checking DOM presence and getting the viewport width. These functions aren't specific to the scrollable component, so they were broke out into a seperate file for clarity.
