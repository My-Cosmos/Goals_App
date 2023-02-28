import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem({
  text,
  onDeleteItem_JEKONO_NAAM_DITEY_PAARI,
  id,
}) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd", padding: 8 }} //only for android
        onPress={onDeleteItem_JEKONO_NAAM_DITEY_PAARI.bind(this, id)}
        style={({pressed})=>pressed && styles.pressedItem}
      >
        <Text style={{ color: "white" }}>{text}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
    padding: 6.5
  },
  pressedItem:{
    opacity: 0.5
  }
});
