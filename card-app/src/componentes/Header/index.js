import './styles.scss';
import InsightsLogo from '../../assets/brand-insights@3x.svg';
import AddIcon from '../../assets/add_black_24dp.svg';
import ImgSearch from '../../assets/search_black_24dp.svg';
import { Link } from 'react-router-dom'
import { useState } from 'react';

export default function Header() {
    const [searchValue, setSearchValue] = useState('');

    const user = {
        name: 'Antonio',
        email: 'antonio.pina@g.globo',
        img: 'https://static.vecteezy.com/ti/vetor-gratis/p1/2275847-avatar-masculino-perfil-icone-de-homem-caucasiano-sorridente-vetor.jpg'
    }

    return (
        <div className="container">
            <div className="header_item">
                <img src={InsightsLogo} alt="Insight" className="insights_logo" />

                <div className="user_avatar">
                    <img src={user.img} alt="user_avatar" />
                </div>

                <Link to="/create-card">
                    <button className="add_button_area">
                        <img src={AddIcon} alt="Adicionar" className="add_button" />

                    </button>
                </Link>
            </div>
            <div className="user">
                <h2>Olá, {user.name}</h2>
                <span>{user.email}</span>
            </div>
            <div className="search_area">
                <div className="search">
                    <input type="text" placeholder="Pesquise por termos ou categorias" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                    <button>
                        <img src={ImgSearch} alt="Search" />
                    </button>
                </div>
            </div>
        </div>
    )
}