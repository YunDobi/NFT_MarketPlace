import { StatusBar } from 'react-native'
import { useIsFocused} from "@react-navigation/core";

const FocusedStatusBar = ({backgroundColor, ...props}) => {
  const isFocused = useIsFocused();
  // console.log(isFocused)
  return isFocused ? <StatusBar animated={true} backgroundColor={backgroundColor} {...props}/> : null;
}

export default FocusedStatusBar