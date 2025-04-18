import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
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
    
    iconContainer: {
      flexDirection: "row",
      gap: 15,
    },
    
    headerTitle: {
      fontFamily: "Prociono",
      fontSize: 28,
      color: "#010101",
    },
    
    icon: {
      padding: 5,
    },
    
    logo: {
      width: 57,
      height: 45,
      marginRight: 20,
    },
    headerContent: {
      flex: 1,
    },    
    headerImage: {
      width: 96,
      height: 65,
    },
    heroSection: {
      alignItems: "center",      
      padding: 20,
      backgroundColor: "#f8f8f8",
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    heroImage: {
      width: '100%',
      height: 180,
      resizeMode: 'contain',
      marginBottom: 15,
      borderRadius: 10,
    },
    heroTitle: {
      fontSize: 59,
      fontFamily: "Montserrat",
      fontWeight: "800",
      color: "#000000",
      letterSpacing: -2.97,
      marginBottom: 16,
    },
    heroSubtitle: {
      fontSize: 24,
      fontFamily: "Poppins",
      fontWeight: "500",
      color: "#000000",
      marginBottom: 10,
      textAlign: "center",
    },
    actionButtons: {
      alignItems: "center",
      padding: 20,
    },
    shopButton: {
      width: 269,
      padding: 30,
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#000000",
    },
    shopButtonText: {
      fontSize: 24,
      fontFamily: "Poppins",
      fontWeight: "500",
      color: "#010101",
    },
    donateSection: {
      padding: 20,
      marginTop: 50,
    },
    sectionTitle: {
      fontSize: 40,
      fontFamily: "Montserrat",
      fontWeight: "800",
      color: "#010101",
      marginBottom: 20,
    },
    donateCard: {
      width: "100%",
      aspectRatio: 0.913,
      padding: 20,
      position: "relative",
    },
    donateBackground: {
      ...StyleSheet.absoluteFillObject,
    },
    donateText: {
      fontSize: 24,
      fontFamily: "Poppins",
      fontWeight: "500",
      color: "#010101",
    },
    donateTitle: {
      fontSize: 40,
      fontFamily: "Montserrat",
      fontWeight: "800",
      color: "#010101",
      marginTop: 20,
    },
    browseSection: {
      padding: 20,
    },
    browseText: {
      fontSize: 24,
      fontFamily: "Poppins",
      fontWeight: "500",
      color: "#010101",
    },
    browseTitle: {
      fontSize: 30,
      fontFamily: "Montserrat",
      fontWeight: "800",
      color: "#000000",
      marginTop: 10,
    },
    specialPackages: {
      padding: 20,
    },
    packageGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 20,
    },
    packageCard: {
      flex: 1,
      minWidth: 150,
    },
    packageImage: {
      width: "100%",
      aspectRatio: 0.92,
    },
    packageTitle: {
      fontSize: 24,
      fontFamily: "Poppins",
      fontWeight: "600",
      color: "#000000",
      marginTop: 8,
    },
    packagePrice: {
      fontSize: 24,
      fontFamily: "Poppins",
      fontWeight: "400",
      color: "#000000",
    },
    topPicks: {
      padding: 20,
    },
    picksGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 13,
    },
    pickCard: {
      flex: 1,
      minWidth: 150,
    },
    pickImage: {
      width: "100%",
      aspectRatio: 0.92,
    },
    pickTitle: {
      fontSize: 24,
      fontFamily: "Poppins",
      fontWeight: "600",
      color: "#000000",
      marginTop: 15,
    },
    pickSubtitle: {
      fontSize: 24,
      fontFamily: "Poppins",
      fontWeight: "600",
      color: "#000000",
    },
    newsletter: {
      paddingHorizontal: 20,
      alignItems: "center",     
      paddingBottom: 20 
    },
    newsletterTitle: {
      fontSize: 40,
      fontFamily: "Montserrat",
      fontWeight: "800",
      color: "#000000",
      textAlign: "center",
      marginBottom: 33,
    },
    newsletterSubtitle: {
      fontSize: 24,
      fontFamily: "Poppins",
      fontWeight: "500",
      color: "#000000",
      textAlign: "center",
      marginBottom: 32,
    },
    joinButton: {
      width: "100%",
      maxWidth: 269,
      borderWidth: 1,
      borderColor: "#000000",
      padding: 26,
      alignItems: "center",
      borderRadius: 10,
      backgroundColor: "#f8f8f8",
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 3,
    },
    joinButtonText: {
      fontSize: 24,
      fontFamily: "Poppins",
      fontWeight: "500",
      color: "#000000",
    },
    footer: {
      padding: 20,
      backgroundColor: "#fff",
      marginTop: 50,
    },
    footerColumns: {
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 28,
    },
    footerColumn: {
      flex: 1,
    },
    footerTitle: {
      fontSize: 24,
      fontFamily: "Poppins",
      fontWeight: "500",
      color: "#010101",
      marginBottom: 20,
      marginTop: 20,
    },
    footerLink: {
      fontSize: 24,
      fontFamily: "Poppins",
      fontWeight: "500",
      color: "#010101",
      lineHeight: 28,
    },
    socialIcons: {
      flexDirection: "row",
      gap: 23,
      marginTop: 31,
    },
    socialIcon: {
      width: 72,
      height: 68,
      borderRadius: 50,
    },
    copyright: {
      marginTop: 30,
    },
    copyrightText: {
      fontSize: 12,
      fontFamily: "Poppins",
      fontWeight: "500",
      color: "#010101",
    },
    favoritesSection: {
      padding: 20,      
    },    
    favoritesList: {
      width: '100%',
      paddingBottom: 10,
    },
    favoriteCard: {
      flexDirection: 'row',
      // backgroundColor: '#fff',
      // borderRadius: 12,
      padding: 15,
      marginBottom: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 3,
      alignItems: 'center',
    },
    favoriteImage: {
      aspectRatio: 1,
      height: 170,
      borderRadius: 8,
      marginRight: 15,
    },
    favoriteDetails: {
      flex: 1,
    },
    favoriteName: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 6,
      fontFamily: "Poppins",
    },
    favoritePrice: {
      fontSize: 16,
      fontWeight: '700',
      color: '#010101',
      fontFamily: "Poppins",
    },
    favoriteButton: {
      padding: 10,
    },
    emptySpace: {
      height: 50,
    }
  });
  