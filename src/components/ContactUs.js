const Contact=()=>{
    return(
        <div>
            <h1 className="font-bold text-3xl p-4 m-4 text-center">Contact Us</h1>
            <div>
                <form>
                    <input type="text" placeholder="name" className="border border-black p-2 m-2" />
                    <input type="text" placeholder="email" className="border border-black p-2 m-2" />
                    <input type="text" placeholder="message" className="border border-black p-2 m-2"/>
                    <button className="border-2 border-gray-300 mx-15 mb-10 p-2 rounded-lg">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Contact;
// // The Contact component is a functional component that renders a contact page for a website.