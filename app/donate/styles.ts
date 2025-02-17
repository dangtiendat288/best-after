import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingTop: 58,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  backLink: {
    marginRight: 30,
  },
  backIcon: {
    width: 57,
    height: 45,
    resizeMode: "contain",
  },
  headerContent: {
    flex: 1,
  },
  headerTitle: {
    fontFamily: "Prociono",
    fontSize: 28,
    color: "#010101",
  },
  iconContainer: {
    flexDirection: "row",
    gap: 15,
  },
  icon: {
    padding: 5,
  },
  headerImage: {
    width: 98,
    height: 64,
    resizeMode: "contain",
  },
  mainImage: {
    width: "100%",
    height: 244,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 50,
  },
  content: {
    padding: 24,
  },
  title: {
    fontSize: 59,
    fontFamily: "Montserrat",
    fontWeight: "800",
    color: "#000000",
    letterSpacing: -2.97,
    marginTop: 30,
  },
  subtitle: {
    fontSize: 24,
    fontFamily: "Poppins",
    fontWeight: "500",
    lineHeight: 28,
    color: "#000000",
    marginTop: 24,
  },
  donateImage: {
    width: "100%",
    aspectRatio: 0.95,
    resizeMode: "contain",
    marginTop: 36,
  },
  separatorImage: {
    width: "100%",
    aspectRatio: 0.9,
    resizeMode: "contain",
    marginTop: 19,
    maxWidth: 345,
    alignSelf: "center",
  },
});
