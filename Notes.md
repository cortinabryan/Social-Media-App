# Random Notes I learned along the way

-

Dependancies

Express - Node. JS framework
body-parser - process the request body
bcrypt - password encryption
cors - cross origin request
dotenv - environment variables
gridfs-stream - file upload
multer & multer gridfs-storage - so we can upload files locally
helmet - request safety
morgan - login
jsonwebtoken - authentication
mongoose - MongoDB access

-

Material UI / CSS

Box component vs Container Component

In summary, the Box component is a generic layout component that provides flexibility in terms of width and responsiveness, while the Container component is specifically designed for creating fixed-width containers with built-in responsiveness for easy and consistent layout designs.

SX prop, you're able to access theme and edit

-

Hooks

useEffect - The 'useEffect' hook is used to handle side effects in functional components. Side effects can include things like fetching data, subscribing to events, or manually manipulating the DOM. The useEffect hook takes a callback function as its first argument and an optional array of dependencies as the second argument. The callback function will be executed after every render of the component.is a hook that allows you to perform side effects in functional components.

The use efffect will take on a function.

2nd value is usually an Array
if empty array = will only run 1 time and thats when the component is rendered
if array has value = the hook will track the values inside and it will run when values are changed and affected
if no array = will run after each render and update

-

useState - the 'useState' hook allows you to add state to a functional component. It returns an array with two elements: the current state value and a function to update the state. You typically destructure this array into individual variables. Here's an example usage:

ex:

const [string, setString] = useState('Hello World')

^

first array value = initial state
2nd array value = new state

To summarize, 'useState' is used to manage state within a component, while 'useEffect' is used to handle side effects and perform actions based on component lifecycle events or changes in dependencies.
