import React from "react";
import {
    Text,
    Image
} from 'react-native';

const Header = props => (

    // <Text>Hi</Text>
    <Image source={require('../IMG_20200407_195808.jpg')}
        style={{ width: 800, height: 1210 }} />
    // <Image source={`https://www.facebook.com/photo/?fbid=1061006510596119&set=a.154789907884455`}></Image>
)

export default Header;