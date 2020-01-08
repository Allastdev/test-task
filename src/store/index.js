import { combineReducers } from 'redux';
import { registration } from '../pages/Registration/reducer';
import { categories } from './Categories/reducer';
import { products } from './Products/reducer';
import { routers } from './Routers/reducer';
import { userProfile } from '../pages/Profile/reducer';
import { companies } from './Companies/reducer';
import { singel_companie } from '../pages/Companie/reducer';
import { login } from '../pages/Login/reducer';


export default combineReducers ({
    registration,
    categories,
    products,
    routers,
    userProfile,
    companies,
    singel_companie,
    login
})