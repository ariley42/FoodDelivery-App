import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { DISHES } from '../shared/dishes';


function RenderDish(props) {

    const dish = props.dish;
    
    if (dish != null) {
        return(
            <Card
                featuredTitle={dish.name}>
                <Text style={{margin: 10}}>
                    {dish.description}
                </Text>
            </Card>
        );
    }
    else {
        return(<View></View>);
    }
}



class DishDisplay extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }
    
    static navigationOptions = {
        title: 'Dish Details'
    };
    
    render(){
        const dishId = this.props.navigation.getParam('dishId')
        return(
            <ScrollView>
                <RenderDish dish={this.state.dishes[+dishId]}></RenderDish>
            </ScrollView>
            );
}
}

export default DishDisplay;