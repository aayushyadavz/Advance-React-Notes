const Contact = () => {
    return (
        <div className="mt-20 px-5">
            <h1 className="font-bold text-3xl mb-3">Contact us</h1>
            <form>
                <input type="text" placeholder="Name" className="border border-black p-2 block" />
                <input type="text" placeholder="Message" className="border border-black p-2 block my-3" />
                <button className="p-2 rounded-lg bg-orange-500 text-white font-semibold">Submit</button>
            </form>
        </div>
    )
}

export default Contact