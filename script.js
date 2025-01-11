const app = document.getElementById('app');
// //object property
// function Header(props) {
//     return <h1>{props.title}</h1>;
// }

// //template literal
// function Header({ title }) {
//     return <h1>{`Cool ${title}`}</h1>;
// }

// //Returned value of a function
// function createTitle(title) {
//     if (title) {
//         return title;
//     } else {
//         return 'Default title';
//     }
// }

// function Header({ title }) {
//     return <h1>{createTitle(title)}</h1>;
// }

//ternary operators
function Header({ title }) {
    return <h1>{title ? title : 'Default Title'}</h1>;
}

function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    function handleClick() {
        setLikes(likes + 1);

    }

    const [likes, setLikes] = React.useState(0);

    return (
        <div>
            {/* Nesting the Header component */}
            <Header title="React" />
            <Header />
            {/*Curly braces help me weave in and out of "Javascript" and "JSX" land.
            right now we're in Javascript land */}
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <button onClick={handleClick}>Like ({likes})</button>
        </div>
    );
}


const root = ReactDOM.createRoot(app);
root.render(<HomePage />);