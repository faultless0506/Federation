import { Link } from 'react-router-dom';
import './ButtonSocial.scss';
import vk from "./../../../assets/svg/vk.svg";

export default function ButtonVK() {
    return (
        <li className="button__social"><Link to='https://t.me/mfsmn' target="_blank"><img src={vk} alt="" /></Link></li>
    );
}