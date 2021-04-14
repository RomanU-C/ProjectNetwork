import React from 'react';
import {
  Text,
} from 'react-native';
import { ListItem, Avatar } from "react-native-elements";
import { TouchableHighlight } from "react-native";

const UserCardItem = (props) => {
    const {name, status, url} = props;
 return (    
    <ListItem
      Component={TouchableHighlight}
      containerStyle={{}}
      disabledStyle={{ opacity: 0.5 }}
      onLongPress={() => console.log("onLongPress()")}
      onPress={() => console.log("onLongPress()")}
      pad={30}
      topDivider
    >
      <Avatar
        source={url}
      />
      <ListItem.Content>
        <ListItem.Title>
          <Text>{name}</Text>
        </ListItem.Title>
        <ListItem.Subtitle>
          <Text>{status}</Text>
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default UserCardItem;