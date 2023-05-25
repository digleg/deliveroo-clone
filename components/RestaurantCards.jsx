import { useNavigation } from "@react-navigation/native";
import PropTypes from "prop-types";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { MapPinIcon, StarIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";

const RestaurantCards = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        });
      }}
      className="bg-white mr-3"
    >
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-green-500">
            <Text className="text-green-500">
              {rating} ∙ {genre}
            </Text>
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">Nearby ∙ {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

RestaurantCards.propTypes = {
  id: PropTypes.string,
  imgUrl: PropTypes.object,
  title: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
  address: PropTypes.string,
  short_description: PropTypes.string,
  dishes: PropTypes.array,
  long: PropTypes.number,
  lat: PropTypes.number,
};

export default RestaurantCards;
