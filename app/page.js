import LikeButton from './like-button';

//ternary operators
function Header({ title }) {
    return <h1>{title ? title : 'Default Title'}</h1>;
}

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

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
            <LikeButton />
        </div>
    );
}
