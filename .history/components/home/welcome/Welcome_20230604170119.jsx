import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import styles from "./welcome.style";
import { icons, SIZES, COLORS } from "../../../constants";
import { useRouter } from "expo-router";

const Welcome = () => {
  const router = useRouter();

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
            onChange={() => {}}
            placeholder="what are you looking for?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={[styles.searchBtnImage, { backgroundColor: COLORS.lightGreen }]}            
          />
        </TouchableOpacity>
      </View>

      <View style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>Categories</Text>
        <FlatList
          data={[]}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={[
                styles.categoryBtn,
                { marginLeft: index === 0 ? SIZES.padding : 0 },
              ]}
              onPress={() => {}}
            >
              <View style={styles.categoryBtnWrapper}>
                <Image
                  source={icons.category}
                  resizeMode="contain"
                  style={styles.categoryBtnImage}
                />
                </View>
                </TouchableOpacity>
                </View>
                </
    </View>
  );
};

export default Welcome; 
