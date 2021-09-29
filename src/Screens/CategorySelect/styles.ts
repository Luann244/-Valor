import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import {GestureHandlerRootView } from "react-native-gesture-handler";

//tipagem do category
interface CategoryProps {
  isActive: boolean;
};

export const Conatiner = styled.View`
  flex: 1;
  background-color: ${( { theme})=> theme.colors.background_color};
  
`;
export const Header = styled(GestureHandlerRootView)`
  width: 100%;
  height: ${RFValue(113)}px;

  background-color: ${( { theme})=> theme.colors.primary};

  align-items: center;
  justify-content: flex-end;

  padding-bottom:19px;
`;
export const Title = styled.Text`
  font-family: ${( { theme})=> theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${( { theme})=> theme.colors.shape};

`;
export const Category = styled.TouchableOpacity<CategoryProps>`
  width: 100%;
  padding: ${RFValue(15)}px;
  margin: 10px;

  flex-direction: row;
  align-items: center;
  
  background-color: ${( {isActive, theme})=> 
  isActive ? theme.colors.secudary_ligth: theme.colors.background_color};

`;
export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
`;
export const  Name = styled.Text`
  font-family: ${({ theme})=> theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
export const Sepataror = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${( {theme})=> theme.colors.text};
`;
 
export const Footer = styled.View`
  width: 100%;

  padding: 24px;
`; 