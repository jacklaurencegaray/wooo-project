
import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import templateWrapper from './HoC/templateWrapper'
import Logo from '../assets/images/svg/logo'
import Couple from '../assets/images/svg/couple'
import BottomCurve from '../assets/images/svg/bottomCurves'

class Login extends Component {
    
    onLoginWithFacebook = () => {
        
    }

    componentDidMount = () => {
        this.props.setLoaded()
    }

    render() { 
        return (
            <View style={styles.container}>
                <Logo style={styles.logo} />
                <Text style={styles.slogan}>
                    Same ol' online dating {"\n"}but the cooler way!
                </Text>
                <Couple style={styles.artwork} />
                <BottomCurve style={styles.bottomCurve} />
                <TouchableOpacity onPress={this.onLoginWithFacebook}>
                    <View style={styles.buttonLogin}>
                        <Text style={styles.buttonLoginText}>Login with Facebook</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.warning}>Upon logging in, you agree to our Terms and Conditions</Text>
            </View>
        )
    }
}

export default Login
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#F1F2F2',
        alignItems: 'center'
    },
    logo: {
        marginBottom: '2%'
    },
    slogan: {
        fontSize: 28,
        fontWeight: '800',
        fontFamily: 'Gelion Black',
        color: '#D74177',
        letterSpacing: -1,
        lineHeight: 32,
        width: 300,
        textAlign: 'center'
    },
    artwork: {
        marginTop: '10%',
        marginBottom: '0%'
    },
    bottomCurve: {
        position: 'absolute',
        bottom: 0
    },
    buttonLogin: {
        backgroundColor: '#ED1E79',
        alignItems: 'center',
        borderRadius: 29,
        marginTop: '6%',
        paddingTop: '3%',
        paddingBottom: '3.5%',
    },
    buttonLoginText: {
        color: '#ffffff',
        fontFamily: 'Gelion Medium',
        fontSize: 20,
        paddingLeft: '10%',
        paddingRight: '10%'
    },
    warning: {
        color: '#969696',
        marginTop: '2%',
        fontFamily: 'Gelion'
    }
})
