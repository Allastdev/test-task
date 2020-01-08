import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { getCompanie, addReview } from './actions';
import * as S from './Companie.styles';
import { Modal } from '../../components/Modal';
import { LinkBlock } from '../../helpers/styles';

export const Companie = (props) => {
    const dispatch = useDispatch();

    const [review, setReview] = useState('');
    const [score, setScore] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const singleCompanyState = useSelector(state => state.singel_companie);

    const {singel_companie, errorMessage} = singleCompanyState;

    const [scores] = useState([1,2,3,4,5]);

    useEffect(() => {
        dispatch(getCompanie(props.match.params.id));
    }, []);

  return(
      <>
        <LinkBlock to='/'>Go to Companies</LinkBlock>
        <LinkBlock to='/' onClick={()=> {localStorage.removeItem('access_token')}}>Log Out</LinkBlock>
        <S.Container>
            <h1>{singel_companie.name}</h1>
            <p>{singel_companie.address}</p>
            <p>{singel_companie.category && singel_companie.category.name}</p>
            <p>{singel_companie.product && singel_companie.product.name}</p>
            <p>{singel_companie.user && singel_companie.user.username}</p>
            <p>{singel_companie.user && singel_companie.user.email}</p>
        </S.Container>
        <S.Review onChange={(e) => setReview(e.target.value)}/>
        <S.Select onChange={(e) => setScore(e.target.value)}>
            <option>Please choose score</option>
            {scores.map(el => (
                <option 
                    value={el} 
                    key={el}>
                        {el}
                </option>
            ))}
        </S.Select>
        <S.AddReview onClick={() => {dispatch(addReview(props.match.params.id, score, review)); setShowModal(true); setReview('')}}>
            Post a review
        </S.AddReview> 
 
        { showModal && <Modal>
                    <p>{errorMessage}</p>
                     <button 
                        onClick={() => setShowModal(false)}
                     >X</button>
            </Modal>}
      </>
  )
}
