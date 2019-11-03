import React, { Component } from 'react';
import { View, Text, Alert, Image, StyleSheet, Modal ,ScrollView,Dimensions } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import ImageViewer from 'react-native-image-zoom-viewer';


const height=Dimensions.get("window").height;

class ProductDetail extends Component {

  imgUrls =[]

  constructor(props) {
    super(props);
    // pushItem
    pushItem = this.props.navigation.getParam("pushItem", null);
    imgArr = [] 
    pushItem.images.map((itm, index) => {
      imgArr.push(itm.normal)
      const objurl={url:itm.normal}
      this.imgUrls.push(objurl)
    })


    this.state = {
        item: pushItem,
        images: imgArr,
        imageStatu:false,
    };
  }

  highPrice=(price)=>{
    const prt=parseFloat(parseInt(price*1.05));
    return(<Text style={styles.hightPrice}>Eski Fiyatı:{prt}</Text>)
  }

  render() {
    return (
      <View>
        <View style={{position:'absolute',flex:1,width:'100%',height:50,marginTop: height-175,backgroundColor:'red',}}></View>
    <ScrollView style={{paddingBottom:50}}>
        <Modal visible={this.state.imageStatu} transparent={true}>
            <ImageViewer 
            enableSwipeDown={true}
            onSwipeDown={ () => this.setState({ imageStatu: false }) } 
            imageUrls={this.imgUrls}/>
        </Modal>

        <SliderBox
            images={this.state.images}
            sliderBoxHeight={200}
            onCurrentImagePressed={index =>
              {
                this.setState({ imageStatu: true })
              }                
            }
        />
        <Text style={styles.title}>{ this.state.item.productName } </Text>
        {this.highPrice(this.state.item.price)}
        <Text style={styles.price}>İndirimli Fiyatı:{ parseFloat(this.state.item.price)} </Text>
        <Text style={styles.detail}>Açıklama{ this.state.item.description } </Text>


        <View style={{flex:1,height:50,}}></View>
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  contain: {
    flex: 1,
    height: 150,
  },
  title:{
  fontSize:20,
  textAlign:"center",
  margin:5
  },
  price:{
  textAlign:"right",
  fontSize:15,
  color:'#f23a22',
  margin:5
  },
  hightPrice:{
    textAlign:"right",
    textDecorationLine:'line-through',
    fontSize:13,
    color:'red',
    marginRight:5,
    marginBottom: -3,
     },
  detail:{
  margin:5,
  }
});

export default ProductDetail;
