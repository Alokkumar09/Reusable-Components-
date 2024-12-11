import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function GameCard({ game }) {
  return (
    <LinearGradient
      colors={['#DDB54F', '#85B896']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.card}
    >
      <View style={styles.container}>
      <View style={styles.leftSection}>
      <Image
          source={require('../assets/shield.png')}
          style={styles.icon}
        />
      </View>

      
    <View style={styles.centerSection} >

        <View style={styles.gameContainer}>
        <Text style={styles.gameName}>{game.name}</Text>
        </View>

        <View style={styles.gameContainer}>
        <Text style={styles.gameDetails}>Buy-in: {game.buyIn}</Text>
        <Text style={styles.gameDetails}>Blinds: {game.blinds}</Text>

        <View style={styles.playersInfo}>
          <Image
            source={require('../assets/people.png')}
            style={styles.playersIcon}
          />
          <Text style={styles.playersText}>{game.players}</Text>
        </View>

        </View>
   </View>
      <View style={styles.rightSection}>
      <TouchableOpacity style={styles.playButton}>
          <Text style={styles.playButtonText}>PLAY</Text>
        </TouchableOpacity>
      </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    marginTop:10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  container:{
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  leftSection: {
    marginRight: 15,
    flex: 0.1,
  },
  icon: {
    width: 50,
    height: 50,
  },
  centerSection: {
    flex: 0.7,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gameName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  gameContainer:{flexDirection:'column', marginLeft: 5, flex: 0.5},

  gameDetails: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  playersInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  playersIcon: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  playersText: {
    fontSize: 13,
    color: '#000',
  },
  rightSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.2,
  },
  playButton: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    minHeight: 40,
    minWidth: 80,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ff1493',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButtonText: {
    color: '#ff1493',
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'center',
  },
});
