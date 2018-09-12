import React from 'react';
import { Font } from 'expo'
import Loading from '../Loading'

export default function templateWrapper(Component) {
    return class Wrapper extends Component {
        state = {  
            wrapLoaded: false,
            contentLoaded: false
        }
    
        async componentDidMount() {
            await Font.loadAsync({
                'Gelion': require('../../assets/fonts/Gelion-Regular.ttf'),
                'Gelion Light': require('../../assets/fonts/Gelion-Light.ttf'),
                'Gelion Medium': require('../../assets/fonts/Gelion-Medium.ttf'),
                'Gelion Bold': require('../../assets/fonts/Gelion-Bold.ttf'),
                'Gelion Black': require('../../assets/fonts/Gelion-Black.ttf')
            })
    
            this.setState({ wrapLoaded: true })
        }
     
        setContentLoaded = () => {
            this.setState({ contentLoaded: true })
        }
    
        render() {
            return this.state.wrapLoaded && this.state.contentLoaded? 
                <Loading />: 
                <Component setLoaded={this.setContentLoaded} />
        }
    }
}

