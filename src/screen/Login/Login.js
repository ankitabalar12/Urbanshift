import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { string } from '../../Helper/string'
import { icons } from '../../Helper/icons'
import { login, loginall, notificationdataapi } from '../../../APICall'
import AsyncStorage from '@react-native-community/async-storage'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [token, settoken] = useState('');

    // useEffect(() => {
    //     const passdata = async () => {
    //         if (email && password && token) {
    //             notificationdata(email, password, token);
    //           } else {

    //           }
    //     }

    //     passdata();
    //     // notificationdata()
    //   }, []);


    const logindata = async () => {
        const errors = {};
        if (!email) {
            errors.email = 'Please enter mobile';
        }
        if (!password) {
            errors.password = 'Please enter password';
        }
        setErrors(errors);

        console.log('global.url >> ', global.url);
        setSubmitted(true);

        if (email !== '' && password !== '') {
            setLoading(true);
            const data = {
                user_name: email,
                password: password,
                token: 'cBVX7P3sQzK5DS1rt7weLG:APA91bEprh6G'
            };
            console.log('data >> ', data);
            console.log('email >> ', email);
            try {
                const url = `https://urbanshift.in/api/UserInfo?user_name=${email}&password=${password}&token=cBVX7P3sQzK5DS1rt7weLG:APA91bEprh6G-TE7hKoafYBAap-1x6JnvNuCoDzUQwmWivxOk8Nv2pznH6feKfBPUM3Zzjp0GdNGZRgZMbQ1FsjAgr2tO9c97AaPc-qnF65DmdT7pNSYL5OliAkOAU1xTEPzp4-y8g7r`;
                const res = await login(url, data);
                // console.log('res ><', res)
                //      console.log('data-----', data);
                if (res && res.success === 'true') {
                    await AsyncStorage.setItem('email', email);
                    await AsyncStorage.setItem('password', password);
                    // await AsyncStorage.setItem('token', token);
                    navigation.navigate('Leada');
                    // notificationdata()
                    await notificationdata(email, password, global.token);
                    console.log(email, password, global.token)
                }
                else {
                    Alert.alert('Invalid Login', 'Please check your mobile number and password.');
                }
            } catch (error) {
                console.error('Login process error:', error);
                Alert.alert('Error', 'An unexpected error occurred. Please try again.');
            } finally {
                setLoading(false);
            }
        } else {
            Alert.alert('Validation Error', 'Please fill in all required fields.');
        }
    };
    const handleButtonClick = () => {
        logindata();
    };
    const notificationdata = async () => {
        if (!global.token) {
            console.error('Token is not available.');
            return;
        }
        const data = {
            user_name: email,
            password: password,
            token: global.token
        };
        console.log('email >><<', email)
        console.log('token >>', global.token)

        const url = `https://urbanshift.in/api/UpdateToken?user_name=${email}&password=${password}&token=${global.token}`;
        console.log('url ==', url)
        const res = await notificationdataapi(url, data);
        console.log('res ><>', res)
    }
    return (
        <View style={styles.container}>

            <View style={styles.maniview}></View>
            <View style={styles.maniviewtop}></View>
            <Image source={icons.urabanimg} style={styles.urabanimg} />
            {/* <View style={styles.flexworstyle}>
                <View style={styles.ustextlogo}>
                    <Text style={styles.ustext}>US</Text>
                </View>
                <View>
                    <Text style={styles.urbandtext}>{string.UrbanShift}</Text>
                    <View style={styles.flexrowtwo}>
                        <Text style={styles.indiasSe}>{string.indiasServicePoe}</Text>
                    </View>
                </View>
            </View> */}
            <Text style={styles.PartnerDas}>{string.PartnerDashboardLogin}</Text>
            <View style={styles.textinputview}>
                <TextInput
                    placeholder="Mobile"
                    placeholderTextColor={'#000'}
                    value={email}
                    maxLength={10}
                    keyboardType="numeric"
                    onChangeText={(email) => setEmail(email)}
                    style={styles.input}
                />
            </View>
            {errors.mobile && <Text style={styles.erroetext}>{errors.mobile}</Text>}
            <View style={styles.textinputview}>
                <TextInput
                    placeholder="Password"
                    placeholderTextColor={'#000'}
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                    style={styles.input}
                />
            </View>
            {errors.password &&
                <Text style={styles.erroetext}>{errors.password}</Text>
            }
            {/* <View style={styles.boebuttonstyle}> */}
            <TouchableOpacity onPress={() => handleButtonClick()}
                style={styles.bottonstyle}>
                <View style={styles.flexdractionrow}>
                    <Image source={icons.login} style={styles.loginimg} />
                    <Text style={styles.logintext}>{string.login}</Text>
                </View>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.bottonstyle}>
                    <View style={styles.flexdractionrow}>
                        <Image source={icons.edit} style={styles.loginimg} />
                        <Text style={styles.logintext}>{string.rigster}</Text>
                    </View>
                </TouchableOpacity> */}
            {/* </View> */}
        </View>
    )
}

export default Login


