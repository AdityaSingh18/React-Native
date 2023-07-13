import { Text, StyleSheet, View, Image } from "react-native";

export default Home = (props) => {
  const description =
    "In the vibrant realm of imagination, where dreams intertwine with reality, lies a picturesque landscape bathed in hues unseen. Majestic mountains rise to touch the heavens, their snowy peaks glistening under the ethereal light of a thousand stars. Cascading waterfalls whisper enchanting melodies, their crystalline waters weaving tales of forgotten lore.";
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}></View>
      <Image
        style={styles.headerImage}
        resizeMode="contain"
        source={require("../../assets/batman.png")}
      />
      <Text style={styles.mainHeader}>Welcome To</Text>
      <Text
        style={[
          styles.mainHeader,
          {
            fontSize: 33,
            color: "#4c5dab",
            marginTop: 0,
          },
        ]}
      >
        {props.channelName}
      </Text>
      <Text style={styles.paraStyle}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "stretch",
    marginTop: 50,
    borderRadius: 20,
  },
  mainHeader: {
    fontSize: 30,
    color: "#344055",
    textTransform: "uppercase",
  },
  paraStyle: {
    textAlign: "left",
    fontSize: 19,
    color: "#7d7d7d",
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 26,
  },
});
