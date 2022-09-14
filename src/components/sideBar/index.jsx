import './index.css'

import { Suggestions } from './components/suggestions'
import { User } from './components/user'

export const SideBar = () => (
    <aside className="side-bar">
        <User title='catanacomics' subtitle='Catana' />
        <Suggestions />
        <footer>
            <nav>
                <ul>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">• Ajuda</a></li>
                    <li><a href="">• Imprensa</a></li>
                    <li><a href="">• API</a></li>
                    <li><a href="">• Carreiras</a></li>
                    <li><a href="">• Privacidade</a></li>
                    <li><a href="">• Termos</a></li>
                    <li><a href="">• Localizações</a></li>
                    <li><a href="">• Contas mais relevantes</a></li>
                    <li><a href="">• Hashtags</a></li>
                    <li><a href="">• Idioma</a></li>
                </ul>
            </nav>
            <h4>
                © 2021 INSTAGRAM DO FACEBOOK
            </h4>
        </footer>
    </aside>
)
