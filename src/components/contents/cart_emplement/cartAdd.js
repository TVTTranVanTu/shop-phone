import React, { Component } from 'react';

class CartAdd extends Component {

    render() {

        var { children } = this.props;

        return (

            <div>
                <header className="_header_list">
                    <article className="list">
                        <h1 className="list_add">list cart</h1>
                    </article>
                </header>
                <section className="itemlist">
                    <ul className="phoneItemsadd">
                        {children}
                    </ul>
                </section>
            </div>
        );
    }
}

export default CartAdd;