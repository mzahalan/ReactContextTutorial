import BookList from './components/BookList';
import NavBar from './components/NavBar';
import BookForm from './components/BookForm';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar/>
        <BookList/>
        <BookForm/>
      </BookContextProvider>
    </div>
  );
}

export default App;
