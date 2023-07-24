import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import Reviews from "./Reviews/Reviews";
import Table from './Table/Table';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Table></Table>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;