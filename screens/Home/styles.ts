import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191919',
    },

    header: {
        backgroundColor: '#0D0D0D',
        height: 173
    },

    logo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerMain: {
        paddingHorizontal: 24
    },

    form: {
        width: '100%',
        flexDirection: 'row',
        paddingBottom: 32,
        marginTop: -26,
        alignItems: 'center'
    },

    inputOnBlur: {
        flex: 1,
        height: 54,
        backgroundColor: '#262626',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#0D0D0D',
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        marginRight: 4,
    },

    inputOnFocus: {
        flex: 1,
        height: 54,
        backgroundColor: '#262626',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#5E60CE',
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        marginRight: 4,
    },

    button: {
        width: 52,
        height: 52,
        borderRadius: 6,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center'
    },

    containerTitleListAll: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    titleListCreate: {
        fontSize: 14,
        fontWeight: '700',
        color: '#4EA8DE',
    },

    titleListFinalized: {
        fontSize: 14,
        fontWeight: '700',
        color: '#8284FA',
    },

    containerNumberTitleList: {
        backgroundColor: '#333333',
        paddingHorizontal: 8,
        borderRadius: 9,
        marginLeft: 8
    },

    numberTitleList: {
        color: '#D9D9D9',
        fontSize: 12,
        fontWeight: '700',
    },

    containerTitleList: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    containerListToDo: {
        marginTop: 20,
        borderTopWidth: 1,
        borderColor: '#333333',

        height: 208,
        alignItems: 'center',
        justifyContent: 'center'
    },


    titleEmptyList: {
        marginTop: 16,
        color: '#808080',
        fontSize: 14,
        fontWeight: 'bold'
    }, 

    subtitleEmptyList: {
        color: '#808080',
        fontSize: 14,
    },

    taskListIncomplete: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        backgroundColor: '#262626',
        borderWidth: 1,
        borderColor: '#333333',
        borderRadius: 8,

        marginTop: 20
    },

    taskTitleList: {
        fontSize: 14,
        color: '#F2F2F2',
        width: '70%',
        marginLeft: 8,
        marginRight: 18
    },

    taskTitleListActive: {
        fontSize: 14,
        color: '#808080',
        width: '70%',
        marginLeft: 8,
        marginRight: 18,
        textDecorationLine: 'line-through'
    }
});