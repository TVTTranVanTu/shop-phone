import React, { Component } from 'react';
class phoneCariers extends Component {



    render() {

        var { ListProduct } = this.props;
        var listItems = ListProduct.map((ListProduct) => {
            return (
                <li key={ListProduct.id} className="phoneItem">
                    <div className="phoneItem_content">
                        <div className="phoneItem_text">
                            <h3 className="phoneItem_name">{ListProduct.id}</h3>
                            <p className="phoneItem_desc">{ListProduct.name}</p>
                        </div>
                        <div className="infomation_product">
                            <div className="detail">
                                <p className="showDetail">Showdetail</p>
                                <p className="price">{ListProduct.price}đ</p>
                            </div>
                            <div className="icon_cart">
                                <button className="button_cart" type="button" onClick={() => this.addToCart(ListProduct)}><i className="fab fa-opencart"></i></button>
                            </div>
                            <div className="star">
                                <ul className="rating">
                                    <li>
                                        {this.showRatings(ListProduct.start)}
                                        {/* {this.showRatingsv2(ListProduct)} */}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="phoneItem_image">
                            <img src={require(`../../assets/img/${ListProduct.image}`)} alt="" />
                        </div>
                    </div>
                </li>

            )
        });

        return (
            <div>
                <header className="mainHeading">
                    <article className="mainHeading_headingText">
                        <h1 className="mainHeading_title">phone carriers</h1>
                    </article>
                </header>
                <section className="wrapper">
                    <ul className="phoneItems">
                        {listItems}

                    </ul>
                </section>
            </div>
        );
    }
    addToCart = (ListProduct) => {
        this.props.addToCart(ListProduct);

    }

    showRatings(start) {
        var result = [];
        for (var i = 1; i <= start; i++) {
            result.push(<i key={i} className="fa fa-star"></i>);
        }
        for (var j = 1; j <= (5 - start); j++) {
            result.push(<i key={i + j} className="fa fa-star-o"></i>);
        }
        return result;
    }
    // showRatingsv2(ListProduct){
    //     const starttotle =5;
    //     for(var i=0;i<ListProduct.length;i++){
    //         const startPercentage = ListProduct[i].start/starttotle*100;
    //         const startPrecentageRounded = `${(startPercentage / 10)*10}%`;
    //         ListProduct[i].start = startPrecentageRounded;
    //         return ListProduct[i].start;
    //     }
    // }
}
// const mapStateToProps = (state) =>{
//     return {
//         ListProduct:state.ListProduct
//     }
// };
export default phoneCariers;