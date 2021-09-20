import React from 'react';
import { View, Text, Pressable  } from 'react-native';
import Card from 'react-native-paper';


const RequestCard = () => {
    return ( 
        <View>
            <View>
                <Card>  
                    {/* Icon here */}
                </Card>
                <Card>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <Text>Small Parcels</Text>
                            <Text>5 min</Text>
                        </View>

                        <View>
                            <Text>R60</Text>
                        </View>
                    </View>
                </Card>
            </View>
            <View>
                <Card>  
                    {/* Icon here */}
                </Card>
                <Card>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <Text>Medium Parcels</Text>
                            <Text>5 min</Text>
                        </View>

                        <View>
                            <Text>R90</Text>
                        </View>
                    </View>
                </Card>
            </View>
            <View style={{height: 15}}></View>
            {/* Req button here */}
        </View>
     );
}
 
export default RequestCard;