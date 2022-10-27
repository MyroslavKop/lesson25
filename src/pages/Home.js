import Title from "../assets/home-background.svg";

const Home = () => {
    return (
        <main>
            <div className="home">
                <div className="container">
                    <img className="banner" src={Title} alt="title"/>
                </div>
            </div>
        </main>
    );
};

export default Home;