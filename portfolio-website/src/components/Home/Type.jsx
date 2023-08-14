import TypewriterComponent from "typewriter-effect";

export default function Type() {
    return (
        <TypewriterComponent 
        options={{
            strings : [
                "Hello, welcome to my website",
                "Thank You"

            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 30,
            delay: 50
        }}
        />
    )
}