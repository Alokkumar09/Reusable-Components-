

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use any icon set you prefer


const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      {/* Footer Content */}
      <View style={styles.footerContent}>
        
        {/* Quick Links Section */}
        <View style={styles.linksSection}>
          <Text style={styles.footerHeading}>Quick Links</Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerLink}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Services</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Contact</Text>
          </TouchableOpacity>
          
        </View>

        {/* Social Media Section */}
        <View style={styles.socialMediaSection}>
          <Text style={styles.footerHeading}>Follow Us</Text>
          <View style={styles.socialIcons}>
            {/* Facebook Icon */}
            <TouchableOpacity style={styles.icon}>
              <Icon name="facebook" size={24} color="#2a9d8f" />
            </TouchableOpacity>
            {/* Instagram Icon */}
            <TouchableOpacity style={styles.icon}>
              <Icon name="instagram" size={24} color="#2a9d8f" />
            </TouchableOpacity>
            {/* Twitter Icon */}
            <TouchableOpacity style={styles.icon}>
              <Icon name="twitter" size={24} color="#2a9d8f" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Footer Bottom: Copyright and Contact Us */}
      <View style={styles.footerBottom}>
        <Text style={styles.copyrightText}>© 2024 MyApp. All Rights Reserved.</Text>
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#2a9d8f', // Footer background color
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginTop: 'auto', // Pushes the footer to the bottom of the screen
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap', // Allow items to wrap on smaller screens
  },
  linksSection: {
    flex: 1,
    marginRight: 15,
  },
  footerHeading: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  footerLink: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 8,
  },
  socialMediaSection: {
    flex: 1,
    alignItems: 'flex-end', // Align social icons to the right
  },
  socialIcons: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  icon: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginLeft: 10,
  },
  footerBottom: {
    alignItems: 'center',
    marginTop: 15,
  },
  copyrightText: {
    fontSize: 12,
    color: '#fff',
    marginBottom: 10,
  },
  contactButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  contactText: {
    color: '#2a9d8f',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default Footer;
