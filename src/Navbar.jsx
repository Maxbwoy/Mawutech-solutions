import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="p-8 bg-gray-200 flex sticky">
            <Link className="text-red-500 hover:bg-green-400 hover:text-white hover:p-3" to="/"><img src="/logo1.png" className="w-10 h-10" alt="" /></Link>
            <div className="flex justify-center items-center ml-20 bg-white p-4 rounded">
                <Link className="text-red-500 hover:bg-blue-400 hover:text-white hover:p-3" to="/">Home</Link>
                <Link className="text-red-500 ml-5 hover:bg-blue-400 hover:text-white hover:p-3" to="/ClientQuestionnaire">Client Questionnaire</Link>
                <Link className="text-red-500 ml-5 hover:bg-blue-400 hover:text-white hover:p-3" to="/clientchecklistform">Client Checklist Forme</Link>
            </div>
        </nav>
    )
}

export default Navbar
