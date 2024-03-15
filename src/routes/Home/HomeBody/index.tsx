import './styles.css';

export default function HomeBody({ content_page }: any) {

    return (

        <main className="home-page-container">
            <div className="title">
                <h1>{content_page = "Bem-vindos!"}</h1>
            </div>
        </main>
    );
}