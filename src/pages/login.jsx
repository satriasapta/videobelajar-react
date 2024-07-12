import Content from '../components/login/Content.jsx'
import Navbar from '../components/Navbar.jsx'

const login = () => {
    return (
        <div className="bg-background">
            <Navbar isLoggedIn={false} />
            <Content />
        </div>
    )
}

export default login