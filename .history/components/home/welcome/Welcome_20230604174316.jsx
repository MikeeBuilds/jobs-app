import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from "react-native";

import styles from "./welcome.style";
import { icons, COLORS } from "../../../constants";

const jobTypes = ["Full-Time", "Part-Time", "Contractor"];

const Welcome = () => {
  const [activeJobType, setActiveJobType] = useState("Full-Time");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Mike</Text>
        <Text style={styles.welcomeMessage}>Welcome to your dashboard</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChangeText={() => {}}
            placeholder="What are you looking for?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={[
              styles.searchBtnImage,
              { backgroundColor: COLORS.lightGreen },
            ]}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType === item)}
              onPress={() => setActiveJobType(item)}
            >
              <Text style={styles.tabText(activeJobType === item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
