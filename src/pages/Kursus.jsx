import Navbar from '../components/Navbar.jsx';
import Content from '../components/kursus/Content.jsx';

const Kursus = () => {

    return (
        <div className="bg-background">
            <Navbar isLoggedIn={true} />
            <Content />
        </div>
    )
}

export default Kursus