import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, FlatList, Button,ScrollView} from 'react-native';
import {useState} from 'react';



export default function ColorScreen() {
    /*
        We are trying to do run time styling therefore we we will do it in property rather than stylesheet
        i dont use floor than 256 means that we need 256 values of color while when we use floor it means
        we need from zero to 256
        whenever we have to retun a built in function we will use ``


        colors is an array which have rgb, so we have to show its location.
        if randomRGB() is used directly if will work
        but we want to update the screen by using useState
       */
    const randomRGB= () =>
    {
        const red = Math.floor(Math.random()*256);
        const green = Math.floor(Math.random()*256);
        const blue = Math.floor(Math.random()*256);
        
        
        /*to use javascript variables in node, we will use $ sign*/
            return `rgb(${red},${green},${blue})`;  /*we have to use ` whenever we are returning builtin function  */
    }
    const randomHeight=()=>
    {
        return Math.floor(Math.random() * 200) + 50;
        
    }
    const randomWidth=()=>
    {
        return Math.floor(Math.random() * 200) + 50;
        
    }
   
    const [colors,setColors]=useState([]);/* */
    const [height,setHeight]=useState([]);
    const [width,setWidth]=useState([]);
   
    

    return(   
        <ScrollView>
    <View>
        <Text>Welcome to color screen</Text>
        <Button 
        title="Add Color"
        onPress={()=>{/*this ... means that an array of colors will be created with each moving to the next location dynamically */
            setColors([...colors,randomRGB()]); /* here we are calling the fucntion randomRGB on pressing the button
            which will generate random RGB colors.  this colors array is going in data in FlatList*/
            setHeight([...height,randomHeight()]);
            setWidth([...width,randomWidth()]);
           

        }}
        />
        <FlatList
        
                data={colors}
                renderItem={({item, index}) => {
                    const heightItem = height[index];
                    const widthItem = width[index];
                    

                    return (
                        <View style={{
                            height: heightItem,
                            width: widthItem,
                            backgroundColor: item,
                            margin:heightItem-10
                            
                        }}>
                        </View>
                    )
                }}
                
            />
    
       
    </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    textStyle:
    {
        margin:20,
        fontSize:20,
        color:'#00FF00'

    }

});