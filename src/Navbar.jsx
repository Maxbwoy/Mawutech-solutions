import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="p-8 bg-gray-200 flex">
            <img src="/logo1.png" className="w-10 h-10" alt="" />
            <div className="flex justify-center items-center ml-20 bg-white p-4 rounded">
                <Link className="text-red-500" to="/ClientQuestionnaire">Client Questionnaire</Link>
            </div>
        </nav>
    )
}

export default Navbar