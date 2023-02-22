
import React from 'react';
import ReactDOM from "react-dom";
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import AuthorList from "./components/Author.js";
import BookList from "./components/Book.js";
import NotFound404 from "./components/NotFound404.js";
import BookListAuthors from "./components/BooksAuthor.js";
import {HashRouter,Route,BrowserRouter,Link,Switch,Redirect} from "react-router-dom";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'authors': [],
            'books':[]
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/authors/').then(response => {
            this.setState(
                {
                    'authors': response.data
                }
            )}).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/books/').then(response => {
            this.setState(
                {
                    'books': response.data
                }
            )}).catch(error => console.log(error))

    }

    render() {
        return (
            <div>
                <HashRouter>
                    <nav>
                        <ul>
                            <li>
                          {/* <Link to='/'> Authors</Link>} */}
                              <Link to='/'> Authors </Link>
                            </li>
                            <li>
                                {/* <Link to='/books'>Books</Link>} */}
                                <Link to='/books'>Books</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={() => <AuthorList authors={this.state.authors}/>}/>
                        <Route exact path="/books" component={() =>  <BookList books={this.state.books}/>}/>

                          {/*  for debug
                        <Route path='/author/:id'>
                            console.log('App.js')
                            console.log(f'{this.state.books}')
                            console.log(f'{this.state.authors}')
                        </Route>
                         */}

                        {/*   Alternative
                        <Route path='/author/:id'>
                            <BookListAuthors books={this.state.books} authors={this.state.authors}/>
                        </Route>
                         */}

                        <Route exact path="/author/:id" component={
                            () =>  <BookListAuthors books={this.state.books} authors={this.state.authors}/>}/>



                        {/*  /:id  отлавливается из BookAuthor.js через useParams  */}

                        <Redirect from='/book' to='/books' />
                        <Route component={NotFound404}/>
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

export default App;