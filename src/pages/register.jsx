import Content from '../components/register/Content.jsx'
import Navbar from '../components/Navbar.jsx'
const register = () => {
    return (
        <div className="bg-background">
            <Navbar isLoggedIn={false} />
            <Content />
        </div>
    )
}

export default register