function DetailScreen() {
  return (
    <View style={styles.container}>
      <View style={{width: '100%', flex: 1, marginTop: 64}}>
        <Image
          source={require('./assets/details.png')}
          style={{width: undefined, height: undefined, flex: 1}}
          resizeMode="contain"
        />
        <View style={{flex: 2, alignItems: 'center'}}>
          <Text style={{fontWeight: '100', fontSize: 32}}>Details Screen</Text>
        </View>
      </View>
    </View>
  );
}
