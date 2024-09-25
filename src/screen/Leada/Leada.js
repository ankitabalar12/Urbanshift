import { ActivityIndicator, Image, Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { string } from '../../Helper/string'
import { icons } from '../../Helper/icons'
import { leadsdata, login } from '../../../APICall'
import moment from 'moment/moment'
import AsyncStorage from '@react-native-community/async-storage'
import Login from '../Login/Login'

const Leada = ({ route }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [leadasdata, setLeadadata] = useState('');
  const [totaldata, setTotalData] = useState('');
  const [package_info, setpackage_info] = useState('');




  useEffect(() => {
    const passdata = async () => {
      try {
        const email = await AsyncStorage.getItem('email');
        const password = await AsyncStorage.getItem('password');

        setEmail(email);
        setPassword(password);
        console.log('Email:', email);
        console.log('Password:', password);

        if (email && password) {
          leaddataall(email, password);
        } else {

        }
      } catch (error) {
        console.error('Error while retrieving data from AsyncStorage:', error);
      }
    };

    passdata();
  }, []);

  const handlePhonePress = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`)
      .then(() => {
        console.log('Phone call initiated');
      })
      .catch(error => {
        console.error('Error initiating phone call:', error);
      });
  };
  const leaddataall = async (email, password) => {
    setLoading(true);
    const data = {
      user_name: email,
      password: password,
      token: 'cBVX7P3sQzK5DS1rt7weLG:APA91bEprh6G'
    };
    const url = `https://urbanshift.in/api/UserInfo?user_name=${email}&password=${password}&token=cBVX7P3sQzK5DS1rt7weLG:APA91bEprh6G-TE7hKoafYBAap-1x6JnvNuCoDzUQwmWivxOk8Nv2pznH6feKfBPUM3Zzjp0GdNGZRgZMbQ1FsjAgr2tO9c97AaPc-qnF65DmdT7pNSYL5OliAkOAU1xTEPzp4-y8g7r`;
     console.log('url >>', url);
    try {
      const res = await login(url, data);
       console.log('res 1><', res.data.remaining_leads);
       console.log('inquiry >', res.data.inquiry);
      setLeadadata(res.data.inquiry);
  
      setpackage_info(res.data.package_info[0])


      //  console.log('phone number >> ',res.data.inquiry[0].mobile)
      //  console.log('phone number >> ',res.data[0].package_info)
      setTotalData(res.data);
      setLoading(false);
    } catch (error) {
      console.error('Error occurred:', error);
      setLoading(false);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.blackview}>
        <Text style={styles.leadatext}>{string.leada}</Text>
      </View>
      <ScrollView>
        <Text style={styles.companynametyle}>{package_info.company_name}</Text>
        <View style={styles.flexrowview}>
          <View style={styles.mainviewstyle}>
            <Text style={styles.numbertext}>{totaldata.remaining_leads}</Text>
            <Text style={styles.numbertexttwo}>Leads Balance</Text>
          </View>
          <View style={styles.mainviewstyle2}>
            <Text style={styles.numbertext}>{totaldata.total_count}</Text>
            <Text style={styles.numbertexttwo}>Recived Leads</Text>
          </View>

        </View>
        {loading && <ActivityIndicator size="large" color="#f88500" />}
        {leadasdata && Array.isArray(leadasdata) && leadasdata.length > 0 ? (
          <View>
            {leadasdata.map((item, index) => (
              <View key={index} style={styles.secondviewstyle}>
                <View style={styles.mainfoewview}>
                  <View style={styles.viewrowstyle}>
                    <Image source={icons.user} style={styles.loginimg} />
                    <Text style={styles.usertext}>{item.user_name}</Text>
                  </View>
                  <TouchableOpacity onPress={() => handlePhonePress(item.mobile)} style={styles.positionstyle}>
                    <View>
                      <Image source={icons.telephone} style={styles.telephonestyle} />
                      <Text style={styles.calltextstyle}>CALL</Text>
                    </View>
                  </TouchableOpacity>

                </View>
                <View style={styles.viewrowstyle}>
                  <Image source={icons.locationpin} style={styles.loginimg} />
                  <Text style={[styles.usertext, styles.usertext2]}>{item.city_name} to {item.to_city}</Text>
                </View>
                <View style={styles.viewrowstyle}>
                  <Image source={icons.phone} style={styles.loginimg} />
                  <Text style={[styles.usertext, styles.usertext3]}>{item.mobile}</Text>
                </View>
                <View style={styles.centerview}></View>
                <View style={styles.flexrowviewin}>
                  <Text style={styles.alltextstyle}>ID:{item.id}</Text>
                  <Text style={styles.alltextstyle}>catgory:{item.category_id}</Text>
                  <Text style={styles.textstyle}>Date:
                    <Text style={styles.highlightedText}> {moment(item.created_at).format('DD/MM/YYYY hh:mm A')}</Text>
                  </Text>
                </View>
              </View>
            ))}
          </View>
        ) : (
          <Text style={styles.adddatastyles}>No data available</Text>
        )}

        {/* <View style={[styles.secondviewstyle, styles.secondviewstyletwo]}>
        <View style={styles.mainfoewview}>
          <View style={styles.viewrowstyle}>
            <Image source={icons.user} style={styles.loginimg} />
            <Text style={styles.usertext}>{string.Abouapp}</Text>
          </View>
          <TouchableOpacity onPress={handlePhonePress} style={styles.positionstyle}>
            <View>
              <Image source={icons.telephone} style={styles.telephonestyle} />
              <Text style={styles.calltextstyle}>CALL</Text>
            </View>
          </TouchableOpacity>

        </View>
        <View style={styles.viewrowstyle}>
          <Image source={icons.locationpin} style={styles.loginimg} />
          <Text style={[styles.usertext, styles.usertext2]}>sectoe-49-gorgaon to Sector 48 Gurgaon</Text>
        </View>
        <View style={styles.viewrowstyle}>
          <Image source={icons.phone} style={styles.loginimg} />
          <Text style={[styles.usertext, styles.usertext3]}>898659865</Text>
        </View>
        <View style={styles.centerview}></View>
        <View style={styles.flexrowviewin}>
          <Text style={styles.alltextstyle}>ID:123456</Text>
          <Text style={styles.alltextstyle}>catgory:pockers and movers </Text>
          <Text style={styles.textstyle}>Date:
            <Text style={styles.highlightedText}> 09-09-2023</Text>
          </Text>
        </View>
      </View> */}
        <View style={styles.marginbottom} />
      </ScrollView>
    </View>
  )
}

export default Leada

