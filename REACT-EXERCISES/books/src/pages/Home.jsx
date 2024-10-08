import Header from "../components/Header";
import BookList from "../components/BookList";
import Layout from "../components/Layout";

function Home() {

    return (
        <>
            <main>
                <h1>Bookstore</h1>
                <Layout>
                    <BookList />
                </Layout>
            </main>
        </>
    )
};

// SFC SHORTCUT
// COMPONENT = NEW FILE IN THE FOLDER. | eigen ontwikkelde html tag.. (this case, header & booklist)

export default Home;
