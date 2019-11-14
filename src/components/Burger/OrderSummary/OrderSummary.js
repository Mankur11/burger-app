import React, {Component} from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    //could be a function component, but for testing it's a class now
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[OrderSummary] DidUpdate');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>
                        {igKey}</span>:{this.props.ingredients[igKey]}
                    </li>
                )
            });
        return (
            <Auxiliary>
                <h3>Your order</h3>
                <p>Burger with following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
            </Auxiliary>
        );
    }
};

export default OrderSummary;