// This file is a fallback for using MaterialIcons on Android and web.

import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue, StyleProp, ViewStyle } from 'react-native';
import { Feather } from '@expo/vector-icons';

export type FeatherIconName = "home" | "grid" | "tag" | "shopping-bag" | "crosshair" | "compass" ;

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: FeatherIconName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  return <Feather color={color} size={size} name={name} style={{ alignSelf: 'center' }} />;
}
