 // import React from "react";
 import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
 import { bindActionCreators } from 'redux';
 import { getNews } from '../redux/APINews';

 function Feed(){
   const dispatch = useDispatch();
   const loadNewsAction = bindActionCreators(getNews, dispatch);
   useEffect(() => {
       loadNewsAction();
   }, [loadNewsAction]);
 }

 export default Feed;