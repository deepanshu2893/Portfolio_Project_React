import TypewriterComponent from "typewriter-effect";

export default function Type() {
    return (
        <TypewriterComponent 
        options={{
            strings : [
                "Hello, welcome to my website",
                "I am an aspring developer",
                "My tech stack includes Java, Spring Boot, React and My SQL"

            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 30,
            delay: 50
        }}
        />
    )
}