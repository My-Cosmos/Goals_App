import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View
} from "react-native";

function GoalInput({ onAddGoal_jekono_Naam_Ditey_Pari, IsVisible, onCancel }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
    /**
     * setEnteredGoalText() set korar por problem taa holo je **EnteredGoalText** taa amar app.js ee **function addGoalHandler() {}** ee lagbey tar jonno amakey alada function baniye tate forward kortey hobey hobey KARON Inline function ee parameter pass korano jaay naa.
     */
  }
  function addGoalHandler() {
    // **function addGoalHandler(){}** app.js eeoo achey but tar sathey err kono somporko nei karon 2to alada component ee achey
    onAddGoal_jekono_Naam_Ditey_Pari(enteredGoalText);
    setEnteredGoalText("");
  }
  return (
    <Modal visible={IsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/images/goal.png")} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText} /**
        value={enteredGoalText} Use korar karon holo:-
        বাংলা ভাষায় :-
            function addGoalHandler() ee {
                // **function addGoalHandler(){}** app.js eeoo achey but tar sathey err kono somporko nei karon 2to alada component ee achey
                onAddGoal_jekono_Naam_Ditey_Pari(enteredGoalText);
                setEnteredGoalText("");  <---- imp- last ee empty korar por oo empty hocchilo naa input box taa. taar karon holo oii changed state taa bind hocchilo naa. Maney kono proper 2way binding chilo naa, sudhu one way binding chilo.
                imp- ekhaney value prop taa bind korchey. Maney jokhon ee **setEnteredGoalText("");** change hobey seta <TextInput /> box ee reflect hobey.
            }
        
        */
        />
        {/**
       * eta korar karon holo Inline function {onAddGoal_jekono_Naam_Ditey_Pari} ee parameter pass koratey parbo naa tai jonno alada button baniye tate onno function **function addGoalHandler() {}** err moddhe diye parameter pass koratey hocche.
      <Button title="Add Goal" onPress={onAddGoal_jekono_Naam_Ditey_Pari} />
      */}
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancle" onPress={onCancel} color='#f31282' />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color='#5e0acc' />
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: "column", //column by default thake bole dilam naa
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    margin: 20,
    height: 100,
  },
});

export default GoalInput;
