import React from 'react';
import { View, Text } from 'react-native';

import styles from './style.js';

export default function ResultImc(props){
    return (
        <View style={styles.contextImc}>
            <Text style={styles.titleResultImc}>{props.messageResultImc}</Text>
            <Text style={styles.resultImc}>{props.resultImc}</Text>
        </View>
    );
}