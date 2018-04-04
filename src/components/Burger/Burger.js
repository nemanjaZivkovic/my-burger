import React from 'react';

import classes from './Burger.css';
import BurgerInredients from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
    let arrIngredients = Object.keys(props.ingredients)
        .map(key => {
            return [...Array(props.ingredients[key])].map((_, i) => {
                return <BurgerInredients key={key + i} type={key} />
            })
        })
        .reduce((agg, el) => {
            return agg.concat(el);
        }, []);

        if (!arrIngredients.length) {
            arrIngredients = <p>Please start adding ingredients!</p>
        }

    return (
        <div className={classes.Burger}>
            <BurgerInredients type="bread-top" />
            {arrIngredients}
            <BurgerInredients type="bread-bottom" />
        </div>
    );
};

export default burger;