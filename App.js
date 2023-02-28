import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function addGoalHandler(enteredGoalText) {
    /**
     * setCourseGoals ke update korar jonno:- 2types err syntax achey
     * (In the end we wanna take our existing goals and append new one at the end of the array.) -> eita korar ee 2to syntax achey
    --> eta holo synatx 1 (Not recommended)
    *** setCourseGoals([...courseGoals ,enteredGoalText]);
    * Reason Holo:-
    *   If your new state depends on the previous state (Here it does.). Then this will be not the best syntax to do that.
    * imp-Instead when your new state depends on the previous state, a better way of updating is ///to pass a function to this state updating function, A function which will automatically called by react to then to derive the new state. And this function will automatically receive the existing state by react.
    */
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]); /**This is syntax - 2 and the recommended way to update the new state */

    // for closing the modal at the end of adding a goal.
    setModalIsVisible(false); // or call ***endAddGoalHandler(){}*** Both can work.
  }
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }
  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
      /**
       * .filter() is a built-in method in JAVASCRIPT just like as .map(), যেটাকে আমরা call করতে পারি in an array বা array এর উপর।
       * And after calling filter will return a new_array ( new_array = old_array - all_the_items_we_filtered_out).
       * Now filter itself takes a function which has to return true or false.
       * ---Ebar---
       *        if the inner function returns true, then only an item is kept.
       *        if the inner function returns false, then only an item is dropped.
       */
    });
  }
  return (
    <>
    <StatusBar style="light" />
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />

      <GoalInput
        IsVisible={modalIsVisible}
        onAddGoal_jekono_Naam_Ditey_Pari={addGoalHandler}
        onCancel={endAddGoalHandler}
      />

      <View style={styles.goalsContainer}>
        {/* <ScrollView>
          --My-Code--        Starts  
          imp-when outputting a List of data, as we'r doing it here. Every item in the List should receive a key prop which uniquely identify the individual list item. Under the hood it will help react to update the list in an efficient way. 
            {courseGoals.map((goal) => (
              <View style={styles.goalItem} key={goal}>
                <Text style={{ color: "white" }}>{goal}</Text>
              </View>
            ))}
         Ends 
        </ScrollView> */}
        <FlatList
          // {/* while using faltlist we don't need map-method it bydefalut renders */}
          /**
           * FaltList - থেকে key={goal} remove করে দেওয়ার পর warning টা পাচ্ছিল 
           * {warning starts}And the warning is the end, that I'm missing some keys here.
            Because it's still a list.{warning ends}
            and therefore we still should add keys,
            but we don't add them as we added them before.
            ///Instead when using FlatList,
            there are two main ways of adding keys to these list items.
            The first approach is to turn your data values
            from primitive values like strings as we have it here,
            into objects that have a key property.
            And that's what I'll do here.
            When I add a new courseGoal,
            instead of just adding the entered text like this as a goal
            so as a plain string, I will wrap this into a object.
            Where I, for example have a text property
            that the actual goal text,
            but where I actually also add a key property
            which I set to a unique key.
            Now, to generate a unique key here,
            I will actually use Math.random toString like this.
            Which is not really a unique key.
            I could generate the same number twice
            but it's good enough for this demo here.
            And now with that every item in my course goals array
            is actually an object,
            an object with a text property and with a key property.
            And the special thing is that FlatList
            will automatically look for such a key property.
            ///So FlatList does work with primitive values
            in the data array as well
            as you saw a couple of minutes ago.
            But it works even better,
            if your data in this data array is a list of objects.
            So if you have a list of objects as data
            and every object has a key property,
            because then this key property
            will automatically be used as a key
            for the items that are rendered.
            Now, that we turned our items into objects here though,
            we have to make sure that when we access the data
            that belongs to a single item,
            we dive into the text property here on the item.
            Because every item is now an object
            with a text property, that's what we set up here.
            Hence we have to access this text property down here.
            And then with that,
            if we save this and again reload this
            and I now start adding items here,
            you will see that now I can add items as many as I want
            and I don't get this warning anymore
           */
          data={courseGoals}
          renderItem={(itemData) => {
            /**
             * Now 1) we receive itemData parameter value automatically by FlatList
             * Now 2) But the itemData is actually a object generated  by FlatList internally. An object that is rapped arround individual data items we have an our data array.
             * summary:- itemData is not just contain values but also some metaData.
             */
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem_JEKONO_NAAM_DITEY_PAARI={deleteGoalHandler}
              />
            );
          }}
          /**
           * Assume that Akhon tww amra nije object baniye tate key property add korey pathacchi
           * jokhon amra api thaka data nebo arr tate key property thakbey naa tokhon keyExtractor={} use korey key return kortey pari
           */
          keyExtractor={(item, index) => item.id}
          alwaysBounceVertical={true}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
});
