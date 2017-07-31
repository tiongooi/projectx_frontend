import React from 'react';
import MapView from 'react-native-maps';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';


const Maps = (props) => {
  const location = props.location;
  setTimeout(goToCoord,500);

  function goToCoord() {
    const mapViewLocation = location;
    //fit to coordinates -too close
    // mapView.fitToCoordinates([mapViewLocation], {
    //   edgePadding:{top:1000, bottom:1000, left:1000, right:1000},
    //   animated: true
    // });
    //animate to coordinate -unable to zoom
    // mapView.animateToCoordinate(mapViewLocation,2000)
    //best fit:
    mapView.fitToElements(true)
    };

  return(
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        ref={(component)=> {mapView = component}}
        initialRegion={props.location}
       >
        <MapView.Marker
          coordinate={location}
          onPress={()=>alert("navigate with maps")}
        />
       </MapView>
    </View>
  )
};

const styles = StyleSheet.create({
  mapContainer: {
    flex:1,
    height:300
  },
  map: {
    height:300,
    right:0,
    left:0,
  },
  repositionButton: {
    position:'absolute',
    height:50,
    width:50,
    backgroundColor:'red'
  }
})

export default Maps;
