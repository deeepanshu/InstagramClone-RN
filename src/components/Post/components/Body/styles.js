import {Dimensions, StyleSheet} from "react-native";

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    image: {
        width: WIDTH,
        height: WIDTH,
    }
})

export default styles;