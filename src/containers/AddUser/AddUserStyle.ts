import {StyleSheet} from "react-native";
import {Metrics} from "@src/themes";

export default StyleSheet.create({
    flex: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor:'white'
    },
    padding: {
        paddingHorizontal: Metrics.horizontal._24,
        backgroundColor:'white'
    },
    buttonWrapper:{
        backgroundColor:'white',
        paddingHorizontal: Metrics.horizontal._24,
        marginTop: Metrics.vertical._32
    },
    title: {
        alignSelf:'center'
    },
    backgroundGraphic: {
        backgroundColor: 'rgb(213,191,187)',
        width:'100%',
        height:'25%',
        borderBottomLeftRadius: Metrics.horizontal._32,
        borderBottomRightRadius: Metrics.horizontal._32
    },
    form: {
        height:'60%',
        // position:'absolute',
        marginTop: -Metrics.vertical._150,
        left:0,
        right:0
    }
});
