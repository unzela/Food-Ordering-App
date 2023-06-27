const Contact = () => {
    return(
        <div>
            <h1 className="font-medium text-2xl text-center p-4">We'd love to hear feedback from you!</h1>
            <div className="flex flex-col p-3 m-2 items-center">
                <h1>Name</h1>
                <input type="text" className="border border-black rounded-lg p-1 w-52 m-2 bg-slate-100"/>
                <h3>Email ID</h3>
                <input type="text" className="border border-black rounded-lg p-1 w-52 m-2 bg-slate-100"/>
                <h3>Comments</h3>
                <input type="text" className="border border-black rounded-lg p-2 w-96 h-24 m-3 bg-slate-100"/>
                <button className="border border-black rounded-lg p-2 bg-orange-100 w-24">Submit</button>
            </div>
        </div>
    )
}

export default Contact;