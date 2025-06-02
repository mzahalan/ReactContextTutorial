import React, {Component} from 'react';

class BookList extends Component {

    render() {
        return (
            <div className="book-list">
                <ul>
                    <li style={{ background: this.context.color }}>The Way of Kings</li>
                    <li style={{ background: this.context.color }}>The Name of the Wind</li>
                    <li style={{ background: this.context.color }}>The Final Empire</li>
                </ul>
            </div>
        )
    }
}
 
export default BookList;