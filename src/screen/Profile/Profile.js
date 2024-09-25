import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { string } from '../../Helper/string'
import { styles } from './styles'
import { login } from '../../../APICall'
import AsyncStorage from '@react-native-community/async-storage'

const Profile = ({ navigation, }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [profiledatadata, setProfileData] = useState('');
    useEffect(() => {
        const passdata = async () => {
            try {
                const email = await AsyncStorage.getItem('email');
                const password = await AsyncStorage.getItem('password');

                setEmail(email);
                setPassword(password);
                console.log('Email:', email);
                console.log('Password:', password);
                navigation.addListener('focus', () => {
                    if (email && password) {
                        profilealldata(email, password);
                    } else {
    
                    }
              
                })
              
               
            } catch (error) {
                console.error('Error while retrieving data from AsyncStorage:', error);
            }
        };

        passdata();
    }, []);

    const profilealldata = async (email, password) => {
        setLoading(true);
        const data = {
            user_name: email,
            password: password,
            token: 'cBVX7P3sQzK5DS1rt7weLG:APA91bEprh6G'
        };
        const url = `https://urbanshift.in/api/UserInfo?user_name=${email}&password=${password}&token=cBVX7P3sQzK5DS1rt7weLG:APA91bEprh6G-TE7hKoafYBAap-1x6JnvNuCoDzUQwmWivxOk8Nv2pznH6feKfBPUM3Zzjp0GdNGZRgZMbQ1FsjAgr2tO9c97AaPc-qnF65DmdT7pNSYL5OliAkOAU1xTEPzp4-y8g7r`;
        console.log('url >>', url);

        const res = await login(url, data);
        console.log('res ><', res.data);
        console.log('package_info >', res.data.package_info[0]);
        console.log('package_info >', res.data.package_info.user_name);
        setProfileData(res.data.package_info[0]);

        setLoading(false);

        setLoading(false);


    }
    return (
        <View style={styles.container}>
            <View style={styles.blackview}>
                <Text style={styles.leadatext}>{string.myprofile}</Text>
            </View>
            <ScrollView>
                <View style={styles.mainview}>
                    <Text style={styles.textstyle}>
                        {string.companyname} :
                        <Text style={styles.highlightedText}> {profiledatadata.company_name}</Text>
                    </Text>

                </View>
                <View style={[styles.mainview, styles.mainviewtow]}>
                    <Text style={styles.textstyle}>
                        {string.Mobaile} :
                        <Text style={styles.highlightedText}> {profiledatadata.mobile_1}</Text>
                    </Text>

                </View>
                <View style={[styles.mainview, styles.mainviewtow]}>
                    <Text style={styles.textstyle}>
                        {string.email} :
                        <Text style={styles.highlightedText}> {profiledatadata.email}</Text>
                    </Text>

                </View>
                <View style={[styles.mainview, styles.mainviewtow]}>
                    <Text style={styles.textstyle}>
                        {string.username} :
                        <Text style={styles.highlightedText}> {profiledatadata.user_name}</Text>
                    </Text>

                </View>
                <View style={[styles.mainview, styles.mainviewtow]}>
                    <Text style={styles.textstyle}>
                        {string.package} :
                        <Text style={styles.highlightedText}> {profiledatadata.package_name}</Text>
                    </Text>

                </View>
                <View style={[styles.mainview, styles.mainviewtow]}>
                    <Text style={styles.textstyle}>
                        {string.leada} :
                        <Text style={styles.highlightedText}> {profiledatadata.leads}</Text>
                    </Text>

                </View>
                <View style={[styles.mainview, styles.mainviewtow]}>
                    <Text style={styles.textstyle}>
                        {string.amount} :
                        <Text style={styles.highlightedText}> {profiledatadata.amount}</Text>
                    </Text>

                </View>
                <View style={styles.marbottom} />
            </ScrollView>
        </View>
    )
}

export default Profile

