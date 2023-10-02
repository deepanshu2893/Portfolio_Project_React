// import photo from "../Assets/Convocation2.jpg"
export default function HTMLBasics() {
    return (
        <div>
            <header>
                This is the header
            </header>
            <nav>
                This is the navigation menu 
            </nav>
            <h1 className="">
                <mark >This is a heading</mark>
            </h1>
            <h1 style={{color:"blue", backgroundColor:"yellow"}}>Hello World</h1>
            <body >
                This is the body
            </body>
            <p>
                This is a paragraph
            </p>
            <a href="https://www.youtube.com/watch?v=m55PTVUrlnA">
                This is an external Link</a>
                <ul>
                    <li>This is ul list 1 (bullets)</li>
                    <li>This is ul list 2</li>
                </ul>
                <ol>
                    <li>This is ol list 1(numbers)</li>
                    <li>This is ol list 2</li>
                </ol>

                {/* <img src={photo} alt="Convocation Photo"></img> */}

                <p> This is how you <strong>Bold</strong> the text and this is how you <em>Italics</em> the text </p>


                <form>
                    <label for = "username">Username</label>
                    <input type="text" id="username" name="username"></input>
                    
                    <label for ="password">Password</label>
                    <input type="password" id="password" name = "password"></input>

                    <label for = "gender">Gender</label>
                    <input type="radio" id = "male" name = "gender" value ="male"></input>
                    <label for = "male"> Male </label>

                    <input type="radio" id = "female" name = "gender" value = "female"></input>
                    <label for = "female"> Female </label>

                    <label for = "subscribe"> Subscribe: </label>
                    <input type = "checkbox" id="subscribe" name = "subscribe"></input>

                    <input type="submit" value="Submit"></input>

                    <button type = "submit">Submit</button>
                </form>
                


<section>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                    <tr>
                        <td>John</td>
                        <td>30</td>
                    </tr>
                    <tr>
                        <td>Jane</td>
                        <td>25</td>
                    </tr>
                </table>
                <p> Hello what is up</p>
                </section>
                <p>Hello what is up</p>
                <time>10</time>
                <footer>
                    This is the footer
                </footer>
        </div>
    )
}