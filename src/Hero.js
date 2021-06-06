import React, { useEffect, useState } from 'react';
import { Button, Container, Form, Grid, Header, Icon, Input, Segment, Table, } from 'semantic-ui-react';
import firebase from './fire';

const Hero = ({handleLogout}) => {
    const [foodName, setFoodName] = useState('');
    const [price, setPrice] = useState('');
    const [foodData, setFoodData] = useState([]);
    const [updateFoodName, setupdateFoodName] = useState('');
    const [updatePrice, setupdatePrice] = useState('');
    const [foodId, setFoodId] = useState('');

    useEffect(() =>{
        const firestone = firebase.database().ref('/FoodInfo');
        firestone.on('value', (response)=>{
            const data = response.val();
            let foodInfo = [];
            for(let id in data){
                foodInfo.push({
                    id:id,
                    FoodName:data[id].FoodName,
                    Price:data[id].Price,
                });
            }
            setFoodData(foodInfo);
        });
    }, []);

    const handleAddFood = () =>{
        const firestore = firebase.database().ref("/FoodInfo");
        let data = {
            FoodName:foodName,
            Price:price
        }
        firestore.push(data);
        setFoodName('');
        setPrice('');
    };
    const handleUpdateFood = () =>{
        const firestore = firebase.database().ref('/FoodInfo').child(foodId);
        firestore.update({
            FoodName:updateFoodName,
            Price:updatePrice
        });
        setupdateFoodName('');
        setupdatePrice('');
    };
    const handleUpdateClick = (data) =>{
       setupdateFoodName(data.FoodName);
       setupdatePrice(data.Price);
       setFoodId(data.id);
    };
    const handleDelete = (id) =>{
        const firestore = firebase.database().ref('/FoodInfo').child(id);
        firestore.remove()
     };


    return(
        <div>
            <section className="hero">
                <nav>
                    <h2>flist</h2>
                    <button onClick={handleLogout} >Logout</button>
                </nav>
                <br/>
                <br/>

                 {/* CRUD.............................................................................................................. */}
                <Container>
                    <Grid>
                        <Grid.Row columns="2">
                            <Grid.Column>
                                <Segment padded="very">
                                    <Form>
                                        <Form.Field>
                                            <label>Food name</label>
                                            <Input 
                                                placeholder="Insert food name" 
                                                focus value={foodName} 
                                                onChange={(e)=>{setFoodName(e.target.value);}} />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Price</label>
                                            <Input 
                                                placeholder="Insert price" 
                                                focus value={price} 
                                                onChange={(e)=>{setPrice(e.target.value);}} />
                                        </Form.Field>
                                        <Form.Field>
                                            <Button 
                                            onClick={()=>{handleAddFood();}}
                                                positive
                                            >
                                                <Icon name="add circle"></Icon>
                                                Add Food
                                            </Button>
                                        </Form.Field>
                                    </Form>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                            <Segment padded="very">
                                    <Form>
                                        <Form.Field>
                                            <label>Food name</label>
                                            <Input 
                                                placeholder="Update food name" 
                                                focus value={updateFoodName} 
                                                onChange={(e)=>{setupdateFoodName(e.target.value);}} />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Price</label>
                                            <Input 
                                                placeholder="Update price" 
                                                focus value={updatePrice} 
                                                onChange={(e)=>{setupdatePrice(e.target.value);}} />
                                        </Form.Field>
                                        <Form.Field>
                                            <Button 
                                            onClick={()=>{handleUpdateFood();}}
                                                primary
                                            >
                                                <Icon name="edit"></Icon>
                                                Update food
                                            </Button>
                                        </Form.Field>
                                    </Form>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns="1">
                            <Grid.Column>
                                {foodData.length == 0 ? (
                                    <Segment padded="very">
                                        <Header textAlign="center">
                                            Oops! There is no data available.
                                        </Header>
                                    </Segment>
                                    ) : (
                                    <Segment padded="very">
                                        <Table celled fixed singleLine>
                                            <Table.Header>
                                                <Table.Row>
                                                    <Table.HeaderCell>Food Name</Table.HeaderCell>
                                                    <Table.HeaderCell>Price</Table.HeaderCell>
                                                    <Table.HeaderCell></Table.HeaderCell>
                                                </Table.Row>
                                            </Table.Header>
                                            {foodData.map((data,index) =>{
                                                    return ( 
                                                    <Table.Body>
                                                        <Table.Cell>{data.FoodName}</Table.Cell>
                                                        <Table.Cell>{data.Price}</Table.Cell>
                                                        <Table.Cell textAlign="center">
                                                            {/* <Button primary>
                                                                <Icon name="edit"></Icon>
                                                                Update
                                                            </Button>  
                                                            <Button color="red">
                                                                <Icon name="delete"></Icon>
                                                                Delete
                                                            </Button> */}
                                                            <div class="ui animated button primary" tabindex="0" onClick={()=>{handleUpdateClick(data)}} >
                                                                <div class="visible content">Update</div>
                                                                <div class="hidden content">
                                                                    <i class="pencil alternate icon"></i>
                                                                </div>
                                                            </div>
                                                            <div class="ui animated button red" tabindex="0" onClick={()=>{handleDelete(data.id)}} >
                                                                <div class="visible content">Delete</div>
                                                                <div class="hidden content">
                                                                    <i class="trash alternate icon"></i>
                                                                </div>
                                                            </div>
                                                        </Table.Cell>
                                                    </Table.Body>
                                                    );
                                                })}
                                        </Table>
                                    </Segment>
                                    )}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </section>
            
        </div>
    );
};

export default Hero;