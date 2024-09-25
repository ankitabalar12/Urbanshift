import AsyncStorage from "@react-native-community/async-storage";

export const login = async (url, data) => {
    console.log('data <>', data)
    try {
        const res = await fetch(url, {
            method: 'POST',
            body: data,
        });
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const finalRes = await res.json();
        console.log('finalRes----', finalRes)
        if (finalRes && finalRes.success == true) {
            await AsyncStorage.setItem('email', email);
            console.log('email >> ', email)
            await AsyncStorage.setItem('logindata', JSON.stringify(finalRes.data[0]));
            const userdata = await AsyncStorage.getItem('logindata')
            console.log('userdata >><< ', userdata)
            const finaluserdata = JSON.parse(userdata);
            console.log('finaluserdata -->>>>', finaluserdata)
            console.log('Login successful. User ID:----', finalRes.data[0]);
        }

        return finalRes;
    } catch (error) {
        console.log('error-->>>>', error)
    }
};

export const leadsdata = async (url, data) => {
    console.log('dataleadsApi >>', data )
    try {
        const res = await fetch(url, {
            method: 'post',
            body: data,
        });
        const finalRes = await res.json();

        return finalRes;
    } catch (error) {
        console.log('error-->>>>', error)
    }
};


export const notificationdataapi = async (url, data) => {
    console.log('dataleadsApi >>', data )
    try {
        const res = await fetch(url, {
            method: 'post',
            body: data,
        });
        const finalRes = await res.json();

        return finalRes;
    } catch (error) {
        console.log('error-->>>>', error)
    }
};

