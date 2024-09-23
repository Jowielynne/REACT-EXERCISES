import Header from "../components/Header";
import BookList from "../components/BookList";
import Layout from "../components/Layout";

function Home() {

    return (
        <>
            <section>
                <Layout>
                    <BookList />
                </Layout>
            </section>
        </>
    )
};

// SFC SHORTCUT
// COMPONENT = NEW FILE IN THE FOLDER. | eigen ontwikkelde html tag.. (this case, header & booklist)

export default Home;
