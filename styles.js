import { StyleSheet} from "react-native";


export const appStyles = StyleSheet.create({

    container : {
        padding: 10,
        marginTop: 32,
        flex: 1,
        margin: 16,
    },

    title: {
        fontSize: 30,
    },

    subtitle: {
        fontSize: 20,
        marginTop: 4,
        color: '#666',
    },

    input: {
        marginTop: 18,
        borderRadius: 8,
        padding: 12,
        borderWidth: 3,
        borderColor: '#ddd',
        fontSize: 18
    
    },

    buttonContainer: {
        backgroundColor: 'lightgreen',
        padding: 12,
        borderRadius: 8,
        alignSelf: 'flex-end',
        alignItems: 'center',
        marginTop: 10,
    },

    buttonText: {
        fontSize: 18,
    },

    divider: {
        height: 1,
        backgroundColor: '#ddd',
        marginVertical: 32
    },

    taskContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginBottom: 8,
        borderBottomWidth: 1,
        borderColor: '#568455',
        paddingVertical: 12

    },

    taskText: {
        fontSize: 18

    },
    taskDeleteButton: {
       backgroundColor: 'red',
       width: 23,
       height: 23,
       borderRadius: 8,
       justifyContent:"center",
       alignItems: 'center',
    },
    taskDeleteText: {
        fontSize: 14,
        color:'white'
    }


    


});


