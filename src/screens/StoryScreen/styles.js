import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  userName: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
  bottomContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginHorizontal: 10,
  },
  cameraButton: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 50,
  },
  messageButton: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 50,
    height: 50,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  textInput: {
    height: '100%',
    color: '#fff',
    fontSize: 18,
  },
  postedTime: {
    color: '#808080',
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '700',
  },
});

export default styles;
