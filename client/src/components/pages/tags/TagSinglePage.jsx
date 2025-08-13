import React from 'react'
import './TagSinglePage.style.scss';
import { useTag } from '../../hooks/useTag';
import { useParams } from 'react-router';

const TagSinglePage = () => {
    
    const {tag} = useParams();
    const {tags} = useTag(tag);
  
  return (
    <div>TagSinglePage + {tags?.tag}</div>
  )
}

export default TagSinglePage