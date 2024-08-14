import "./App.css";
import { books } from "./book";
import Book from "./components/Book";

function App() {
  return (
    <>
      <h1>Amazon best seller books</h1>
      <div className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={index} number={index + 1} />;
        })}
      </div>
    </>
  );
}
export default App;
