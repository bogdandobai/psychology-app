import * as React from 'react'
import {useEffect} from "react";

export const usePopToTop = (navigation) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      navigation.popToTop();
    });
    return unsubscribe;
  }, [navigation]);
}
